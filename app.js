/* ===========================================================================
   app.js — apresentacao das letras anotadas
   =========================================================================== */
(function () {
  'use strict';

  var CHAVE = 'letrasAnotadas:v1:';
  var LETRAS = {};        // id -> [ [verso, verso, ...], ... ]  (estrofes)
  var slides = [];        // sequencia linear de slides
  var atual = 0;
  var slideAtivo = null;
  var trocando = false;

  var palco = document.getElementById('palco');
  var overlay = document.getElementById('overlay');
  var elSeletor = document.getElementById('seletor');
  var elPontos = document.getElementById('pontos');
  var btnMusicaAnt = document.getElementById('btn-musica-ant');
  var btnMusicaProx = document.getElementById('btn-musica-prox');

  /* ---------------------------------------------------------------- utils */

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  function parsear(texto) {
    return String(texto)
      .replace(/\r/g, '')
      .split(/\n\s*\n+/)
      .map(function (bloco) {
        return bloco.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
      })
      .filter(function (estrofe) { return estrofe.length > 0; });
  }

  /* ------------------------------------------------------------ armazenar */

  function carregarLetras() {
    LETRAS = {};
    MUSICAS.forEach(function (m) {
      if (window.LETRAS_LOCAIS && window.LETRAS_LOCAIS[m.id]) {
        LETRAS[m.id] = parsear(window.LETRAS_LOCAIS[m.id]);
        return;
      }
      var salvo = null;
      try { salvo = localStorage.getItem(CHAVE + m.id); } catch (e) { /* sem storage */ }
      if (salvo) LETRAS[m.id] = parsear(salvo);
    });
  }

  function salvarLetra(id, texto) {
    try { localStorage.setItem(CHAVE + id, texto); } catch (e) { /* modo privado */ }
    LETRAS[id] = parsear(texto);
  }

  /* ---------------------------------------------------------- importação */

  /* Monta o formulario de colar letra. E usado nos dois lugares: como slide da
     propria musica (quando ela ainda nao tem letra) e dentro do overlay, para
     substituir uma letra ja existente. */
  function formularioImportar(musica, aoConcluir) {
    var painel = el('div', 'painel');

    painel.appendChild(el('h2', null, musica.titulo));
    var sub = el('p', 'sub');
    sub.innerHTML =
      'Cole abaixo a letra completa desta música, <strong>mantendo uma linha em branco entre as estrofes</strong>. ' +
      'A página divide a letra nos trechos já anotados e guarda o texto no seu navegador — ' +
      'você só faz isso uma vez. Esperado: <strong>' + musica.estrofesEsperadas + ' estrofes</strong>.';
    painel.appendChild(sub);

    var area = el('textarea');
    area.placeholder = 'Cole a letra aqui...';
    area.spellcheck = false;
    painel.appendChild(area);

    var barra = el('div', 'barra');
    var botao = el('button', 'botao', 'Montar apresentação');
    botao.disabled = true;
    var estado = el('span', 'estado', 'Nenhuma estrofe detectada ainda.');
    barra.appendChild(botao);
    barra.appendChild(estado);
    painel.appendChild(barra);

    function conferir() {
      var estrofes = parsear(area.value);
      var n = estrofes.length;
      botao.disabled = n === 0;
      if (n === 0) {
        estado.className = 'estado';
        estado.textContent = 'Nenhuma estrofe detectada ainda.';
      } else if (n === musica.estrofesEsperadas) {
        estado.className = 'estado';
        estado.textContent = n + ' estrofes detectadas — confere com a estrutura anotada.';
      } else {
        estado.className = 'estado alerta';
        estado.textContent = n + ' estrofes detectadas, mas a estrutura espera ' +
          musica.estrofesEsperadas + '. Confira as linhas em branco (dá para seguir assim mesmo).';
      }
    }

    area.addEventListener('input', conferir);
    /* o palco inteiro avanca no clique; aqui dentro o clique e para digitar */
    painel.addEventListener('click', function (ev) { ev.stopPropagation(); });
    botao.addEventListener('click', function () {
      salvarLetra(musica.id, area.value);
      aoConcluir(musica);
    });

    painel._area = area;
    return painel;
  }

  /* overlay: trocar a letra de uma musica que ja tem letra (tecla L) */
  function telaImportar(musica) {
    var painel = formularioImportar(musica, function (m) {
      fecharOverlay();
      reconstruir(indicePrimeiroSlide(MUSICAS.indexOf(m)));
    });
    overlay.innerHTML = '';
    overlay.appendChild(painel);
    overlay.classList.remove('oculto');
    painel._area.focus();
  }

  /* refaz a lista de slides mantendo (ou escolhendo) a posicao atual */
  function reconstruir(destino) {
    var anterior = slides[atual];
    construirSlides();
    var alvo = destino;
    if (alvo == null && anterior) {
      alvo = slides.findIndex(function (s) {
        return s.mi === anterior.mi && s.tipo === anterior.tipo && s.ti === anterior.ti;
      });
      if (alvo < 0) alvo = indicePrimeiroSlide(anterior.mi);
    }
    slideAtivo = null;
    palco.innerHTML = '';
    mostrar(Math.max(0, alvo || 0), 0);
  }

  /* ----------------------------------------------------------- construcao */

  function construirSlides() {
    slides = [];
    MUSICAS.forEach(function (m, mi) {
      /* sem letra, a musica entra na apresentacao mesmo assim: um slide unico
         com o titulo e o campo para colar. Assim da para navegar entre todas
         as musicas desde o inicio, sem ter de importar tudo antes. */
      if (!LETRAS[m.id] || !LETRAS[m.id].length) {
        slides.push({ tipo: 'importar', mi: mi });
        return;
      }
      slides.push({ tipo: 'capa', mi: mi });
      m.trechos.forEach(function (t, ti) {
        slides.push({ tipo: 'trecho', mi: mi, ti: ti });
      });
    });
  }

  function linhasDoTrecho(musica, trecho) {
    var estrofes = LETRAS[musica.id] || [];
    var blocos = (trecho.estrofes || []).map(function (i) { return estrofes[i] || []; });
    /* "versos": [inicio, fim] recorta um pedaco da estrofe, para quebrar
       estrofes longas em mais de um slide. Os indices de "linhas" das notas
       passam a contar a partir do inicio do recorte. */
    if (trecho.versos) {
      var plano = [];
      blocos.forEach(function (b) { plano = plano.concat(b); });
      return [plano.slice(trecho.versos[0], trecho.versos[1] + 1)];
    }
    return blocos;
  }

  /* --------------------------------------------------- render: importar */

  /* Musica ainda sem letra: no lugar do conteudo, o campo para colar. Nao
     mostra epigrafe nem contexto — a analise so aparece com a letra no lugar. */
  function renderImportar(musica, indiceMusica) {
    var s = el('section', 'slide importar');
    s.appendChild(el('div', 'faixa', 'Música ' + (indiceMusica + 1) + ' de ' + MUSICAS.length));
    s.appendChild(formularioImportar(musica, function (m) {
      reconstruir(indicePrimeiroSlide(MUSICAS.indexOf(m)) + 1);
    }));
    return s;
  }

  /* -------------------------------------------------------- render: capa */

  function renderCapa(musica, indiceMusica) {
    var s = el('section', 'slide capa');
    s.appendChild(el('div', 'faixa', 'Música ' + (indiceMusica + 1) + ' de ' + MUSICAS.length));
    s.appendChild(el('h1', null, musica.titulo));
    if (musica.epigrafe) s.appendChild(el('p', 'epigrafe', musica.epigrafe));
    if (musica.contexto) s.appendChild(el('p', 'contexto', musica.contexto));
    s.appendChild(el('p', 'dica', 'clique para começar'));
    return s;
  }

  /* ------------------------------------------------------ render: trecho */

  function renderTrecho(musica, trecho, ti) {
    var s = el('section', 'slide');

    var cab = el('div', 'cabecalho-trecho');
    cab.appendChild(el('span', 'num', 'TRECHO ' + (ti + 1) + '/' + musica.trechos.length));
    cab.appendChild(el('span', 'rotulo-trecho', trecho.rotulo || ''));
    s.appendChild(cab);

    var conteudo = el('div', 'conteudo');
    var grade = el('div', 'grade');

    /* coluna da letra */
    var colLetra = el('div', 'letra');
    var contador = 0;
    linhasDoTrecho(musica, trecho).forEach(function (estrofe) {
      var bloco = el('div', 'estrofe');
      estrofe.forEach(function (verso) {
        var l = el('p', 'linha', verso);
        l.dataset.i = contador++;
        bloco.appendChild(l);
      });
      colLetra.appendChild(bloco);
    });
    if (trecho.repeticao) {
      var rep = el('div', 'repeticao', trecho.repeticao);
      rep.dataset.repeticao = '1';
      colLetra.appendChild(rep);
    }

    /* coluna das notas */
    var colNotas = el('div', 'notas');
    (trecho.notas || []).forEach(function (nota, n) {
      var card = el('article', 'nota');
      card.dataset.n = n;
      card.style.setProperty('--cor', 'var(--c' + (nota.cor || 0) + ')');
      card.style.setProperty('--atraso', (0.28 + n * 0.13).toFixed(2) + 's');
      if (nota.titulo) card.appendChild(el('h3', null, nota.titulo));
      card.appendChild(el('p', null, nota.texto || ''));
      card.addEventListener('mouseenter', function () { focar(s, n, true); });
      card.addEventListener('mouseleave', function () { focar(s, n, false); });
      colNotas.appendChild(card);
    });

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'fios');
    svg.setAttribute('preserveAspectRatio', 'none');

    grade.appendChild(colLetra);
    grade.appendChild(svg);
    grade.appendChild(colNotas);
    conteudo.appendChild(grade);
    s.appendChild(conteudo);

    s._dados = { musica: musica, trecho: trecho };
    return s;
  }

  /* ------------------------------------------------------------ destaque */

  function focar(slide, n, ligar) {
    var letra = slide.querySelector('.letra');
    var nota = (slide._dados && slide._dados.trecho.notas || [])[n];
    if (!letra || !nota) return;
    var linhas = slide.querySelectorAll('.linha');
    var caminhos = slide.querySelectorAll('.fios path');

    letra.classList.toggle('focando', ligar);
    Array.prototype.forEach.call(linhas, function (l) { l.classList.remove('acesa'); });
    Array.prototype.forEach.call(caminhos, function (p) { p.classList.remove('aceso', 'escuro'); });
    if (!ligar) return;

    if (nota.linhas) {
      for (var i = nota.linhas[0]; i <= nota.linhas[1]; i++) {
        if (linhas[i]) linhas[i].classList.add('acesa');
      }
    }
    Array.prototype.forEach.call(caminhos, function (p) {
      p.classList.add(Number(p.dataset.n) === n ? 'aceso' : 'escuro');
    });
  }

  /* ---------------------------------------------------- ajuste de escala */

  function ajustarEscala(slide) {
    var conteudo = slide.querySelector('.conteudo');
    var grade = slide.querySelector('.grade');
    if (!conteudo || !grade) return;
    if (window.innerWidth <= 860) { conteudo.style.setProperty('--k', '1'); return; }
    var k = 1, guarda = 0;
    conteudo.style.setProperty('--k', '1');
    while (grade.offsetHeight > conteudo.clientHeight - 2 && k > 0.52 && guarda++ < 40) {
      k -= 0.035;
      conteudo.style.setProperty('--k', k.toFixed(3));
    }
  }

  /* ------------------------------------------------------- fios (bracos) */

  function desenharFios(slide) {
    var svg = slide.querySelector('.fios');
    var grade = slide.querySelector('.grade');
    var colLetra = slide.querySelector('.letra');
    if (!svg || !grade || !colLetra) return;
    if (window.innerWidth <= 860) { svg.innerHTML = ''; return; }

    var g = grade.getBoundingClientRect();
    var cl = colLetra.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + Math.round(g.width) + ' ' + Math.round(g.height));
    svg.innerHTML = '';

    var linhas = slide.querySelectorAll('.linha');
    var marcaRep = slide.querySelector('[data-repeticao]');
    var notas = (slide._dados && slide._dados.trecho.notas) || [];
    var eixo = (cl.right - g.left) + Math.min(26, g.width * 0.02);

    notas.forEach(function (nota, n) {
      var card = slide.querySelector('.nota[data-n="' + n + '"]');
      if (!card) return;

      var y1, y2;
      if (nota.linhas) {
        var a = linhas[nota.linhas[0]], b = linhas[nota.linhas[1]];
        if (!a || !b) return;
        y1 = a.getBoundingClientRect().top - g.top + 3;
        y2 = b.getBoundingClientRect().bottom - g.top - 3;
      } else if (nota.alvo === 'repeticao' && marcaRep) {
        var r = marcaRep.getBoundingClientRect();
        y1 = r.top - g.top;
        y2 = r.bottom - g.top;
      } else {
        return;
      }

      var cr = card.getBoundingClientRect();
      var cx = cr.left - g.left - 10;
      var cy = cr.top - g.top + cr.height / 2;
      var ym = (y1 + y2) / 2;
      var dente = 9;
      var meio = (cx - eixo) * 0.45;

      var d =
        'M ' + (eixo - dente) + ' ' + y1 + ' H ' + eixo + ' V ' + y2 + ' H ' + (eixo - dente) +
        ' M ' + eixo + ' ' + ym +
        ' C ' + (eixo + meio) + ' ' + ym + ', ' + (cx - meio) + ' ' + cy + ', ' + cx + ' ' + cy;

      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', d);
      p.dataset.n = n;
      p.style.setProperty('--cor', 'var(--c' + (nota.cor || 0) + ')');
      svg.appendChild(p);

      var comp = 0;
      try { comp = p.getTotalLength(); } catch (e) { comp = 600; }
      p.style.setProperty('--comp', Math.ceil(comp));
      p.style.setProperty('--atraso', (0.2 + n * 0.13).toFixed(2) + 's');
    });
  }

  /* ------------------------------------------------------------ navegacao */

  function mostrar(indice, direcao) {
    if (!slides.length) return;
    indice = Math.max(0, Math.min(slides.length - 1, indice));
    var info = slides[indice];
    var musica = MUSICAS[info.mi];
    var trocaMusica = slideAtivo && slideAtivo._mi !== info.mi;

    var novo;
    if (info.tipo === 'importar')   novo = renderImportar(musica, info.mi);
    else if (info.tipo === 'capa')  novo = renderCapa(musica, info.mi);
    else                            novo = renderTrecho(musica, musica.trechos[info.ti], info.ti);
    novo._mi = info.mi;

    var anterior = slideAtivo;
    if (anterior) {
      anterior.classList.remove('entra-trecho', 'entra-trecho-inv', 'entra-musica');
      anterior.classList.add(trocaMusica ? 'sai-musica' : (direcao < 0 ? 'sai-trecho-inv' : 'sai-trecho'));
      setTimeout(function () { if (anterior.parentNode) anterior.parentNode.removeChild(anterior); }, 600);
    }

    palco.appendChild(novo);
    if (anterior) {
      novo.classList.add(trocaMusica ? 'entra-musica' : (direcao < 0 ? 'entra-trecho-inv' : 'entra-trecho'));
    }
    slideAtivo = novo;
    atual = indice;

    function refazerLayout() {
      if (slideAtivo !== novo || !novo.parentNode) return;
      medirHud();
      ajustarEscala(novo);
      desenharFios(novo);
    }
    requestAnimationFrame(function () {
      ajustarEscala(novo);
      requestAnimationFrame(function () { desenharFios(novo); });
    });
    // reforcos: aba oculta (sem rAF) e fontes que carregam depois
    setTimeout(refazerLayout, 140);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refazerLayout);

    atualizarHud();
  }

  /* ------------------------------------------------- pular entre musicas */

  /* o cabecalho cresce quando as abas quebram em mais de uma linha;
     o slide le esta medida para nunca comecar por baixo dele */
  function medirHud() {
    var topo = document.querySelector('.hud-topo');
    if (topo) document.documentElement.style.setProperty('--hud-alto', topo.offsetHeight + 'px');
  }

  /* primeiro slide de uma musica: a capa, ou o campo de colar se ela nao
     tiver letra ainda */
  function indicePrimeiroSlide(mi) {
    return slides.findIndex(function (s) { return s.mi === mi; });
  }
  var indiceCapa = indicePrimeiroSlide;

  /* indices das musicas que realmente entraram na apresentacao, em ordem */
  function ordemMusicas() {
    var vistas = [];
    slides.forEach(function (s) { if (vistas.indexOf(s.mi) < 0) vistas.push(s.mi); });
    return vistas;
  }

  function pularMusica(passo) {
    var info = slides[atual];
    if (!info) return;
    // voltando do meio de uma musica, o primeiro passo leva a abertura dela
    if (passo < 0 && info.tipo !== 'capa') { irPara(indiceCapa(info.mi), -1); return; }
    var ordem = ordemMusicas();
    var alvo = ordem[ordem.indexOf(info.mi) + passo];
    if (alvo == null) return;
    irPara(indiceCapa(alvo), passo);
  }

  function irParaMusica(posicao) {
    var ordem = ordemMusicas();
    var mi = ordem[posicao];
    if (mi == null) return;
    var destino = indiceCapa(mi);
    if (destino >= 0 && destino !== atual) irPara(destino, destino > atual ? 1 : -1);
  }

  function atualizarHud() {
    var info = slides[atual];
    if (!info) return;
    var musica = MUSICAS[info.mi];
    var ordem = ordemMusicas();
    var pos = ordem.indexOf(info.mi);

    /* abas: pulam direto para a abertura de qualquer musica */
    elSeletor.innerHTML = '';
    var abaAtual = null;
    ordem.forEach(function (mi, i) {
      var b = el('button', 'aba');
      b.appendChild(el('span', 'indice-aba', String(i + 1)));
      b.appendChild(el('span', null, MUSICAS[mi].titulo));
      b.title = 'Ir para "' + MUSICAS[mi].titulo + '"';
      if (mi === info.mi) { b.classList.add('atual'); abaAtual = b; }
      b.addEventListener('click', function (ev) { ev.stopPropagation(); irParaMusica(i); });
      elSeletor.appendChild(b);
    });

    /* com muitas musicas as abas apertam para caber mais na linha */
    elSeletor.classList.toggle('muitas', ordem.length > 6);
    /* linha unica com rolagem: traz a aba atual para o centro da faixa visivel */
    if (abaAtual) {
      var alvoScroll = abaAtual.offsetLeft - (elSeletor.clientWidth - abaAtual.offsetWidth) / 2;
      elSeletor.scrollLeft = Math.max(0, alvoScroll);
    }
    medirHud();

    btnMusicaProx.disabled = pos >= ordem.length - 1;
    btnMusicaAnt.disabled = pos <= 0 && info.tipo === 'capa';

    elPontos.innerHTML = '';
    (info.tipo === 'importar' ? [] : musica.trechos).forEach(function (t, i) {
      var p = el('button', 'ponto');
      p.title = t.rotulo || ('Trecho ' + (i + 1));
      if (info.tipo === 'trecho') {
        if (i === info.ti) p.classList.add('ativo');
        else if (i < info.ti) p.classList.add('vista');
      }
      p.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var alvo = slides.findIndex(function (s) {
          return s.tipo === 'trecho' && s.mi === info.mi && s.ti === i;
        });
        if (alvo >= 0) irPara(alvo);
      });
      elPontos.appendChild(p);
    });
  }

  function irPara(i, direcao) {
    if (trocando || i === atual) return;
    trocando = true;
    mostrar(i, direcao != null ? direcao : (i > atual ? 1 : -1));
    setTimeout(function () { trocando = false; }, 260);
  }

  function avancar() { if (atual < slides.length - 1) irPara(atual + 1, 1); }
  function voltar() { if (atual > 0) irPara(atual - 1, -1); }

  /* -------------------------------------------------- indice e atalhos UI */

  function fecharOverlay() {
    overlay.classList.add('oculto');
    overlay.innerHTML = '';
  }

  function abrirIndice() {
    var painel = el('div', 'painel');
    painel.appendChild(el('h2', null, 'Índice'));
    painel.appendChild(el('p', 'sub', 'Clique em um trecho para ir direto até ele. ESC fecha.'));

    var lista = el('div', 'indice');
    MUSICAS.forEach(function (m, mi) {
      var bloco = el('div', 'indice-musica');
      bloco.appendChild(el('h3', null, m.titulo));
      var itens = el('div', 'indice-lista');

      /* sem letra: o unico destino e o proprio campo de colar */
      if (!LETRAS[m.id] || !LETRAS[m.id].length) {
        var colar = el('button', 'indice-item', 'Colar letra');
        colar.addEventListener('click', function () {
          fecharOverlay();
          irPara(indicePrimeiroSlide(mi));
        });
        itens.appendChild(colar);
        bloco.appendChild(itens);
        lista.appendChild(bloco);
        return;
      }

      var capa = el('button', 'indice-item', 'Abertura');
      capa.addEventListener('click', function () {
        fecharOverlay();
        irPara(slides.findIndex(function (s) { return s.tipo === 'capa' && s.mi === mi; }));
      });
      itens.appendChild(capa);

      m.trechos.forEach(function (t, ti) {
        var b = el('button', 'indice-item', (ti + 1) + '. ' + (t.rotulo || 'Trecho ' + (ti + 1)));
        var alvo = slides.findIndex(function (s) { return s.tipo === 'trecho' && s.mi === mi && s.ti === ti; });
        if (alvo === atual) b.classList.add('atual');
        b.addEventListener('click', function () { fecharOverlay(); irPara(alvo); });
        itens.appendChild(b);
      });

      bloco.appendChild(itens);
      lista.appendChild(bloco);
    });
    painel.appendChild(lista);

    var barra = el('div', 'barra');
    var ajuda = el('button', 'botao secundario', 'Atalhos');
    ajuda.addEventListener('click', abrirAjuda);
    var trocar = el('button', 'botao secundario', 'Trocar/colar letra');
    trocar.addEventListener('click', function () {
      var m = MUSICAS[slides[atual].mi];
      telaImportar(m);
    });
    barra.appendChild(ajuda);
    barra.appendChild(trocar);
    painel.appendChild(barra);

    overlay.innerHTML = '';
    overlay.appendChild(painel);
    overlay.classList.remove('oculto');
  }

  function abrirAjuda() {
    var painel = el('div', 'painel');
    painel.appendChild(el('h2', null, 'Atalhos'));
    var lista = el('div', 'atalhos');
    [
      ['clique / → / espaço', 'próximo trecho'],
      ['←', 'trecho anterior'],
      ['Shift+→ ou N', 'pular para a próxima música'],
      ['Shift+← ou P', 'música anterior (ou volta à abertura da atual)'],
      ['clique na aba', 'ir direto para qualquer música'],
      ['Esc', 'índice'],
      ['T', 'tema claro / escuro'],
      ['F', 'tela cheia'],
      ['L', 'colar outra letra'],
      ['?', 'esta lista']
    ].forEach(function (par) {
      var linha = el('div', 'atalho');
      linha.appendChild(el('kbd', null, par[0]));
      linha.appendChild(el('span', null, par[1]));
      lista.appendChild(linha);
    });
    painel.appendChild(lista);
    var barra = el('div', 'barra');
    var fechar = el('button', 'botao', 'Voltar');
    fechar.addEventListener('click', fecharOverlay);
    barra.appendChild(fechar);
    painel.appendChild(barra);
    overlay.innerHTML = '';
    overlay.appendChild(painel);
    overlay.classList.remove('oculto');
  }

  /* ------------------------------------------------------------- eventos */

  document.getElementById('btn-avancar').addEventListener('click', function (e) { e.stopPropagation(); avancar(); });
  document.getElementById('btn-voltar').addEventListener('click', function (e) { e.stopPropagation(); voltar(); });
  btnMusicaProx.addEventListener('click', function (e) { e.stopPropagation(); pularMusica(1); });
  btnMusicaAnt.addEventListener('click', function (e) { e.stopPropagation(); pularMusica(-1); });

  palco.addEventListener('click', function () {
    if (!overlay.classList.contains('oculto')) return;
    avancar();
  });

  document.addEventListener('keydown', function (e) {
    var digitando = e.target && (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT');
    if (digitando) return;

    var aberto = !overlay.classList.contains('oculto');
    if (e.key === 'Escape') {
      e.preventDefault();
      if (aberto) { fecharOverlay(); }
      else abrirIndice();
      return;
    }
    if (aberto) return;

    /* Shift + setas pula a musica inteira */
    if (e.shiftKey && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      e.preventDefault();
      pularMusica(e.key === 'ArrowRight' ? 1 : -1);
      return;
    }
    switch (e.key) {
      case 'ArrowRight': case ' ': case 'PageDown': case 'Enter':
        e.preventDefault(); avancar(); break;
      case 'ArrowLeft': case 'PageUp': case 'Backspace':
        e.preventDefault(); voltar(); break;
      case 'Home':
        e.preventDefault(); irPara(0); break;
      case 'End':
        e.preventDefault(); irPara(slides.length - 1); break;
      case 'n': case 'N':
        e.preventDefault(); pularMusica(1); break;
      case 'p': case 'P':
        e.preventDefault(); pularMusica(-1); break;
      case 't': case 'T':
        document.body.dataset.tema = document.body.dataset.tema === 'claro' ? 'escuro' : 'claro';
        break;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
        break;
      case 'l': case 'L':
        if (slides[atual] && slides[atual].tipo !== 'importar') {
          telaImportar(MUSICAS[slides[atual].mi]);
        }
        break;
      case '?':
        abrirAjuda(); break;
    }
  });

  /* a roda do mouse em qualquer ponto da tela rola a faixa de titulos.
     A pagina nao rola (body tem overflow hidden), entao a roda estaria ociosa;
     so nao capturamos enquanto um overlay estiver aberto, porque ali o
     conteudo pode ter rolagem propria. */
  window.addEventListener('wheel', function (ev) {
    if (!overlay.classList.contains('oculto')) return;
    if (!elSeletor || elSeletor.scrollWidth <= elSeletor.clientWidth) return;
    var passo = Math.abs(ev.deltaX) > Math.abs(ev.deltaY) ? ev.deltaX : ev.deltaY;
    if (!passo) return;
    if (ev.deltaMode === 1) passo *= 16;        // deltaMode em linhas
    else if (ev.deltaMode === 2) passo *= elSeletor.clientWidth;
    elSeletor.scrollLeft += passo;
    ev.preventDefault();
  }, { passive: false });

  var temporizador;
  window.addEventListener('resize', function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      medirHud();
      if (!slideAtivo) return;
      ajustarEscala(slideAtivo);
      desenharFios(slideAtivo);
    }, 140);
  });

  /* ---------------------------------------------------------------- start */

  carregarLetras();
  construirSlides();
  mostrar(0, 0);
})();

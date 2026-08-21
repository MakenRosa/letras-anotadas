/* ===========================================================================
   musicas.js — estrutura e anotações de cada música.

   Este arquivo NÃO guarda a letra. Ele guarda apenas:
     - quais estrofes entram em cada slide (trecho)
     - quais LINHAS de cada trecho recebem qual explicação

   A letra em si você cola uma vez na própria página (ela fica salva no
   navegador) ou dentro de letras.local.js. Veja LEIA-ME.md.

   Como as estrofes são contadas:
     estrofe = bloco de versos separado por UMA LINHA EM BRANCO.
     A primeira estrofe da letra é o índice 0.

   Como as linhas são contadas:
     dentro de um trecho, junte as estrofes listadas em "estrofes" na ordem
     e conte os versos a partir de 0 (linhas em branco não contam).
     "linhas": [início, fim] — inclusivo nos dois lados.

   Estrofe muito longa:
     use "versos": [início, fim] no trecho para mostrar só um pedaço dela.
     Aí os índices de "linhas" das notas contam a partir do início do recorte.

   "cor": 0 = azul, 1 = vinho, 2 = roxo (só muda a cor do fio e da nota).
   =========================================================================== */

window.MUSICAS = [

  /* ------------------------------------------------------------------ */
  {
    id: 'sinfonia-do-inferno',
    titulo: 'Sinfonia do Inferno',
    epigrafe: 'A lenda da encruzilhada, contada em blues',
    estrofesEsperadas: 18,
    contexto:
      'A música reconta, em português, a lenda mais conhecida do blues: a de que o violonista ' +
      'Robert Johnson teria encontrado o diabo numa encruzilhada do Mississippi, nos anos 1930, ' +
      'e trocado a alma pela habilidade de tocar como ninguém. Quase todo verso aponta para um ' +
      'detalhe concreto dessa história — o cruzamento das rodovias 61 e 49, os cães do inferno que ' +
      'perseguem quem fecha o acordo, e os dois versos finais, que são citação direta de uma ' +
      'gravação de Johnson. As notas à direita explicam, de forma literal, o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'A estrada, antes do encontro',
        estrofes: [0, 1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Onde e quando',
            texto: 'Mississippi é o estado do sul dos Estados Unidos onde o blues nasceu, e onde se passa a lenda que a música reconta. Dizer que ele "nunca esteve tão só" é dizer que não há ninguém na estrada: nenhuma testemunha para o que vem a seguir.' },
          { linhas: [2, 3], cor: 0, titulo: 'O violão como farol',
            texto: 'Farol é o que guia quem anda no escuro. Ele está se apresentando como músico de estrada: não tem casa, dinheiro nem destino certo — tem o instrumento, e é ele que decide o caminho.' },
          { linhas: [4, 5], cor: 1, titulo: 'Sem lua, sem luz',
            texto: 'A lua ausente reforça o escuro total. E "tão pó" faz par sonoro com "tão só" da estrofe anterior, além de sugerir terra seca e poeira — a paisagem gasta do Delta do Mississippi.' },
          { linhas: [6, 7], cor: 1, titulo: 'O nó é o acordo',
            texto: 'Dar um nó numa corda junto com o inferno é o mesmo que fechar um trato: amarrar-se a ele. A imagem do nó também lembra forca, ou seja, ele já sabe que o que está apostando é a própria vida.' }
        ]
      },

      {
        rotulo: 'A encruzilhada',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Rodovias 61 e 49',
            texto: 'É um cruzamento real, em Clarksdale, Mississippi, apontado pela tradição como o lugar do pacto de Robert Johnson. O horário citado é o minuto anterior à meia-noite: ele chegou adiantado ao encontro.' },
          { linhas: [1, 2], cor: 0, titulo: 'Meia-noite em ponto',
            texto: 'A virada do dia é a hora do ritual. Repare que o outro nunca é nomeado: é tratado por "você", como alguém já conhecido, quase íntimo — o que torna a cena menos assustadora e mais combinada.' },
          { linhas: [3, 4], cor: 1, titulo: 'O whisky',
            texto: 'Detalhe prático, não simbólico: a bebida serve para aguentar o frio e o medo enquanto espera. "Gole por gole" indica que demorou muito tempo ali.' },
          { linhas: [5, 6], cor: 2, titulo: 'A espera se estica',
            texto: 'O verso da espera volta quase igual ao do começo da estrofe. A repetição existe para marcar que o encontro não aconteceu na hora marcada — e o trecho seguinte vai insistir nisso.' }
        ]
      },

      {
        rotulo: 'O atraso e a chegada',
        estrofes: [3, 4],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O refrão mudou de lugar',
            texto: 'A mesma abertura volta, mas agora ele não está mais andando: está sentado no chão. Saiu da estrada e virou alguém que espera — o cansaço tomou o lugar da expectativa.' },
          { linhas: [2, 3], cor: 0, titulo: '"O cão"',
            texto: 'No Brasil, "o cão" é um dos apelidos populares do diabo. Reclamar do atraso dele é quase uma piada, e serve para tirar a solenidade da cena: o pacto é tratado como compromisso marcado que o outro furou.' },
          { linhas: [4, 5], cor: 1, titulo: 'O lugar ferve',
            texto: 'A chegada não é anunciada por uma aparição, e sim por um fenômeno físico: o calor do inferno esquentando o lugar antes de o diabo aparecer.' },
          { linhas: [6, 7], cor: 1, titulo: 'Grande demais para o cenário',
            texto: 'Por um instante ele acha que o lugar inteiro vai acabar. É o jeito da música de dizer que o que está chegando é maior do que o mundo em volta consegue aguentar.' }
        ]
      },

      {
        rotulo: 'O diabo toca',
        estrofes: [5],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'A aparição',
            texto: 'Ele vem de baixo, do "submundo", e a primeira coisa que faz é pegar o violão — sem pedir e sem conversa. O pacto começa pelo instrumento, não por um contrato.' },
          { linhas: [3, 4], cor: 1, titulo: 'Corda e casa',
            texto: '"Casa" é o nome do espaço entre dois trastes no braço do violão. O verso diz, tecnicamente, que ele percorre o instrumento inteiro e cria notas que aquele violão nunca tinha produzido.' },
          { linhas: [5, 5], cor: 1, titulo: 'Torrando a madeira',
            texto: 'Aqui é literal: a mão queima o violão. O toque é quente demais para ser de um humano — é a prova, dentro da cena, de que quem está tocando não é gente.' }
        ]
      },

      {
        rotulo: 'A lição',
        estrofes: [6],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Admitindo a derrota',
            texto: 'Ele reconhece que o diabo toca melhor do que ele. Essa é a razão do pacto nesta música: não se pede dinheiro nem poder, pede-se habilidade.' },
          { linhas: [1, 1], cor: 0, titulo: 'Descer a afinação',
            texto: 'Afrouxar as cordas deixa o som mais grave, mais pesado e mais fácil de "dobrar" as notas — recurso real e característico do blues. O diabo não faz mágica: ele ensina técnica.' },
          { linhas: [2, 3], cor: 1, titulo: 'A habilidade troca de dono',
            texto: '"Infalíveis" e "infernais" formam o trocadilho central: o que ele ganhou funciona sempre, e veio do inferno. Repare que as notas já são chamadas de "minhas" — a transferência acabou de se completar.' }
        ]
      },

      {
        rotulo: 'Refrão: "Vai, filho"',
        estrofes: [7],
        repeticao: 'O refrão se repete 2x seguidas',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Chamado de "filho"',
            texto: 'O diabo passa a tratá-lo como filho. O tom é de padrinho orgulhoso, mas o sentido é de posse: a partir daqui ele pertence a alguém.' },
          { linhas: [2, 3], cor: 0, titulo: 'A ordem é mostrar',
            texto: 'O acordo só se completa quando o talento aparece em público. "O som que vem do além" é a explicação que as outras pessoas vão dar quando ouvirem — ninguém vai acreditar que aquilo se aprendeu.' },
          { linhas: [4, 5], cor: 1, titulo: '"Álbum de sucesso"',
            texto: 'Anacronismo proposital: a lenda é dos anos 1930, mas o verso traduz o pacto para a lógica da indústria musical moderna. Fama e vendas entram como a versão atual de vender a alma.' },
          { linhas: [6, 6], cor: 2, titulo: 'O título da música',
            texto: '"Sinfonia do inferno" é o nome do som que ele agora toca — e da própria canção. Como o refrão vem duas vezes seguidas e sem variação, o efeito é de cobrança, não de celebração.' }
        ]
      },

      {
        rotulo: 'A conta chega',
        estrofes: [9],
        repeticao: 'A estrofe se repete 6x seguidas, sem mudar uma palavra',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O preço',
            texto: 'Aqui vira a segunda metade da história: o talento já foi entregue, e agora aparece o custo. A primeira coisa que ele perde é o sono.' },
          { linhas: [1, 1], cor: 1, titulo: 'Medo, vulto, pesadelos',
            texto: '"Vulto" é a sensação de ver alguém passar pelo canto do olho e não haver ninguém. A lista não é metáfora: são sintomas concretos de quem não dorme e se sente vigiado o tempo todo.' },
          { linhas: [2, 2], cor: 1, titulo: 'Cães negros',
            texto: 'Duas leituras somadas. Nas canções de Robert Johnson, cães do inferno perseguem quem fez o pacto — o mesmo "cão" que ele esperou na encruzilhada agora o caça. E "cão negro" é imagem tradicional para depressão.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Por que seis vezes',
            texto: 'A estrofe se repete seis vezes seguidas, idêntica. Não há letra nova: a repetição é o próprio recado — pensamento em círculo, a mesma noite acontecendo de novo, sem saída.' }
        ]
      },

      {
        rotulo: 'A cobrança',
        estrofes: [15],
        repeticao: 'A estrofe se repete 2x seguidas',
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'A mesma entrada, outro assunto',
            texto: 'Os versos da chegada voltam iguais aos do trecho do violão, mas o que ele vem dizer mudou: da primeira vez veio ensinar, agora veio buscar. O prazo acabou.' },
          { linhas: [3, 4], cor: 1, titulo: 'Sem terno e sapato',
            texto: 'Terno e sapato são a roupa de velório e de enterro. Ele está dizendo que não vai haver cerimônia nenhuma: parte como está, na hora, sem despedida formal.' },
          { linhas: [5, 5], cor: 2, titulo: '"Amor, não espere por mim"',
            texto: 'A única frase dirigida a outra pessoa viva em toda a música. É um aviso de que ele não volta — despedida, não promessa. Também inverte a cena inicial: antes ele esperava; agora é ele que não deve ser esperado.' }
        ]
      },

      {
        rotulo: 'Hello, Satan',
        estrofes: [17],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A citação',
            texto: 'Os dois versos finais estão em inglês porque são citação direta de "Me and the Devil Blues", gravada por Robert Johnson em 1937, em que ele cumprimenta o diabo na porta de casa. A música termina assumindo de quem é a história que acabou de contar.' },
          { linhas: [1, 1], cor: 1, titulo: 'O tom da despedida',
            texto: 'Não há luta, susto nem pedido de perdão. Ele trata a partida como um horário marcado que chegou — a mesma calma com que tratou o diabo na encruzilhada, no começo. O acordo foi cumprido dos dois lados.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'rei-dos-ratos',
    titulo: 'Rei dos Ratos',
    epigrafe: 'O criador de um império que apodreceu',
    estrofesEsperadas: 8,
    contexto:
      'Quem canta é um rei em primeira pessoa. Ele afirma ter moldado a terra, plantado um jardim ' +
      'e aberto rios — e assiste tudo isso virar mato e esgoto, até sobrar só um reino de ratos ' +
      'onde ele mesmo come larva e bebe água envenenada. Vale saber que "rei dos ratos" é também ' +
      'uma figura do folclore europeu: um emaranhado de ratos presos uns aos outros pelas caudas, ' +
      'imagem de algo que não consegue se desatar. No meio da música aparece um "você" que nunca é ' +
      'identificado, e a letra passa a dividir a culpa da ruína. As notas à direita explicam, de ' +
      'forma literal, o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'A criação e o apodrecimento',
        estrofes: [0],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Antes de a terra ter forma',
            texto: 'Ele diz que já andava por ali quando o lugar ainda não tinha sido moldado — está se colocando como fundador, quase como criador do mundo. Mas repare que é ele mesmo quem chama o próprio império de velho e sem graça: a queda não vem depois, ela já está no anúncio.' },
          { linhas: [3, 4], cor: 1, titulo: 'O jardim que virou mato',
            texto: 'Capim e mato são o que nasce sozinho quando ninguém cuida. Ou seja: o jardim não foi destruído por um inimigo, foi abandonado. A ruína aqui é por descuido, não por ataque.' },
          { linhas: [5, 6], cor: 1, titulo: 'Rios que viraram valão',
            texto: '"Valão" é vala aberta de esgoto. Os rios foram feitos com uma finalidade e terminaram como esgoto — e esgoto é exatamente onde rato prospera. Ele não perdeu o reino: acabou construindo o lugar ideal para os ratos.' },
          { linhas: [7, 7], cor: 2, titulo: 'A palavra repetida',
            texto: 'Dizer "os ratos" quatro vezes seguidas funciona como contagem: eles se multiplicam dentro do próprio verso. É o jeito da letra de mostrar infestação sem precisar descrever nada.' }
        ]
      },

      {
        rotulo: 'Refrão: o título',
        estrofes: [1],
        repeticao: 'O refrão volta idêntico depois da segunda parte',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Quem dá o título',
            texto: '"Me chamam" — o nome não foi escolhido por ele, é como os outros o tratam. Ele é rei de verdade, com súditos de verdade; o problema é do que ele é rei.' },
          { linhas: [1, 1], cor: 1, titulo: 'O cálice de barro',
            texto: 'Cálice é o copo de cerimônia, normalmente de metal precioso. O dele é de barro, mal moldado e inacabado: o objeto que deveria provar a realeza é justamente o que a desmente. E "inacabado" repete a acusação da estrofe anterior — ele nunca terminou o que começou.' },
          { linhas: [3, 3], cor: 1, titulo: 'Come o que os ratos comem',
            texto: 'Larva e água suja são dieta de quem vive no lixo. Ele não está acima do reino que acabou de descrever: come e bebe a mesma coisa que os súditos.' },
          { linhas: [4, 5], cor: 2, titulo: 'Infectada, depois envenenada',
            texto: 'Os dois versos são quase iguais, e a diferença aumenta a gravidade: infectada é doença que apareceu sozinha; envenenada é algo que alguém colocou ali. A segunda palavra transforma acidente em culpa — e prepara o "você" que aparece mais adiante.' }
        ]
      },

      {
        rotulo: 'A chuva e a coroa',
        estrofes: [2],
        repeticao: 'O bloco volta igual perto do fim, antes da última variação',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Pobre chuva"',
            texto: 'Ele tem pena da chuva, não de si mesmo — a inversão é irônica, porque quem está sendo destruído é ele. E "mais rápida" nunca diz mais rápida do que quê: fica implícito que é mais rápida do que ele consegue consertar.' },
          { linhas: [1, 1], cor: 1, titulo: 'Coroa de lata',
            texto: 'Lata é metal barato — e é o único que enferruja. A coroa é falsa, e ainda assim é a única coisa que ele tem. Pior: a chuva, que deveria alimentar o jardim, é justamente o que a corrói.' },
          { linhas: [2, 3], cor: 1, titulo: 'A repetição imediata',
            texto: 'Os mesmos dois versos voltam colados, sem mudar uma palavra. O efeito é de goteira: a mesma frase pingando no mesmo lugar até enferrujar.' },
          { linhas: [4, 4], cor: 2, titulo: 'O "la, lala"',
            texto: 'É o único trecho sem palavra nenhuma. Depois de admitir que a coroa está enferrujando, sobra a melodia: o rei cantarolando sozinho no meio do reino apodrecido.' }
        ]
      },

      {
        rotulo: 'A cobrança ao "você"',
        estrofes: [3],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Pintar de vermelho',
            texto: 'Vermelho é a cor de sangue e de paixão. Ele diz que deu vida e emoção ao coração do outro, e usa linguagem de quem pinta um quadro — de novo se colocando como criador, agora de uma pessoa.' },
          { linhas: [1, 1], cor: 1, titulo: '"Cinzou"',
            texto: 'Verbo inventado a partir de "cinza". O outro tomou os pincéis, isto é, assumiu o controle da própria emoção, e escolheu o cinza: apagou de propósito a cor que tinha recebido.' },
          { linhas: [2, 2], cor: 0, titulo: 'O Sol como guia',
            texto: 'Ele lista o que deu: cor, luz e direção. Repare que em nenhum momento diz o que pediu em troca — a estrofe inteira é uma conta sendo apresentada.' },
          { linhas: [3, 3], cor: 1, titulo: 'A acusação',
            texto: 'A chuva e o frio agora vêm "dos olhos" do outro — é a mesma chuva que enferruja a coroa. Aqui a letra arruma um segundo culpado pela ruína: não foi só descuido do rei, foi o outro que trouxe o mau tempo. E terminou louco.' }
        ]
      },

      {
        rotulo: 'Todos com os ratos',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Onde a loucura leva',
            texto: 'A frase emenda direto na anterior: a loucura levou o outro para junto dos ratos. Os dois terminam no mesmo lugar, o que anula a discussão de quem teve culpa — não há vencedor.' },
          { linhas: [1, 1], cor: 2, titulo: 'Agora sete vezes',
            texto: '"Os ratos" aparece sete vezes aqui, contra quatro na primeira estrofe. A contagem cresceu junto com a ruína: é a mesma palavra medindo quanto o reino piorou.' }
        ]
      },

      {
        rotulo: 'Chuva vira tempo',
        estrofes: [7],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A única palavra trocada',
            texto: 'Em todo o refrão muda uma palavra só: "chuva" vira "tempo". E é ela que explica o resto — a chuva que vinha enferrujando a coroa era o tempo passando. O que corrói o império não é o clima, é a duração.' },
          { linhas: [1, 1], cor: 1, titulo: '"Vai" em vez de "cai"',
            texto: 'Chuva cai, tempo vai. A troca do verbo mantém a rima e admite que isso não pode ser interrompido: não existe telhado contra o tempo.' },
          { linhas: [2, 3], cor: 1, titulo: 'Um fim sem reviravolta',
            texto: 'Os versos se repetem iguais até o fim, sem nenhuma resolução. A música termina no mesmo estado em que começou — e isso é o recado: o império segue enferrujando depois da última nota.' },
          { linhas: [4, 4], cor: 2, titulo: 'O "la, lala" final',
            texto: 'A melodia sem palavras volta, e desta vez é mais longa que a primeira. É a última coisa que sobra do reino: o rei cantando enquanto a coroa termina de enferrujar.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'noiva-cadaver',
    titulo: 'Noiva Cadáver',
    epigrafe: 'Uma canção de amor narrada por um assassino',
    estrofesEsperadas: 6,
    contexto:
      'O disfarce da música é o vocabulário: dança, lua, olhar, MPB ao fundo — tudo de canção ' +
      'romântica. O que está sendo descrito é outra coisa: um homem sozinho em casa com o corpo de ' +
      'uma garota, com a polícia procurando por ela do lado de fora. Quem narra é o assassino, e ' +
      'ele conta a própria história com as palavras de um namorado, não de um culpado. O título ' +
      'aponta para "A Noiva-Cadáver" (2005), animação em que um noivo se vê casado com uma morta. ' +
      'As notas à direita marcam, verso por verso, a distância entre o que ele diz e o que está ' +
      'de fato acontecendo.',

    trechos: [
      {
        rotulo: 'A dança',
        estrofes: [0],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O primeiro verso já entrega tudo',
            texto: '"Como se você estivesse viva" diz, de saída, que ela não está: ele está abraçando e dançando com um corpo. E a "noite sempre fria" não é o clima — é a temperatura dela. O "sempre" indica que isso não é uma noite só.' },
          { linhas: [2, 3], cor: 1, titulo: 'Tom Jobim e Elis',
            texto: 'Tom Jobim e Elis Regina gravaram juntos "Elis & Tom" (1974), um dos discos de amor mais conhecidos da MPB. Ele escolhe a trilha mais romântica possível, e é essa distância entre a música que toca e a cena que acontece que produz o desconforto.' },
          { linhas: [4, 5], cor: 1, titulo: 'As testemunhas',
            texto: 'O olhar dela é atribuído por ele: um corpo não olha, então é ele que preenche a parte que falta. E a lua "vem pra assistir" — a única testemunha que ele admite é uma que não pode denunciar.' },
          { linhas: [6, 6], cor: 2, titulo: '"Nós dois"',
            texto: 'Ele insiste no plural, e repete. A música inteira depende de tratar como casal uma situação em que só existe uma pessoa.' }
        ]
      },

      {
        rotulo: 'O olhar',
        estrofes: [1],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Sem se preocupar"',
            texto: 'Dizer que dança sem se preocupar levanta a pergunta de por que haveria preocupação. E há motivo concreto: existe um corpo na casa dele e vão procurar por ela. Ele diz exatamente aquilo que está tentando não pensar.' },
          { linhas: [1, 1], cor: 1, titulo: 'A nebulosa no olhar',
            texto: 'Nebulosa é nuvem de gás no espaço. Aqui descreve o que a luz da lua encontra no olho parado dela — na prática, a opacidade que o olho ganha depois da morte. Ele pega esse detalhe e transforma em elogio.' },
          { linhas: [2, 3], cor: 0, titulo: 'Olhar "fixado"',
            texto: 'Olhar fixo é sinal de morte, não de paixão. Ele usa a mesma palavra que se usaria para alguém apaixonado, e é esse o mecanismo da letra: cada prova de que ela está morta é lida por ele como prova de amor.' },
          { linhas: [4, 5], cor: 2, titulo: 'Ele diz a palavra',
            texto: 'É o único momento em que ele admite "morta", sem rodeio. E o que vem emendado é que a beleza dela continua ali — para ele nada mudou. "No mesmo lugar" é literal também: o corpo não saiu de onde está.' }
        ]
      },

      {
        rotulo: 'O cerco',
        estrofes: [2],
        repeticao: 'O bloco inteiro se repete 2x seguidas',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O mundo de fora aparece',
            texto: 'Muda o ponto de vista: até aqui só existiam ele e ela. Agora há todo mundo procurando — e ele continua chamando ela de "minha menina" na mesma frase em que conta que a estão procurando.' },
          { linhas: [1, 1], cor: 1, titulo: 'A casa cercada',
            texto: 'A polícia está do lado de fora e ele está dentro, dançando. A letra não descreve fuga, medo nem prisão: o cerco entra só como cenário da mesma cena, como se não fosse sobre ele.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Por que repete tanto',
            texto: 'Os dois versos voltam colados, e o bloco todo ainda se repete uma segunda vez. Nada de novo é dito — o que aumenta é a pressão em volta. A repetição funciona como o cerco se fechando enquanto ele não se move.' }
        ]
      },

      {
        rotulo: 'A justificativa',
        estrofes: [4],
        repeticao: 'A estrofe se repete 2x e a música termina nela',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A confissão disfarçada',
            texto: 'É a única frase em que ele conta o que fez. Chamando ela de anjo, transforma o assassinato em devolução: se ela era do céu, matá-la não seria tirar uma vida, seria mandá-la de volta. E o "só" tenta diminuir o tamanho do que ele está admitindo.' },
          { linhas: [2, 3], cor: 1, titulo: 'O motivo que ele apresenta',
            texto: 'Ele coloca o crime como proteção: tirar ela de um mundo sujo e cruel. É a lógica de quem mata dizendo que fez um favor — e repare que quem descreve o mundo como imundo é justamente ele, sem que a letra confirme nada disso.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Um fim sem arrependimento',
            texto: 'A estrofe se repete e a música acaba nela. Não há prisão, castigo nem dúvida: a última coisa que ele faz é repetir a explicação que inventou, o que sugere que a repetição serve para ele mesmo acreditar nela.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'homem-torto',
    titulo: 'Homem Torto',
    epigrafe: 'Um bicho-papão contado em forma de cantiga',
    estrofesEsperadas: 10,
    contexto:
      'A música monta uma criatura de pesadelo e a descreve com o vocabulário de cantiga infantil: ' +
      'diminutivo, elogio à roupa, verso repetido em eco e uma contagem de um a dez. O contraste é ' +
      'o método — quanto mais a forma lembra brincadeira de criança, pior fica o que está sendo ' +
      'contado. Duas referências ajudam a ler a letra: a contagem em pares segue o molde da cantiga ' +
      'de "A Hora do Pesadelo" (1984), e a figura de chapéu alto parada ao lado da cama é uma das ' +
      'descrições que mais se repetem em relatos de paralisia do sono. As notas à direita explicam, ' +
      'de forma literal, o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'A criatura',
        estrofes: [0],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Sem olhos, e mesmo assim te acha',
            texto: 'A primeira informação é uma contradição proposital. Tirar os olhos e manter a localização exata significa que esconder-se não serve para nada: ele não procura, ele já sabe. É a regra do jogo, dada antes de o jogo começar.' },
          { linhas: [2, 2], cor: 1, titulo: 'O medo é o objetivo',
            texto: 'Ele não aparece com fome nem com raiva: aparece feliz. O que ele quer é o medo, não o corpo — e por isso a perseguição pode se estender, já que o prazer está no meio do caminho, não no fim.' },
          { linhas: [3, 3], cor: 2, titulo: 'Quem devora é o medo',
            texto: '"Consome" é verbo de comer. Na frase, quem está devorando você não é o monstro, é o próprio medo. Ele só assiste — o que faz o trabalho é o que já está dentro de quem ouve.' }
        ]
      },

      {
        rotulo: 'Refrão: o homenzinho',
        estrofes: [1],
        repeticao: 'O refrão volta mais uma vez, depois do ataque',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O diminutivo',
            texto: '"Homenzinho" é como se fala com criança, ou como uma criança falaria. O apelido carinhoso para a coisa que está te caçando é o primeiro sinal de que a música está usando forma de cantiga para contar outra coisa.' },
          { linhas: [1, 2], cor: 1, titulo: 'A cartola, e o eco',
            texto: 'Cartola é roupa de gala de mais de um século atrás: coloca a figura fora do tempo. E elogiar o chapéu de quem vai te matar é o tipo de gentileza que só existe em cantiga. O verso volta sozinho logo depois, em eco — o mesmo recurso das cantigas de roda, em que um pedaço se repete para a criança acompanhar.' },
          { linhas: [3, 4], cor: 1, titulo: 'Torto, com andar de morto',
            texto: 'As duas únicas informações sobre o corpo dele são defeitos de forma e de movimento. Não é um monstro grande nem monstruoso: o que assusta é uma coisa com formato de gente se movendo errado.' },
          { linhas: [5, 5], cor: 2, titulo: '"Vem do além"',
            texto: 'A origem só aparece no último verso do refrão, e do jeito mais vago possível. A letra nunca diz o que ele é nem por que veio — essa recusa a explicar é parte do que assusta.' }
        ]
      },

      {
        rotulo: 'A contagem',
        estrofes: [2],
        repeticao: 'A contagem vem 2x seguidas aqui, e outras 2x depois do ataque',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Não olhe pra trás"',
            texto: 'A primeira ordem é não confirmar. Enquanto você não olha, ele pode estar em qualquer distância — o aviso não protege, ele aumenta o medo, que é justamente o que a primeira estrofe disse ser o objetivo.' },
          { linhas: [1, 2], cor: 1, titulo: 'As saídas se fechando',
            texto: 'Correr não adianta, e a vez é sua. Cada par de números elimina uma possibilidade, então a contagem não marca só o tempo passando: é a lista de opções acabando junto com ele.' },
          { linhas: [3, 3], cor: 1, titulo: 'Puxar os pés',
            texto: 'O fim da contagem entrega a imagem mais infantil da música: o que agarra o pé de quem está na cama. É um medo de criança tratado ao pé da letra, sem ironia — e é ele que a estrofe do ataque vai cumprir.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Quatro vezes ao todo',
            texto: 'Contar até dez é curto demais para assustar sozinho. O que transforma a contagem em cerco é a repetição: ela vem duas vezes seguidas, o ataque acontece, e ela volta mais duas — ou seja, chegar ao dez não encerra nada.' }
        ]
      },

      {
        rotulo: 'A cantiga',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Só a melodia',
            texto: 'Depois da contagem sobram apenas as sílabas. É o momento em que a música se assume como cantiga: sem uma palavra, o que resta é uma melodia de criança cantada sozinha.' },
          { linhas: [1, 1], cor: 1, titulo: 'Onde esse trecho está',
            texto: 'É a única parte leve da música, e ela vem exatamente antes da estrofe em que ele corta a garganta. A ordem é proposital: a cantiga baixa a guarda, e o que entra em seguida é a parte mais gráfica de tudo.' }
        ]
      },

      {
        rotulo: 'O ataque',
        estrofes: [5],
        repeticao: 'A estrofe volta no fim e encerra a música',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Ele senta',
            texto: 'O detalhe que muda tudo é a cadeira. Ele não arromba nem persegue: senta ao lado da cama, como quem faz uma visita, e espera. Toda a correria das contagens termina num gesto doméstico.' },
          { linhas: [2, 2], cor: 1, titulo: '"Se debatendo"',
            texto: 'Debater-se é o que faz quem não consegue se soltar. A cena é de alguém preso na própria cama, sem conseguir se mexer nem gritar, com uma figura parada ao lado apenas observando — que é como costumam ser descritos os episódios de paralisia do sono.' },
          { linhas: [3, 3], cor: 1, titulo: 'O último verso',
            texto: 'A música guarda a violência para a linha final e não comenta nada depois. Não há socorro, não há acordar, não há explicação: termina no ato — e ainda repete essa mesma estrofe para encerrar, sem mudar uma palavra.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'chuva-de-sexta',
    titulo: 'Chuva de Sexta',
    epigrafe: 'Saudade, uma estação de trem e um convite',
    estrofesEsperadas: 3,
    contexto:
      'Aqui não há morte, monstro nem culpa: é uma canção de saudade. A primeira parte é uma cena ' +
      'parada — um sonho, chuva, uma estação de trem — e o refrão vira um convite direto à pessoa ' +
      'que está longe. Como a estrofe inicial é longa, ela foi dividida em três trechos, seguindo ' +
      'as três viradas da letra: o sonho, a falta e a espera. As notas à direita explicam, de forma ' +
      'literal, o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'O sonho',
        estrofes: [0],
        versos: [0, 3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Aviso de que é sonho',
            texto: 'A música começa avisando que o que vem não aconteceu de verdade. E "cinzar" é verbo criado a partir de cinza: o céu perde a cor antes de cair. É um mundo desabando sem violência nenhuma — apagando, não explodindo.' },
          { linhas: [2, 3], cor: 1, titulo: 'A ausência é o assunto',
            texto: 'Os dois versos dizem a mesma coisa de dois jeitos: ela não está ali, e está longe. Repetir a ideia mostra onde está o problema — não é o céu caindo, é ela não estar por perto na hora em que cai.' }
        ]
      },

      {
        rotulo: 'A falta',
        estrofes: [0],
        versos: [4, 8],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A chuva não incomodava',
            texto: 'Ele diz que a chuva até caía bem, porque a lua vinha junto. Ou seja: o cenário triste não era o problema, dava para conviver com ele. O que estraga a cena vem no verso seguinte, e não tem nada a ver com o tempo.' },
          { linhas: [2, 3], cor: 1, titulo: '"Apertava"',
            texto: 'O verbo é físico — aperto no peito. A falta não chega como pensamento, chega como pressão. E repare no que aperta: são as lembranças, não a ausência dela em si.' },
          { linhas: [4, 4], cor: 2, titulo: 'Lembrança boa dói igual',
            texto: 'O detalhe mais preciso do trecho: o que machuca é justamente a lembrança que trazia algo bom. Não há mágoa nem briga na música — o que dói é ter sido bom e ter acabado.' }
        ]
      },

      {
        rotulo: 'A espera',
        estrofes: [0],
        versos: [9, 12],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Sozinho, dito duas vezes',
            texto: 'Estar só e não ter mais ninguém são a mesma informação, dada em seguida. É o mesmo recurso do primeiro trecho: quando não há o que acrescentar, ele repete com outras palavras.' },
          { linhas: [1, 1], cor: 1, titulo: 'Refém da sexta',
            texto: 'Sexta é o dia em que a semana acaba e as pessoas se encontram. Ficar preso numa chuva de sexta é ficar de fora bem no dia em que era para estar acompanhado. E "refém" diz que ele não escolheu ficar.' },
          { linhas: [2, 3], cor: 1, titulo: 'A estação de trem',
            texto: 'A imagem é concreta e não precisa de simbolismo: ele está parado num lugar de passagem, esperando um transporte que não depende dele. O trem não é morte nem destino — é só o meio de chegar até ela, e a hora de partir é de outra pessoa.' }
        ]
      },

      {
        rotulo: 'Refrão: a casa',
        estrofes: [1],
        repeticao: 'O refrão se repete 2x; na segunda vez o final é mais curto',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O "aah"',
            texto: 'A virada da música começa sem palavra nenhuma. Muda também para quem ele fala: sai da descrição de quem está sozinho na estação e passa a falar diretamente com ela.' },
          { linhas: [1, 2], cor: 1, titulo: 'O coração como casa',
            texto: 'A comparação é levada até o fim, com móvel e tudo: entrar, ficar à vontade, deitar no sofá. Não é convite de visita formal — sofá é onde fica quem tem intimidade e vai passar um tempo.' },
          { linhas: [3, 3], cor: 1, titulo: '"Não repara na bagunça"',
            texto: 'É exatamente a frase que se diz para quem chega sem avisar. Só que aqui a bagunça é o estado emocional dele, e o pedido é o mesmo: pode entrar assim mesmo, mas sabendo que não deu tempo de arrumar.' },
          { linhas: [4, 4], cor: 2, titulo: 'O "la lá lá"',
            texto: 'A música termina sem letra. Depois de admitir a bagunça não sobra explicação, e a melodia sozinha faz o papel de quem não quer — ou não consegue — continuar falando. Na repetição, esse final vem ainda mais curto.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'carrinho-de-madeira',
    titulo: 'Carrinho de Madeira',
    epigrafe: 'Saudade da infância, medida em segunda-feira',
    estrofesEsperadas: 11,
    contexto:
      'A música compara duas rotinas: a de quem acorda para uma segunda-feira e a de quem só se ' +
      'preocupava em não perder o jantar. A estrutura ajuda a ler — a estrofe do despertar aparece ' +
      'três vezes, e na terceira vem cortada pela metade. A palavra "preocupar" volta em todos os ' +
      'momentos decisivos, e é ela que diz o que exatamente ele está com saudade. Como as duas ' +
      'estrofes de lembrança são longas, cada uma foi dividida em dois trechos, no ponto em que a ' +
      'letra muda de assunto. As notas à direita explicam, de forma literal, o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'O despertar',
        estrofes: [0],
        repeticao: 'Esta estrofe volta inteira no meio da música',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Acordar procurando',
            texto: 'A primeira ação do dia é procurar o azul. Ele não acorda triste por um motivo declarado: acorda atrás de uma coisa que não está lá — e a música inteira vai se passar dentro dessa procura.' },
          { linhas: [2, 2], cor: 1, titulo: '"Até agora"',
            texto: 'A expressão avisa que a busca não terminou: continua acontecendo enquanto a música toca. É o verso que segura todo o resto, e é o único que volta na última estrofe.' },
          { linhas: [3, 4], cor: 0, titulo: 'A janela',
            texto: 'Levantar e olhar pela janela é o gesto de quem confere se lá fora mudou. Não mudou — o tempo está frio e o céu continua fechado. A resposta chega antes de ele sair de casa.' },
          { linhas: [5, 5], cor: 2, titulo: 'O gatilho, e quem é "você"',
            texto: 'Repare na ordem: não é a saudade que traz o tempo frio, é o tempo frio que traz a lembrança. Ele não estava pensando nessa pessoa. E a letra nunca diz quem ela é — pelas estrofes seguintes, é alguém com quem ele brincava na infância.' }
        ]
      },

      {
        rotulo: 'A lama',
        estrofes: [1],
        versos: [0, 5],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Lembrar de ver',
            texto: 'Ele diz que já viu essa pessoa brincar: a memória é de quem observava, não só de quem participava. O trecho entre parênteses é o eco de coro, recurso comum em canção — a frase volta como se outra voz confirmasse.' },
          { linhas: [3, 4], cor: 1, titulo: 'Brincar na lama',
            texto: 'Lama é o exemplo mais concreto de brincadeira que dá trabalho para o adulto e nenhum para a criança. É o que ele escolhe para representar liberdade: poder se sujar sem que isso tenha consequência.' },
          { linhas: [5, 5], cor: 1, titulo: '"Sem se preocupar"',
            texto: 'A palavra "preocupar" aparece aqui pela primeira vez e vai voltar nos dois momentos mais importantes da música. É a chave da letra: o que ele perdeu não foi a infância em si, foi a ausência de preocupação.' }
        ]
      },

      {
        rotulo: 'A única preocupação',
        estrofes: [1],
        versos: [6, 8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A correção',
            texto: 'Ele volta atrás no que acabou de dizer: não era sem preocupação nenhuma, havia uma. A ressalva é o que dá credibilidade à lembrança — não é uma infância idealizada, é uma infância com exatamente um problema.' },
          { linhas: [1, 2], cor: 1, titulo: 'O tamanho do problema',
            texto: 'A preocupação era chegar tarde e perder o jantar. Colocada logo depois de "sem se preocupar", a frase funciona como medida de comparação com a vida adulta: a maior urgência daquela época era um horário de comida.' }
        ]
      },

      {
        rotulo: 'O que ele pede',
        estrofes: [2],
        repeticao: 'A estrofe volta igual na segunda metade',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Novamente"',
            texto: 'Tudo o que vem a seguir já aconteceu antes. O desejo da música não é conhecer nada novo — é repetir, e a palavra está logo no primeiro verso do pedido.' },
          { linhas: [1, 1], cor: 1, titulo: 'Dançar na chuva "como for"',
            texto: 'A chuva que na primeira estrofe é tempo frio e motivo de tristeza vira, na lembrança, motivo de dança. E "como for" é a licença que criança tem e adulto não: sem jeito certo e sem ninguém avaliando.' },
          { linhas: [2, 2], cor: 1, titulo: 'Pintar o céu de outra cor',
            texto: 'Este verso responde diretamente ao começo da música: ele acordou procurando o azul e não achou, então aqui diz que queria poder pintar. É a solução de criança para um céu fechado — se a cor não está lá, põe-se a cor.' },
          { linhas: [3, 3], cor: 2, titulo: 'Semente virar flor',
            texto: 'É a única imagem de futuro da letra. Fazer semente virar flor exige tempo e cuidado, o oposto do carrinho, que é imediato — e ele pede as duas coisas na mesma estrofe, sem perceber que uma delas é coisa de adulto.' }
        ]
      },

      {
        rotulo: 'Refrão: o carrinho',
        estrofes: [3],
        repeticao: 'O refrão vem 2x seguidas aqui, e outras 2x na segunda metade',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"De novo e de novo"',
            texto: 'Ele não pede uma vez: pede repetição sem fim, que é exatamente o jeito como criança brinca — a mesma coisa até cansar, e no dia seguinte de novo.' },
          { linhas: [1, 2], cor: 1, titulo: 'O morro e o carrinho',
            texto: 'É o carrinho de rolimã: feito de madeira em casa, para descer ladeira. Brinquedo que a criança monta sozinha e que só serve uma vez por descida — para brincar outra vez é preciso subir o morro empurrando. A diversão dele já vem com o trabalho embutido.' },
          { linhas: [3, 3], cor: 1, titulo: 'Segunda-feira',
            texto: 'Aqui a música diz de onde ele está falando. Segunda-feira é trabalho, rotina e obrigação, e "preocupar" volta agora colada ao calendário adulto. Lendo por este verso, não é a infância que ele quer de volta: é não ter segunda-feira.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Quatro vezes ao todo',
            texto: 'O refrão vem duas vezes seguidas, e o par se repete depois. A repetição é o próprio conteúdo do pedido: ele quer descer o morro "de novo e de novo", e a música faz isso com a estrofe em vez de explicar.' }
        ]
      },

      {
        rotulo: 'A calçada',
        estrofes: [6],
        versos: [0, 5],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Sentar em vez de correr',
            texto: 'A segunda lembrança é mais parada que a primeira: não é correr na lama, é sentar e conversar. A calçada é o ponto de encontro de quem não tem para onde ir e não precisa ir — o valor está em ter tempo, não em ter o que fazer.' },
          { linhas: [3, 4], cor: 1, titulo: 'Heróis de quadrinhos',
            texto: 'Agora a brincadeira é de imaginação, não de corpo. E repare no tempo do verbo: "somos", no presente. Dentro da lembrança ele não está contando o que foi, ele está lá.' },
          { linhas: [5, 5], cor: 1, titulo: '"Nada pode nos parar"',
            texto: 'É a frase que criança diz quando está fingindo ser invencível. Nesta música ela ganha o sentido contrário: quem canta é alguém que já foi parado — pelo tempo frio na janela e pela segunda-feira.' }
        ]
      },

      {
        rotulo: 'Os lençóis',
        estrofes: [6],
        versos: [6, 8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O eco insiste',
            texto: 'O verso volta mais uma vez, e aqui a repetição é de quem quer acreditar. Quanto mais ele repete que nada os para, mais fica claro que alguma coisa parou.' },
          { linhas: [1, 2], cor: 1, titulo: 'Lençol vira capa — e no futuro',
            texto: 'A capa de herói é o lençol da cama, coisa que toda criança já tem em casa: ele não pede brinquedo, pede a época em que dava para transformar o que já existia em outra coisa. E o verbo está no futuro ("fizermos"), não no passado — por um instante ele fala como se ainda fosse acontecer. O pedido também muda de direção: aqui é voar, não descer o morro.' }
        ]
      },

      {
        rotulo: 'O fim, cortado',
        estrofes: [10],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Volta ao começo, pela metade',
            texto: 'A música termina com os mesmos versos da abertura, mas só com a primeira metade: sobrou o acordar e a procura, e sumiram a janela, o tempo frio e a lembrança. Tudo que veio no meio não mudou o ponto de partida.' },
          { linhas: [2, 2], cor: 1, titulo: 'A última informação é uma negativa',
            texto: 'A última coisa que a música diz é que ele não achou. Não há azul, não há volta à infância e não há resposta ao pedido — e é justamente por terminar repetindo o começo que a letra deixa isso explícito.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cabelos-arco-iris',
    titulo: 'Cabelos Arco-Íris',
    epigrafe: 'Amor adolescente, contado por quem acabou de voltar',
    estrofesEsperadas: 5,
    contexto:
      'É uma canção de amor, e a letra diz desde o primeiro verso de que situação ela está falando: ' +
      'quem canta acaba de sair de um período muito ruim, e afirma de forma direta que o amor da ' +
      'outra pessoa diminuiu — não acabou com — a vontade de morrer. O resto do cenário é pequeno e ' +
      'concreto: uma calçada, um meio-fio, a madrugada e a aula de segunda-feira. No meio disso ' +
      'entra uma estrofe de elogios eruditos, com compositores e figuras da mitologia grega, que ' +
      'contrasta de propósito com o resto. As notas à direita explicam, de forma literal, o que cada ' +
      'trecho diz, inclusive as referências.',

    trechos: [
      {
        rotulo: 'O resgate',
        estrofes: [0],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Voltei"',
            texto: 'A música começa depois da crise, não dentro dela. "Abismo" é a palavra que ele usa para o período ruim, e "voltei" avisa que já passou — tudo o que vem em seguida é contado por alguém que saiu de lá.' },
          { linhas: [1, 1], cor: 1, titulo: '"Diminui", não "acaba"',
            texto: 'O verbo é modesto de propósito. Ele não diz que o amor dela curou nem que a vontade de morrer desapareceu: diz que diminuiu. A letra não promete salvação, promete alívio — e é isso que a torna verossímil.' },
          { linhas: [2, 2], cor: 1, titulo: 'O abraço como terapeuta',
            texto: 'A comparação é com um profissional, não com um anjo nem um remédio. Terapeuta escuta, trabalha e não resolve na hora: é imagem de cuidado concreto, e coloca o abraço no lugar de socorro, não de milagre.' },
          { linhas: [3, 3], cor: 2, titulo: '"Mesmo sem querer"',
            texto: 'Ele guarda os medos sem ter escolhido guardar. A ressalva explica por que a ajuda precisa vir de fora: o que o ocupa não está sob o controle dele.' }
        ]
      },

      {
        rotulo: 'A calçada',
        estrofes: [1],
        versos: [0, 3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Esperando do lado de fora',
            texto: 'Ele não entra: espera na calçada, em frente à casa dela. É o encontro de quem ainda não tem lugar próprio para receber alguém — a rua faz o papel de sala.' },
          { linhas: [2, 2], cor: 1, titulo: '"Bela madrugada"',
            texto: 'Madrugada é o horário em que ninguém está olhando. Chamar de bela deixa claro que o problema da música não é a noite: é o dia seguinte, que aparece no fim da estrofe.' },
          { linhas: [3, 3], cor: 1, titulo: 'O meio-fio',
            texto: 'Sentar no meio-fio é o oposto de um encontro planejado: sem mesa, sem programa e sem dinheiro. O romance aqui é montado com o que está disponível na rua.' }
        ]
      },

      {
        rotulo: 'A madrugada e a aula',
        estrofes: [1],
        versos: [4, 7],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A Estrela d\'Alva',
            texto: 'É o nome popular do planeta Vênus quando aparece pouco antes de o dia clarear. Procurar por ela significa, na prática, ficar acordado até o amanhecer — ou seja, o programa dos dois é passar a noite inteira ali.' },
          { linhas: [2, 2], cor: 1, titulo: 'A mesma segunda-feira',
            texto: 'A segunda-feira aparece aqui com a mesma função que tem em "Carrinho de Madeira": é a palavra que representa a obrigação chegando. A diferença é que lá ela já chegou, e aqui ainda dá para passar a noite fingindo que não.' },
          { linhas: [3, 3], cor: 2, titulo: '"No caso amanhã"',
            texto: 'É o verso que revela a idade dos personagens: o que eles querem esquecer não é trabalho nem conta para pagar, é que amanhã tem aula. E a emenda no meio da frase é do jeito que se fala, não do jeito que se escreve — como quem percebe, no meio da conversa, que a segunda-feira já começou.' }
        ]
      },

      {
        rotulo: 'O elogio erudito',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Cabelo pintado',
            texto: 'Cabelo arco-íris é cabelo tingido de várias cores: um detalhe concreto, de quem escolheu se apresentar assim. "Me travou" é gíria para ficar sem reação — e o verbo no singular para "cabelos" é desvio comum da fala, que a letra não corrige.' },
          { linhas: [1, 1], cor: 1, titulo: 'Beethoven, Mozart, Orfeu',
            texto: 'Os dois primeiros são compositores que existiram; Orfeu é o músico da mitologia grega que tocava tão bem que amolecia deuses e feras. A lista mistura história e mito de propósito, e o elogio é de superlativo: ela é melhor que a melhor música possível.' },
          { linhas: [2, 2], cor: 1, titulo: 'Morfeu',
            texto: 'Morfeu é o deus grego dos sonhos. Chamar ela de versão feminina dele é dizer que quem manda nos sonhos dele agora é ela — o que emenda direto no "deusa dos meus sonhos" da mesma linha.' },
          { linhas: [3, 3], cor: 2, titulo: 'O labirinto de Dédalo',
            texto: 'Dédalo é o arquiteto que construiu o labirinto de Creta, projetado para que ninguém achasse a saída. Dizendo que o coração se perdeu ali, ele fecha a estrofe com o mesmo verbo do primeiro verso da música — só que aqui perder-se é bom.' }
        ]
      },

      {
        rotulo: 'Perdeu',
        estrofes: [3],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A palavra isolada',
            texto: 'A estrofe é só a última palavra do verso anterior, sozinha. Funciona como eco: o som voltando cada vez mais fraco de dentro do labirinto que ele acabou de citar.' },
          { linhas: [1, 2], cor: 1, titulo: 'Perder como conclusão',
            texto: 'Repetir três vezes transforma o verbo em estado. E é a única palavra que aparece nos dois sentidos da música: perder-se no abismo, no começo, e perder-se nela, aqui — a mesma ação com resultado oposto.' }
        ]
      },

      {
        rotulo: 'O fim: o começo outra vez',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Volta à abertura',
            texto: 'A música termina repetindo o primeiro verso, e a escolha diz o que ela considera mais importante: depois de todos os elogios, o que fica é que ele voltou do abismo.' },
          { linhas: [1, 2], cor: 1, titulo: 'A frase partida em duas',
            texto: 'Na abertura, a frase sobre o amor dela diminuir a vontade de morrer vinha num verso só. Aqui ela é quebrada em duas linhas, o que deixa a parte mais difícil sozinha no fim. Nada foi acrescentado — mudou só o espaço em volta, e é isso que muda o peso.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'botas-verdes-de-neon',
    titulo: 'Botas Verdes de Neon',
    epigrafe: 'Uma conversa entre o escalador e a montanha',
    estrofesEsperadas: 6,
    contexto:
      'A letra é um diálogo, e perceber isso é a chave para entendê-la: quatro estrofes são do ' +
      'escalador e duas são da montanha, que o chama de "viajante" e pede que ele volte para casa. ' +
      'A história se passa no Himalaia — daí o Everest e os dois deuses hindus citados, Hanuman e ' +
      'Kali — e o assunto é o que leva alguém a subir sabendo que pode não descer. As notas à ' +
      'direita explicam, de forma literal, o que cada trecho diz, quem está falando e o que são as ' +
      'referências.',

    trechos: [
      {
        rotulo: 'O escalador: a subida começa',
        estrofes: [0],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O monte é um personagem',
            texto: 'Ele fala com a montanha em segunda pessoa desde o primeiro verso. Ela não é cenário: é alguém do outro lado da conversa — e a música vai se revelar um diálogo entre os dois.' },
          { linhas: [1, 1], cor: 1, titulo: 'As botas de neon',
            texto: 'É o único detalhe visual concreto da letra e a única cor num lugar feito de branco e escuridão. Verde neon é o que torna alguém visível na neve, e o verso volta idêntico logo depois: é a marca dele.' },
          { linhas: [2, 2], cor: 1, titulo: '"Congela o meu coração"',
            texto: 'O frio não aparece como desconforto, mas como dano — e no órgão que a letra escolheu. É também o primeiro aviso do fim: "congelar" é justamente o verbo que encerra a música.' },
          { linhas: [3, 3], cor: 2, titulo: 'A repetição imita o passo',
            texto: 'O verso das botas volta igual depois de cada frase sobre o monte. A estrutura reproduz a escalada: a montanha apresenta uma ameaça, ele responde subindo mais um trecho, e assim por diante.' }
        ]
      },

      {
        rotulo: 'O escalador: o objetivo',
        estrofes: [1],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"O topo do topo"',
            texto: 'Ele não diz só topo. A duplicação é de quem não quer chegar perto do cume: quer o ponto mais alto que existe. Já aí está dito que ele não vai parar por precaução.' },
          { linhas: [1, 2], cor: 1, titulo: 'Onde o oxigênio é pouco',
            texto: 'Informação técnica e literal. Acima de uns 8.000 metros o ar é rarefeito a ponto de o corpo se deteriorar mesmo em repouso — alpinistas chamam essa faixa de zona da morte. Ele nomeia o risco e ainda repete em eco, como quem já aceitou.' },
          { linhas: [3, 3], cor: 2, titulo: '"Rei do mundo todo"',
            texto: 'O motivo é declarado sem disfarce: não é natureza nem superação, é a sensação de estar acima de todos. E ele diz "me sentir" — admite que é sensação, não fato.' }
        ]
      },

      {
        rotulo: 'O escalador: a reza',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Terra fria"',
            texto: 'Pedir para não ser atingido pela terra fria funciona nos dois sentidos: não ser soterrado por avalanche, que é a montanha literalmente caindo em cima de quem sobe, e não ser enterrado.' },
          { linhas: [1, 1], cor: 1, titulo: 'Hanuman',
            texto: 'Deus-macaco do hinduísmo, conhecido pela força e por proteger quem viaja e enfrenta perigo. A escolha é coerente com o lugar: o Himalaia fica entre Nepal e Índia, então ele reza para os deuses do território que está escalando, não para os de casa.' },
          { linhas: [2, 2], cor: 1, titulo: '"Minha pequena vida"',
            texto: 'No meio do pedido ele se chama de pequeno — o oposto exato do "rei do mundo todo" de três versos antes. É essa contradição que a música explora: ele quer ser gigante e sabe que não é.' }
        ]
      },

      {
        rotulo: 'O monte: dá meia volta',
        estrofes: [3],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Muda quem fala',
            texto: 'A voz troca aqui. Quem fala agora chama ele de "viajante" e manda voltar: é a montanha respondendo. Daqui em diante a música tem dois personagens se alternando.' },
          { linhas: [1, 1], cor: 1, titulo: 'Os filhos e a geada',
            texto: 'O argumento não é medo, é comparação: ele tem casa, filhos e uma janela de onde dá para ver o frio de longe. O monte oferece a alternativa antes de ameaçar — o que faz do aviso um convite, não uma intimidação.' },
          { linhas: [2, 2], cor: 1, titulo: '"Morrer por nada"',
            texto: 'Só então vem o aviso, e ele desmonta o motivo da estrofe do "rei do mundo todo". Para o monte, morrer no cume não faz ninguém rei de coisa alguma: a morte não vira feito, vira desperdício.' }
        ]
      },

      {
        rotulo: 'O escalador: a negociação',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O Everest, e a pele',
            texto: 'Só aqui a montanha é nomeada, e é o ponto mais alto da Terra. "Fizestes" é conjugação antiga, de oração — ele responde como quem fala com uma divindade, não com um obstáculo. E a pele "cor de neve" é descrição do corpo dele: o branco do congelamento.' },
          { linhas: [1, 1], cor: 1, titulo: 'O que ele pede é a ordem',
            texto: 'Ele não pede para ser poupado. Pede uma sequência: primeiro o topo, depois a morte. É a única coisa que ele tenta negociar em toda a música, e não é sobre o resultado — é sobre em que ordem acontece.' },
          { linhas: [2, 2], cor: 1, titulo: '"Não interfere"',
            texto: 'Ele declara o que aceita trocar pelo cume, e trata qualquer socorro como interferência. Ou seja: alguém que tentasse salvá-lo estaria, na conta dele, estragando o plano.' }
        ]
      },

      {
        rotulo: 'O monte: a sentença',
        estrofes: [5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Quem tem a última palavra',
            texto: 'A música não termina com o escalador, termina com a montanha — e a primeira coisa que ela faz é lembrar que mostrou o caminho de volta. Houve escolha, e isso é dito antes da sentença.' },
          { linhas: [1, 1], cor: 1, titulo: 'Kali',
            texto: 'Deusa hindu ligada à destruição e ao fim dos ciclos, em geral representada com um colar de crânios. Dizer que subir ao topo é brigar com ela transforma a escalada em provocação a uma divindade — e é o tipo de briga que ninguém ganha.' },
          { linhas: [2, 2], cor: 1, titulo: '"Não queria te congelar assim"',
            texto: 'O monte não mata com raiva: a frase é de quem lamenta. E isso é pior, porque significa que a morte não é castigo por nada que ele tenha feito — é só a consequência de estar onde está.' },
          { linhas: [3, 3], cor: 2, titulo: '"Os deuses te querem morto"',
            texto: 'A decisão final não é do monte nem do escalador, e isso fecha a lógica das duas rezas: ele pediu proteção a Hanuman e os deuses decidiram contra. O "bem aqui" completa: o corpo fica onde está, sem voltar para casa.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'ave-expurgo',
    titulo: 'Ave Expurgo',
    epigrafe: 'Uma oração pedindo extermínio, que termina se incluindo',
    estrofesEsperadas: 5,
    contexto:
      'A música é montada como reza: usa "ave", "bendito", "maldito", "purifique" e imita a fórmula ' +
      'das bem-aventuranças do Evangelho. O que ela pede, porém, é um expurgo — expulsar, eliminar. ' +
      'A primeira metade acusa o mundo de ser cruel e orgulhoso e pede que ele seja limpo; a segunda ' +
      'troca o pronome de "tu" para "nós" e admite que quem acusa faz parte do que acusou. O par que ' +
      'marca essa virada está à vista: a noite é "bendita" no primeiro verso e "maldita" no meio. ' +
      'As notas à direita explicam, de forma literal, o que cada trecho diz, inclusive as referências.',

    trechos: [
      {
        rotulo: 'A acusação',
        estrofes: [0],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Vocabulário de reza',
            texto: 'A música abre com palavra de oração e vai usar esse vocabulário até o fim: bendito, maldito, purificar, ave. Só que o que está sendo abençoado é a hora de soltar a raiva — a forma é de reza, o conteúdo é o contrário de uma.' },
          { linhas: [2, 2], cor: 1, titulo: 'A acusação vem em lista',
            texto: 'Ele não diz que o mundo é ruim de modo geral: enumera comportamentos. Primeiro gostar da desgraça alheia, depois o orgulho — os dois são coisas que pessoas fazem, não circunstâncias. Nesta música o culpado é sempre alguém, nunca o acaso.' },
          { linhas: [3, 3], cor: 1, titulo: '"Pisa em cacos, alma fraca"',
            texto: 'Pisar em cacos é machucar-se para subir; a "alma fraca" é quem fica embaixo. O verso coloca o preço e a vítima na mesma linha: chegar ao topo custa dor própria e dor alheia, nessa ordem.' },
          { linhas: [4, 4], cor: 2, titulo: 'Os outros como escudo',
            texto: 'A lista fecha com a acusação mais grave: as pessoas não servem só de degrau, servem de proteção — alguém que leva o dano no seu lugar. E repare que ele ainda fala de "tu", como quem está de fora do que descreve.' }
        ]
      },

      {
        rotulo: 'A oração',
        estrofes: [1, 2],
        repeticao: 'A invocação "Ave expurgo" volta sozinha logo depois desta estrofe',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Ave expurgo"',
            texto: '"Ave" é a saudação latina das rezas católicas, como em Ave Maria. "Expurgo" é expulsar, eliminar. Juntas, formam uma oração dirigida não a um santo, mas ao próprio ato de eliminar — é o título da música e o centro dela.' },
          { linhas: [1, 1], cor: 1, titulo: '"Limpe pragas"',
            texto: 'É o vocabulário mais pesado da letra, e está ali de propósito. Chamar pessoas de praga é o que transforma violência em faxina: não se mata gente, se limpa. A música põe a frase na boca de quem reza e não comenta — quem julga é quem ouve.' },
          { linhas: [2, 2], cor: 1, titulo: 'Uma bem-aventurança invertida',
            texto: '"Bendito seja aquele que..." é a fórmula das bem-aventuranças do Evangelho. Aqui a estrutura da bênção é mantida inteira e o conteúdo é trocado pelo oposto: o declarado bendito é quem não segura o próprio surto.' },
          { linhas: [3, 3], cor: 2, titulo: '"Faça do seu cúmulo o abismo"',
            texto: 'Cúmulo é o ponto máximo, o limite. Mandar transformar o limite em abismo é mandar não ter limite nenhum — o fundo deixa de existir. E "banhar-se de ódio" mantém a imagem religiosa: é um batismo, só que com o líquido trocado.' }
        ]
      },

      {
        rotulo: 'A virada',
        estrofes: [4],
        versos: [0, 4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'De bendita a maldita',
            texto: 'A mesma noite da abertura volta com o adjetivo invertido. É o ponto em que a música muda de direção: até aqui era bênção, daqui em diante é condenação — e a condenação vai acabar incluindo quem canta.' },
          { linhas: [1, 1], cor: 1, titulo: 'Demônios com fome',
            texto: 'Eles passam fome de dia e comem de noite. É a descrição de algo que fica contido enquanto há gente olhando e se solta quando não há: o assunto do trecho é o disfarce, não o mal em si.' },
          { linhas: [2, 2], cor: 1, titulo: 'O argumento do gato',
            texto: 'Gato realmente mata por diversão, não só por fome. A pergunta usa esse fato como permissão: se na natureza é assim, por que você se contém? É um argumento que a letra apresenta sem desmentir — quem está convencendo é o narrador, e o alvo do convencimento é o ouvinte.' },
          { linhas: [3, 4], cor: 2, titulo: 'Leões e hienas',
            texto: 'Comportamento real: hienas em bando expulsam leões da caça. Traduzido, o verso diz que posição não protege contra número. É a segunda parte do convencimento — além de natural, é o que garante não ser devorado: ou você está no bando, ou o bando consome você.' }
        ]
      },

      {
        rotulo: 'O "nós"',
        estrofes: [4],
        versos: [5, 8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Muda o pronome',
            texto: 'Até aqui era "tu", o mundo, os outros. Agora é "nós" — e o adjetivo é o mesmo que ele tinha dado à noite: maldito. Quem estava acusando acaba de entrar na própria lista.' },
          { linhas: [1, 1], cor: 1, titulo: 'A mesma lista, conjugada em nós',
            texto: 'Mentir, fingir e pisar em todos são exatamente as acusações da primeira estrofe, agora com o verbo em primeira pessoa do plural. E não é confissão arrependida: "aceite" está no imperativo, ou seja, o pedido é admitir e continuar.' },
          { linhas: [2, 2], cor: 1, titulo: 'Querer contra precisar',
            texto: 'A distinção é exata, e é ela que separa ganância de necessidade. Ele admite que segue o caminho do desejo, não o da falta — o que fecha a porta da desculpa mais comum, a de que era questão de sobrevivência.' },
          { linhas: [3, 3], cor: 2, titulo: 'Maquiavel',
            texto: 'Referência a "O Príncipe" (1513), de Nicolau Maquiavel, e ao trecho mais citado do livro: como é difícil ser amado e temido ao mesmo tempo, é mais seguro ser temido. A citação entra como fecho do argumento — assim o egoísmo deixa de ser defeito e vira método.' }
        ]
      },

      {
        rotulo: 'O brinde',
        estrofes: [4],
        versos: [9, 11],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Reza no começo, brinde no fim',
            texto: 'A música termina com gesto de comemoração, não de arrependimento. Liturgia e brinde têm em comum o fato de serem rituais de grupo: dos dois lados é preciso mais de uma pessoa para acontecer.' },
          { linhas: [1, 1], cor: 1, titulo: '"Nosso"',
            texto: 'A última confirmação do pronome. Não é o egoísmo do mundo, nem o dele: é o de todos, incluindo quem está ouvindo — que é justamente quem ele passou a música inteira tentando convencer.' },
          { linhas: [2, 2], cor: 2, titulo: 'A palavra que sobra',
            texto: 'A frase é quebrada em três linhas para terminar numa palavra sozinha. Depois de rezar, acusar o mundo e citar Maquiavel, o que fica no fim é o nome do que estava sendo defendido desde o começo.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: '6balas',
    titulo: '6Balas',
    epigrafe: 'A carreira de um pistoleiro, contada por datas',
    estrofesEsperadas: 14,
    contexto:
      'A música conta em ordem cronológica a carreira de um pistoleiro fictício que cruza com nomes ' +
      'reais do velho oeste americano: Jesse James, Billy the Kid, Pat Garrett, John Wesley Hardin, ' +
      'Butch Cassidy, Sundance Kid, Calamity Jane e a cidade de Tombstone. As datas funcionam como ' +
      'capítulos — 1877, 1888, 1890 — e a conta de idade fecha do começo ao fim. O detalhe a seguir ' +
      'com atenção é o refrão: ele começa em "aprendi", passa por "aprendeu" (falando de outro) e ' +
      'termina em "já sabia". É por essa troca de verbo que a letra mede o tempo passar. As notas à ' +
      'direita explicam, de forma literal, cada trecho e cada referência histórica.',

    trechos: [
      {
        rotulo: 'O cenário',
        estrofes: [0],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Data vaga de propósito',
            texto: 'A música abre sem precisar o ano. Compare com o resto: depois virão 1877, 1888 e 1890, exatos. A data só fica nítida quando ele vira alguém — enquanto é ninguém, o tempo fica impreciso.' },
          { linhas: [1, 1], cor: 1, titulo: '"Saqueável"',
            texto: 'Palavra inventada a partir de saquear. Ele não descreve o oeste como perigoso nem como selvagem: descreve como disponível para saque. Já é o ponto de vista de quem olha o lugar como oportunidade.' },
          { linhas: [2, 3], cor: 1, titulo: 'O que existia antes da arma',
            texto: 'As duas informações do cenário são faltas: não tinham nada e a comida acabava. A música estabelece a pobreza antes de estabelecer a violência, e essa ordem vai importar quando ele parar de usá-la como explicação.' }
        ]
      },

      {
        rotulo: 'O pai',
        estrofes: [1, 2],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O conselho',
            texto: 'O pai não promete melhora: manda se acostumar. O único pedido é não seguir o caminho errado — ou seja, a pobreza é dada como permanente, e a única escolha que sobra ao filho é moral.' },
          { linhas: [2, 3], cor: 1, titulo: '"Mal ele sabia"',
            texto: 'A expressão é de quem conta uma história já sabendo o fim. Ele não está decidindo nada aqui: está narrando de longe o que já aconteceu. E "da vila para todo o estado" é crescimento de território, dito com orgulho — não é arrependimento.' }
        ]
      },

      {
        rotulo: 'Refrão: aprendi cedo',
        estrofes: [3],
        repeticao: 'Os dois versos vêm 2x seguidas',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Colt',
            texto: 'Colt é a fabricante do revólver que virou símbolo do velho oeste: o Single Action Army, de 1873, apelidado de Peacemaker. Ele tinha seis câmaras — daí a "munição pra seis" mais adiante, e o título da música.' },
          { linhas: [1, 1], cor: 1, titulo: 'Arma e briga, lado a lado',
            texto: 'As duas coisas que ele aprendeu cedo são o revólver e a briga de mão. A frase repetida com a mesma estrutura iguala as duas: nenhuma é apresentada como mais grave que a outra.' },
          { linhas: [2, 3], cor: 2, titulo: 'Guarde a forma deste refrão',
            texto: '"Aprendi": primeira pessoa, passado. Este refrão volta duas vezes na música com o verbo trocado, e é assim que a letra marca a passagem dos anos sem precisar dizer que o tempo passou.' }
        ]
      },

      {
        rotulo: '1877: Jesse e Billy',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A data fica exata',
            texto: 'A partir daqui a música dá anos precisos, e a conta fecha: 17 anos em 1877 significa nascido por volta de 1860 — o que bate com os 28 que ele diz ter em 1888. A aritmética da letra é consistente do começo ao fim.' },
          { linhas: [1, 1], cor: 1, titulo: 'Tio Jesse',
            texto: 'Jesse James (1847–1882), chefe da gangue James–Younger e um dos assaltantes mais famosos dos Estados Unidos. Chamá-lo de "tio" não indica parentesco: é como um garoto trata o mais velho do bando em que entrou.' },
          { linhas: [2, 3], cor: 1, titulo: 'Billy e a Winchester',
            texto: 'Billy the Kid (por volta de 1859–1881), morto aos 21 anos pelo xerife Pat Garrett. Repare na arma: Winchester é rifle de repetição, não revólver. Os dois personagens já se distinguem pelo que carregam.' },
          { linhas: [4, 4], cor: 2, titulo: 'Centro-Oeste',
            texto: 'Aqui a letra toma uma liberdade: o Billy the Kid histórico nasceu em Nova York e ficou famoso no Novo México. A origem que a música dá é invenção dela — o que conta na cena é apenas que ele vem de fora.' }
        ]
      },

      {
        rotulo: 'O mesmo refrão, no outro',
        estrofes: [5],
        repeticao: 'Os dois versos vêm 2x seguidas',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O verbo muda de pessoa',
            texto: 'É o refrão anterior conjugado na terceira pessoa: agora quem aprendeu cedo é o Billy. Ele reconhece no outro a própria formação — e é assim que a música apresenta uma amizade: não por afeto, por currículo igual.' },
          { linhas: [2, 3], cor: 1, titulo: 'Roubo no lugar de soco',
            texto: 'Os itens também mudaram. Onde antes era Colt e briga de mão, agora é roubo e "entrar no jogo". A escala subiu junto com a idade: saiu da rua e virou ofício.' }
        ]
      },

      {
        rotulo: 'O desafio',
        estrofes: [6],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Os dois se medem',
            texto: '"Mostra o que tu sabe fazer" é convite e provocação ao mesmo tempo. É o que transforma o encontro dos dois em competição, e não em parceria — coerente com a apresentação por currículo do trecho anterior.' },
          { linhas: [3, 3], cor: 1, titulo: 'Munição pra seis',
            texto: 'Seis tiros é a capacidade do tambor do Colt, e é a única vantagem que ele anuncia. O verso serve de gancho: o refrão seguinte é a demonstração do que ele acabou de prometer.' }
        ]
      },

      {
        rotulo: 'Refrão: 6 balas',
        estrofes: [7],
        repeticao: 'O refrão volta em seguida, começando apenas com "Bala"',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O título da música',
            texto: 'Seis balas é a capacidade do tambor — ou seja, é o limite dele. A música pega uma limitação técnica da arma e transforma em nome próprio, como se fosse uma marca e não uma restrição.' },
          { linhas: [1, 1], cor: 1, titulo: 'O tiro, sem poupar detalhe',
            texto: 'O verso descreve o efeito na cabeça sem rodeio. Colocado logo depois do desafio, funciona como resposta: ele não conta o que sabe fazer, mostra.' },
          { linhas: [2, 3], cor: 2, titulo: 'O ritual depois do tiro',
            texto: 'Girar a arma, cuspir no chão e assoprar o cano são gestos de exibição, não de necessidade — vieram dos filmes de faroeste. A fumaça, porém, é real: a pólvora negra da época soltava muita. O que ele guarda do assassinato é a pose que vem depois dele.' }
        ]
      },

      {
        rotulo: '1888: o último de pé',
        estrofes: [9],
        repeticao: 'Depois desta estrofe o refrão volta como "já sabia"',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Onze anos depois',
            texto: 'A conta continua certa: 28 anos em 1888. As datas funcionam como capítulos, e o intervalo entre elas é o que a música não conta — ela mostra só o antes e o depois.' },
          { linhas: [2, 2], cor: 1, titulo: 'Tombstone no poço',
            texto: 'Tombstone é a cidade do Arizona onde aconteceu o tiroteio do O.K. Corral, em 1881. Ela vivia da mineração de prata e, por volta de 1886, as minas alagaram e a cidade entrou em decadência. "No poço" vale nos dois sentidos: em declínio e literalmente inundada.' },
          { linhas: [3, 3], cor: 1, titulo: 'Billy e Jesse mortos',
            texto: 'As duas mortes são reais e batem com a data. Billy the Kid morreu em 1881, morto pelo xerife Pat Garrett; Jesse James morreu em 1882, morto por um homem do próprio bando.' },
          { linhas: [4, 4], cor: 2, titulo: '"Único bicho solto"',
            texto: 'J. Wesley é John Wesley Hardin (1853–1895), um dos pistoleiros mais letais do período, preso em 1878 e solto apenas em 1894. Somando tudo: em 1888 os amigos estão mortos e o rival está na cadeia, então a frase é literal, não figura de linguagem.' }
        ]
      },

      {
        rotulo: '1890: a lista',
        estrofes: [11],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Último capítulo',
            texto: 'A terceira e última data. Ele está com cerca de 30 anos, e a estrofe inteira é uma lista de nomes sendo xingados um a um — a forma mais direta de dizer que agora ele se considera acima de todos eles.' },
          { linhas: [1, 2], cor: 1, titulo: 'Sundance Kid e Butch Cassidy',
            texto: 'Harry Longabaugh e Robert LeRoy Parker, da gangue Wild Bunch, que ficou ativa justamente nos anos 1890. São a geração seguinte: os que estavam subindo enquanto os nomes da estrofe anterior morriam.' },
          { linhas: [3, 4], cor: 1, titulo: 'Pat Garrett e J. Wesley',
            texto: 'Garrett é o xerife que matou Billy; J. Wesley é o pistoleiro preso. Ele xinga o representante da lei e o rival na mesma lista, sem separar um do outro — para ele a diferença entre bandido e xerife não conta.' },
          { linhas: [5, 5], cor: 2, titulo: '"Eu não sou pivete"',
            texto: 'Calamidade é Calamity Jane (1852–1903), figura célebre da fronteira. E "pivete" é a mesma palavra que ele usou para descrever Billy quando o conheceu, em 1877 — ao repeti-la agora, está dizendo que saiu daquele lugar: não é mais o garoto do bando.' }
        ]
      },

      {
        rotulo: 'A recompensa',
        estrofes: [12],
        versos: [0, 4],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O preço como ofensa',
            texto: 'Cartaz de procurado trazia o valor impresso, então a quantia era a medida pública de quanto alguém era perigoso. Ele não reclama de estar sendo caçado: reclama do número. O que ofende é ter sido avaliado por baixo.' },
          { linhas: [2, 3], cor: 1, titulo: '"Rei dessa cidade"',
            texto: 'Ele troca o vocabulário de bandido pelo de governo. Não quer fugir da cidade nem assaltá-la: quer mandar nela — o que é uma ambição diferente de tudo que apareceu até aqui.' },
          { linhas: [4, 4], cor: 1, titulo: 'E o plano é devastar',
            texto: 'O programa de governo dele é destruição. É o ponto em que a música larga de vez a justificativa da primeira estrofe: nada disso tem mais a ver com a comida que acabava.' }
        ]
      },

      {
        rotulo: 'Prata ou chumbo',
        estrofes: [12],
        versos: [5, 8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Sem luz no fim do túnel',
            texto: 'Ele mesmo diz que não há saída, e diz isso sobre si próprio. É a única frase do trecho que não é ameaça a outra pessoa — e passa despercebida no meio das outras.' },
          { linhas: [1, 2], cor: 1, titulo: 'A resposta já está pronta',
            texto: 'Qualquer coisa que se diga a ele tem uma resposta só, decidida de antemão. A frase é quebrada em três linhas curtas, o que atrasa a conclusão de propósito e faz o fecho cair sozinho.' },
          { linhas: [3, 3], cor: 2, titulo: '"Ou prata ou chumbo"',
            texto: 'É a tradução de "plata o plomo", frase associada a Pablo Escobar e ao cartel de Medellín: aceite o suborno ou receba a bala. É anacronismo proposital — um século depois do cenário da música — e serve para dizer que o método não mudou de lá para cá.' }
        ]
      },

      {
        rotulo: 'O fecho: o dinheiro',
        estrofes: [13],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O refrão pela última vez',
            texto: 'É a mesma fórmula "já sabia" da estrofe de 1888, agora aplicada a esconder corpo. A música fecha assim o ciclo do aprendizado: soco, roubo, revólver e, por fim, como sumir com a prova.' },
          { linhas: [1, 2], cor: 1, titulo: '"Mas nem precisa"',
            texto: 'A virada final, e a única piada da letra. Ele aprendeu a esconder o corpo e descobre que o trabalho é desnecessário — porque dinheiro compra as pessoas que investigariam. A arma deixou de ser o instrumento principal.' },
          { linhas: [3, 5], cor: 2, titulo: 'Por que repete',
            texto: 'Os três versos voltam idênticos para encerrar. Depois de treze anos de história, datas exatas e uma lista de nomes reais, a última informação da música não é sobre pontaria: é sobre dinheiro. A repetição existe para que seja essa a frase que fica.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'super-heroina',
    titulo: 'Super Heroína',
    epigrafe: 'Uma cantada montada inteira com referências',
    estrofesEsperadas: 12,
    contexto:
      'A letra é uma cantada construída quase toda por citações: quadrinhos da Marvel e da DC, ' +
      'filmes de Tarantino, Superman, Star Wars, o jogo League of Legends, mitologia nórdica e um ' +
      'desenho animado dos anos 2000. Duas observações ajudam a ler o conjunto. A primeira: os ' +
      'poderes escolhidos quase nunca são de força — são de mexer com a mente, com a percepção ou ' +
      'com a realidade, então o elogio é sempre "você tem poder sobre mim". A segunda: ele usa duas ' +
      'vezes a mesma construção, negando a comparação ("não sou o Django", "não é o Super-Choque") e ' +
      'descrevendo em seguida exatamente o que o personagem negado faz. As notas à direita explicam ' +
      'quem é cada referência e o que cada trecho diz.',

    trechos: [
      {
        rotulo: 'Marvel ou DC',
        estrofes: [0],
        repeticao: 'A estrofe volta inteira na segunda metade da música',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'As duas editoras',
            texto: 'Marvel e DC são as duas maiores editoras de quadrinhos de super-herói. Ele deixa a escolha aberta — e os dois nomes do verso seguinte respondem na mesma ordem: um de cada uma.' },
          { linhas: [2, 2], cor: 1, titulo: 'Jean Grey e Mulher-Maravilha',
            texto: 'Jean Grey é dos X-Men, da Marvel: telepata, mexe com a mente dos outros. Mulher-Maravilha é da DC: amazona, força e o Laço da Verdade. A dupla cobre exatamente as duas editoras citadas na linha anterior.' },
          { linhas: [3, 3], cor: 1, titulo: '"Mexe, mexe, mexe"',
            texto: 'A repetição imita a insistência da cantada, e o verbo é o centro da música: quase todo poder citado aqui é de mexer com a cabeça de alguém, não de bater em alguém.' },
          { linhas: [4, 4], cor: 2, titulo: 'Vampira',
            texto: 'Vampira (Rogue), dos X-Men, absorve memórias, poderes e força vital pelo toque — e por isso não pode encostar em ninguém. É a comparação mais exata do trecho: ele está dizendo que ela mexe com a cabeça dele pelo simples contato.' }
        ]
      },

      {
        rotulo: 'Realidade e dança',
        estrofes: [1],
        repeticao: 'A estrofe volta na segunda metade, com o nome de Zatanna encurtado',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Feiticeira Escarlate',
            texto: 'Wanda Maximoff, da Marvel, cujo poder é alterar a realidade — nos quadrinhos ela chega a reescrever o mundo inteiro. "Alterna a realidade" é descrição literal do que a personagem faz.' },
          { linhas: [1, 1], cor: 1, titulo: 'Zatanna',
            texto: 'Maga da DC que lança feitiços dizendo as palavras de trás para frente. Guarde essa inversão: ela reaparece duas estrofes adiante, quando a Terra girar ao contrário.' },
          { linhas: [2, 3], cor: 1, titulo: '"Bailes finos"',
            texto: 'Ele junta duas imagens de cinema que não combinam: o baile de gala elegante e a cena que cita no verso seguinte, que não tem nada de fina. O que importa nas duas é a mesma coisa — dançar como se dança em filme.' },
          { linhas: [4, 5], cor: 2, titulo: 'Pulp Fiction',
            texto: 'Os "passinhos" são a cena de dança de Vincent e Mia em Pulp Fiction (1994), de Quentin Tarantino: um concurso de twist dentro de uma lanchonete temática. É a primeira aparição do Tarantino na letra, e a estrofe seguinte é inteira sobre ele.' }
        ]
      },

      {
        rotulo: 'Tarantino',
        estrofes: [2],
        repeticao: 'A estrofe volta na segunda metade',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Não sou o Django"',
            texto: 'Django Livre (2012), de Tarantino, é a história de um homem que atravessa o país para resgatar a esposa. Ele nega ser o Django e, na mesma frase, descreve exatamente o que o Django faz — é um jeito de se comparar sem assumir que está se comparando.' },
          { linhas: [2, 3], cor: 1, titulo: 'Inimigos num filme do Tarantino',
            texto: 'Os filmes dele são conhecidos pela violência e pelas tramas de vingança. Prometer que quem tocar nela vira inimigo num filme desses é prometer resposta desproporcional. E a estrofe fecha coerente consigo mesma: Django é filme do próprio Tarantino.' }
        ]
      },

      {
        rotulo: 'O olhar',
        estrofes: [3],
        repeticao: 'A estrofe volta na segunda metade',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A Terra girando ao contrário',
            texto: 'É a cena final de Superman (1978), em que ele voa em volta do planeta até fazê-lo girar para o outro lado e, com isso, voltar no tempo. O verso seguinte confirma a referência: o efeito é justamente andar para trás no calendário.' },
          { linhas: [2, 2], cor: 1, titulo: 'De abril para março',
            texto: 'Um mês para trás — o menor retrocesso possível dentro de uma imagem enorme. O contraste é o efeito do verso: ela move o planeta inteiro, e o que ele ganha com isso é um mês a mais.' },
          { linhas: [3, 3], cor: 2, titulo: 'Tempo-espaço',
            texto: 'O termo da física aparece com a ordem trocada (o usual é espaço-tempo). Somado à Zatanna, que fala ao contrário, e à Terra girando ao contrário, a estrofe inteira se sustenta sobre inversões.' }
        ]
      },

      {
        rotulo: 'Pode descansar',
        estrofes: [4],
        repeticao: 'A estrofe volta na segunda metade, fechando o bloco que se repete',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A única estrofe sem nome próprio',
            texto: 'Numa música feita de referências, esta é a única em que não aparece nenhum personagem citado. Quando ele para de citar, o que sobra é bem simples: ela dorme e ele fica de vigia.' },
          { linhas: [1, 1], cor: 1, titulo: '"Quando o inverno chegar"',
            texto: 'Inverno funciona aqui como nome do período ruim que ainda vai vir. E repare no papel que ele assume: o de avisar, não o de impedir — a diferença entre um super-herói e um vigia.' },
          { linhas: [2, 4], cor: 1, titulo: 'A oferta concreta',
            texto: 'Não há poder nenhum neste trecho, nem dela nem dele. A proposta é apenas esperar junto até passar, e é a coisa mais concreta que a música chega a oferecer.' }
        ]
      },

      {
        rotulo: 'Ahri',
        estrofes: [10],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Guarde a palavra "charme"',
            texto: 'Ela parece só um elogio comum, mas é o gancho do último verso da estrofe: daqui a duas linhas vira nome de habilidade.' },
          { linhas: [2, 2], cor: 1, titulo: '"Me faz cair"',
            texto: 'O olhar que faz cair prepara a mesma coisa. Os dois versos anteriores já estão descrevendo a personagem antes de ela ser nomeada.' },
          { linhas: [3, 3], cor: 2, titulo: 'Ahri',
            texto: 'Personagem do jogo League of Legends: uma raposa de nove caudas inspirada no gumiho da mitologia coreana. A habilidade mais conhecida dela chama-se Charm — Encanto — e atrai o adversário na direção dela. Ou seja, a estrofe descreve o poder primeiro e só depois revela o nome.' }
        ]
      },

      {
        rotulo: 'Leia, Freya e o fecho',
        estrofes: [11],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Leia',
            texto: 'A princesa Leia, de Star Wars. Somando com o resto, a música já passou por quadrinhos, cinema, jogo e agora Star Wars — a variedade das fontes é parte do recado: ele a compara com tudo o que admira.' },
          { linhas: [1, 1], cor: 1, titulo: 'Freya',
            texto: 'Deusa nórdica ligada ao amor e à beleza, e também à guerra e à morte. É a única referência da música que não vem da cultura pop: vem da mitologia, o que a coloca num degrau acima das outras.' },
          { linhas: [2, 2], cor: 1, titulo: '"Assinou minha sentença"',
            texto: 'Vocabulário de tribunal no meio dos elogios. Ele apresenta o efeito dela como condenação: sem escapatória e decidida por outra pessoa — o que combina com todos os poderes mentais citados antes.' },
          { linhas: [3, 4], cor: 2, titulo: 'Super-Choque, e a segunda negação',
            texto: 'Super-Choque (Static Shock) é o desenho dos anos 2000 sobre um herói que controla eletricidade. E repare na construção: é a mesma do "não sou o Django" — nega a comparação e em seguida descreve exatamente o efeito dela. A música termina com o truque com que se apresentou.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'manual-do-suicidio-pt1',
    titulo: 'Manual do Suicídio Pt.1',
    epigrafe: 'A música que explica, no fim, por que ela existe',
    estrofesEsperadas: 7,
    contexto:
      'A letra trata de depressão e ideação suicida sem metáfora: cita pelo nome o remédio que ele ' +
      'toma, descreve insônia e encena um tiro. Dois enquadramentos ajudam a ler. O primeiro é que a ' +
      'música se apresenta como documento — a "carta" que ele diz refazer é a própria letra que está ' +
      'sendo cantada. O segundo só aparece no fim: um amigo pediu que ele escrevesse o que sente em ' +
      'vez de escrever com referências e personagens, e esta música é a resposta a esse pedido, o que ' +
      'explica por que ela é tão diferente das outras desta apresentação. As notas à direita explicam, ' +
      'de forma literal, o que cada trecho diz e quem são as pessoas citadas. ' +
      'Se o assunto tocar você de perto: o CVV atende de graça pelo telefone 188, 24 horas por dia.',

    trechos: [
      {
        rotulo: 'A abertura',
        estrofes: [0],
        repeticao: 'Estes versos voltam no fim, com uma linha a mais',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Começo e fim são a mesma frase',
            texto: 'Os dois versos que abrem a música são os mesmos que a encerram. Começar e terminar no mesmo lugar é o formato escolhido: a letra não avança para lugar nenhum, e isso é parte do que ela está dizendo.' },
          { linhas: [1, 1], cor: 1, titulo: 'Construir e destruir',
            texto: 'O verso descreve um ciclo, não um fracasso isolado. Ele não diz que é incapaz de fazer: diz que desfaz o que fez. O problema apresentado é a permanência, não a capacidade.' }
        ]
      },

      {
        rotulo: 'A carta',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A carta é a própria música',
            texto: '"Faço e refaço" indica que ele escreve a mesma carta muitas vezes. E ao dizer que os versos dela completam estrofes, iguala o documento à letra que está sendo cantada: o que ouvimos se apresenta como sendo a carta.' },
          { linhas: [2, 3], cor: 1, titulo: 'A frase pronta, e a resposta',
            texto: 'A letra reproduz o conselho de sempre e devolve a resposta imediata. O que ele rejeita não é a ajuda: é a frase feita, dita por quem não sabe o que dizer e precisa dizer alguma coisa.' },
          { linhas: [4, 5], cor: 1, titulo: '"Espero que melhore"',
            texto: 'A segunda frase pronta, colocada logo depois da sorte. Junto, as duas viram o mesmo problema: tudo depende de algo fora do controle dele — inclusive a boa vontade dos outros.' },
          { linhas: [6, 6], cor: 2, titulo: 'Norte e sul trocados',
            texto: 'Ele inverte a convenção de propósito: se seguir em frente é ir para um lado, avisa que está indo para o outro. É a forma mais direta de responder ao "espero que melhore" do verso anterior.' }
        ]
      },

      {
        rotulo: 'A madrugada',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Insônia dita como ação',
            texto: 'Caminhar de madrugada é insônia descrita de forma concreta. Não há sentimento nomeado no trecho inteiro, só o que ele faz — o que aproxima o texto de um relato e o afasta do desabafo.' },
          { linhas: [1, 6], cor: 1, titulo: 'Por que sete vezes',
            texto: 'A repetição imita a caminhada: o mesmo passo, sem destino e sem variação. Entre uma linha e outra não muda absolutamente nada, que é exatamente o assunto do trecho.' },
          { linhas: [7, 7], cor: 2, titulo: 'A frase que não termina',
            texto: 'A última repetição é cortada no meio. Não é a caminhada que acaba — é a frase. O corte mostra isso sem precisar explicar, e é o detalhe mais bem colocado da estrofe.' }
        ]
      },

      {
        rotulo: 'O espelho',
        estrofes: [3],
        versos: [0, 5],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O espelho e a palavra "maggot"',
            texto: 'Escrever em vermelho no espelho é imagem de filme de terror. E "maggot" — larva — é como os fãs do Slipknot se chamam, o que já aponta para o nome que aparece quatro versos abaixo.' },
          { linhas: [2, 3], cor: 1, titulo: 'Vivo por fora, morto por dentro',
            texto: 'A frase separa o que os outros veem do que ele sente, e serve de explicação para o trecho anterior: é por isso que as pessoas dizem "espero que melhore" sem perceber o tamanho da coisa.' },
          { linhas: [4, 5], cor: 2, titulo: 'Corey Taylor',
            texto: 'Vocalista do Slipknot e do Stone Sour. A frase sobre anjos mentirem ecoa um verso de "Snuff", do Slipknot. Repare que ele credita a descoberta a outra pessoa: a letra registra quem o ajudou a formular o que sentia.' }
        ]
      },

      {
        rotulo: 'O pesadelo',
        estrofes: [3],
        versos: [6, 11],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Descobri comigo mesmo"',
            texto: 'Logo depois de creditar Corey Taylor, ele faz questão de marcar que esta parte é dele. A distinção importa dentro da música: separa o que aprendeu de fora do que aprendeu apanhando.' },
          { linhas: [2, 3], cor: 1, titulo: 'Correr sem sair do lugar',
            texto: 'É um pesadelo comum, descrito com precisão: quanto mais esforço, menos avanço. Ele usa como imagem do próprio estado, e a mesma ideia volta mais adiante na música, no relógio parado.' },
          { linhas: [4, 5], cor: 1, titulo: 'Os remédios e o 1%',
            texto: 'O verso mais concreto do trecho: existe tratamento em curso. E o número mede o que ele acha que sobrou — os remédios não estão salvando a vida inteira, estão segurando uma fração dela.' }
        ]
      },

      {
        rotulo: '"Vocês dizem, pare"',
        estrofes: [4],
        versos: [0, 2],
        repeticao: 'Os três versos vêm 2x seguidas',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Um diálogo travado',
            texto: 'A estrofe é montada como conversa em que ninguém sai do lugar: de um lado o pedido para parar, do outro a resposta de que não entendem. A forma da estrofe repete o que ela diz.' },
          { linhas: [2, 2], cor: 1, titulo: '"Front lane"',
            texto: 'Termo de jogos de equipe: é quem vai na frente e absorve o dano. Lido assim, o verso diz que ele gostaria de tirar o medo dessa posição — deixar de ter o medo como a coisa que enfrenta tudo primeiro. É a linha mais ambígua da letra, e a única em que ele diz querer parar.' }
        ]
      },

      {
        rotulo: 'Click clack',
        estrofes: [5],
        versos: [0, 5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A onomatopeia',
            texto: 'É o som de uma arma sendo engatilhada, escrito como som e não como descrição. A estrofe encena a cena em vez de contá-la.' },
          { linhas: [1, 2], cor: 1, titulo: 'Kennedy',
            texto: 'John F. Kennedy, presidente dos Estados Unidos, morto a tiros em Dallas em 1963 — o assassinato mais filmado da história. A comparação foi escolhida pela imagem que todo mundo já viu, não por política.' },
          { linhas: [3, 4], cor: 1, titulo: 'Dura duas palavras',
            texto: 'A onomatopeia fecha a encenação e o verso seguinte já muda de assunto. A cena mais pesada da música ocupa duas palavras e não é comentada — o que aumenta o efeito em vez de diminuir.' },
          { linhas: [5, 5], cor: 2, titulo: 'Mirtazapina',
            texto: 'Antidepressivo real, receitado inclusive por ajudar no sono. Citar o remédio pelo nome é o que tira a letra do terreno da metáfora: há tratamento acontecendo, e ele está dizendo que nem sempre funciona.' }
        ]
      },

      {
        rotulo: 'A paralisia',
        estrofes: [5],
        versos: [6, 9],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Relógio parado',
            texto: 'Correr contra um relógio parado é impossível de ganhar e impossível de perder. É a mesma ideia do pesadelo de dois trechos atrás, agora sem o sonho: esforço sem nenhuma medida de progresso.' },
          { linhas: [2, 3], cor: 1, titulo: 'O saci sem a outra perna',
            texto: 'O saci do folclore brasileiro já tem uma perna só e se locomove pulando. Tirar "a outra" deixa ele com nenhuma — e é por isso que o verso seguinte diz que não consegue andar. É a única piada da música, feita à própria custa.' }
        ]
      },

      {
        rotulo: 'A autocrítica',
        estrofes: [5],
        versos: [10, 13],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Ele antecipa a crítica',
            texto: 'Rápido demais, desafinado, batida repetitiva: ele lista os defeitos da própria música antes que alguém liste. É proteção, mas também aviso de que sabe o que está fazendo.' },
          { linhas: [2, 2], cor: 1, titulo: 'E concorda',
            texto: 'Em vez de se defender, ele confirma. O recado é que o critério aqui não é qualidade técnica — esta música não está tentando ser bem-feita, está tentando ser dita.' },
          { linhas: [3, 3], cor: 2, titulo: 'A gaveta',
            texto: 'Ele afirma que não pretendia lançar. Isso muda o estatuto do que se está ouvindo: não é uma música escrita para o público, é uma coisa que existia guardada e saiu por outro motivo — que vem no trecho seguinte.' }
        ]
      },

      {
        rotulo: 'O amigo',
        estrofes: [5],
        versos: [14, 18],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A outra voz',
            texto: 'A letra abre aspas para outra pessoa. É a única voz além da dele em toda a música, e é ela que explica por que a música existe: sem esse pedido, ela teria ficado na gaveta.' },
          { linhas: [2, 3], cor: 1, titulo: '"Referências e bagulhos fictício"',
            texto: 'O amigo descreve o que ele costuma escrever: personagens, citações, histórias inventadas. Quem estiver vendo esta apresentação já viu isso nas outras músicas — faroeste, quadrinhos, mitologia, a lenda do blues. Esta aqui é a resposta ao pedido contrário.' },
          { linhas: [4, 4], cor: 2, titulo: '"Sua mente é como um livro"',
            texto: 'A comparação vem do amigo, não dele. E é justamente essa imagem que o narrador vai levar ao pé da letra nos versos finais: o fecho da música foi emprestado de quem pediu a música.' }
        ]
      },

      {
        rotulo: 'O título',
        estrofes: [5],
        versos: [19, 22],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Ele aceita a comparação',
            texto: 'Em vez de recusar a imagem do amigo, ele a devolve com um tamanho: se for escrever tudo o que sente, não cabe numa música — vira livro.' },
          { linhas: [2, 2], cor: 1, titulo: 'Stephen King',
            texto: 'Escritor americano conhecido, entre outras coisas, por romances muito longos. A referência aqui não é sobre terror: é sobre volume. Ele escolheu a medida mais óbvia de "livro grande" para dizer quanto haveria para contar.' },
          { linhas: [3, 3], cor: 2, titulo: 'O nome da música, no último verso',
            texto: 'O título só aparece no fim, e como resultado de uma conversa — não como tema anunciado. E o "Pt.1" no nome completa a conta: se o que ele sente daria um livro, esta é só a primeira parte.' }
        ]
      },

      {
        rotulo: 'O fecho',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'De volta ao começo',
            texto: 'Os dois versos da abertura voltam idênticos. Depois de tudo o que foi dito no meio — a carta, a madrugada, os remédios, a conversa —, a música termina exatamente onde começou. O formato circular é o argumento.' },
          { linhas: [2, 2], cor: 1, titulo: 'A linha que não existia antes',
            texto: 'A única diferença em relação à abertura é o verso final. É a conclusão que a música guardou para o fim, e repare no alvo: as duas primeiras linhas falam do que ele faz, e esta fala do que ele acha que é.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'cafe-das-6',
    titulo: 'Café das 6',
    epigrafe: 'O amargo e o doce, medidos na mesma xícara',
    estrofesEsperadas: 9,
    contexto:
      'A música é dirigida a alguém que está indo embora, e o assunto real aparece no refrão: ' +
      'vontade de gritar, de sumir e de ter paz em Valhalla. A estrutura é uma degustação — a letra ' +
      'lista primeiro tudo o que é amargo (relações falsas, contas, erros próprios) e depois tudo o ' +
      'que leva açúcar (amizades, lugares, sonho, amor), usando o café como medida das duas coisas. ' +
      'Repare também na palavra "como", que se repete em quase todo verso e funciona ao mesmo tempo ' +
      'como comparação e como o verbo comer. As notas à direita explicam, de forma literal, o que ' +
      'cada trecho diz. O CVV atende de graça pelo telefone 188.',

    trechos: [
      {
        rotulo: 'O convite',
        estrofes: [0],
        repeticao: 'Estes três versos abrem, dividem e encerram a música',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Pagando pra ver"',
            texto: 'Expressão de pôquer: pagar para ver a carta do outro é duvidar do blefe. Ele não pede que a pessoa fique — aposta que ela não vai mesmo embora, o que é uma forma bem menos vulnerável de pedir a mesma coisa.' },
          { linhas: [1, 1], cor: 1, titulo: '"Vai desistir"',
            texto: 'O verbo tem dois alvos possíveis e a música não escolhe: desistir de ir embora, o que faria dele um provocador confiante, ou desistir de tudo, o que muda o tom da frase inteira. O refrão sobre Valhalla puxa para o segundo sentido.' },
          { linhas: [2, 2], cor: 2, titulo: 'O café das 6',
            texto: 'A letra não diz se são 6 da manhã ou da tarde. Se for de manhã, o convite vira uma aposta de que a pessoa atravessa a noite, e o café passa a ser a prova de que ela chegou lá — é a leitura que o resto da música sustenta.' }
        ]
      },

      {
        rotulo: 'Amargo: as pessoas',
        estrofes: [1],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O café vira medida',
            texto: 'A partir daqui a música funciona como degustação: tudo passa a ser comparado ao gosto da bebida. Primeiro vem a lista do que é amargo; a do que leva açúcar chega na segunda metade, com a mesma estrutura.' },
          { linhas: [1, 1], cor: 1, titulo: 'Sorriso falso e aperto de mão',
            texto: 'Os dois exemplos são gestos de cordialidade, coisas que existem justamente para parecer boas. O amargo desta lista não é a maldade: é a falsidade.' },
          { linhas: [2, 2], cor: 1, titulo: 'O "te amo" sem coração',
            texto: 'O terceiro exemplo é o mesmo mecanismo aplicado à pessoa mais próxima. A lista vai do estranho ao íntimo, e piora exatamente nessa ordem.' },
          { linhas: [3, 3], cor: 2, titulo: '"Como, um limão"',
            texto: 'A palavra "como" já apareceu quatro vezes na estrofe, e funciona nos dois sentidos ao mesmo tempo: comparação e o verbo comer. Numa música sobre tomar café, os dois cabem. E o limão é a referência mais imediata para um gosto que faz a cara fechar.' }
        ]
      },

      {
        rotulo: 'Amargo: as contas',
        estrofes: [2],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Agora o amargo é prático',
            texto: 'A segunda lista troca relações por consequências: contas que não foram pagas. Sai o que os outros fazem, entra o que sobrou de responsabilidade — o amargo deixa de ser sobre gente e passa a ser sobre pendência.' },
          { linhas: [2, 2], cor: 1, titulo: 'O único item de culpa própria',
            texto: 'É o único da lista amarga em que quem errou foi ele. E o resultado que a letra nomeia é solidão, o que explica por que a música inteira está sendo dita para alguém que está indo embora.' },
          { linhas: [3, 3], cor: 2, titulo: 'O limão volta',
            texto: 'A estrofe termina igual à anterior. As duas listas amargas são fechadas pela mesma imagem, e isso as agrupa: relações falsas e erros próprios têm, para ele, exatamente o mesmo gosto.' }
        ]
      },

      {
        rotulo: 'Valhalla',
        estrofes: [3],
        repeticao: 'O refrão volta inteiro na segunda metade',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Você quer"',
            texto: 'Ele passa a dizer o que a outra pessoa sente, sem perguntar. Gritar e sumir para chorar são dois pedidos de espaço — e nenhum dos dois é pedido de ajuda, o que é a diferença que a música está apontando.' },
          { linhas: [2, 2], cor: 1, titulo: 'Valhalla',
            texto: 'Na mitologia nórdica é o salão de Odin, para onde vão os guerreiros mortos em combate. Pedir paz em Valhalla é pedir paz depois da morte — não em vida, e não agora.' },
          { linhas: [3, 4], cor: 2, titulo: 'A contradição do refrão',
            texto: 'Valhalla é reservado a quem morre lutando: não se chega lá desistindo. Ou seja, o refrão deseja um destino que a frase da abertura — "sei que tu vai desistir" — justamente exclui. É a tensão central da música, e ela nunca é resolvida.' }
        ]
      },

      {
        rotulo: 'Açúcar: o que se encontra',
        estrofes: [5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A mesma estrutura, sinal trocado',
            texto: 'A segunda metade repete a forma da primeira trocando o ingrediente. A música não muda de assunto nem de método — muda o que está sendo posto na xícara.' },
          { linhas: [1, 1], cor: 1, titulo: 'Amizades de verdade',
            texto: 'O primeiro item doce responde diretamente ao primeiro item amargo: lá era sorriso falso e aperto de mão, aqui é amizade que se encontra. As duas listas são espelho uma da outra, item por item.' },
          { linhas: [2, 2], cor: 1, titulo: 'Lugares que prendem',
            texto: 'Ele usa um verbo de prisão para descrever coisa boa. Na música inteira ele quer sumir; este é o único momento em que ficar preso em algum lugar aparece como desejável.' },
          { linhas: [3, 3], cor: 2, titulo: '"Como amar"',
            texto: 'O fecho da lista doce ocupa exatamente o lugar que o limão ocupava na amarga. E o trocadilho continua de pé: serve como comparação e como ação, na mesma palavra.' }
        ]
      },

      {
        rotulo: 'Açúcar: o que se sonha',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Sonho lúcido',
            texto: 'É o sonho em que a pessoa percebe que está sonhando e passa a controlar o que acontece — e voar costuma ser a primeira coisa que se tenta. Ou seja, o item mais doce da lista é algo que só existe dormindo.' },
          { linhas: [2, 2], cor: 1, titulo: 'Mais rápido que a luz',
            texto: 'Nada pode ser mais rápido que a luz, e é justamente por isso que a imagem está no trecho do sonho. Ele escolheu como melhor coisa possível uma que a realidade não permite.' },
          { linhas: [3, 3], cor: 2, titulo: 'Repare no plural',
            texto: 'Em toda a lista doce ele fala do que a outra pessoa pode encontrar. Só aqui, dentro do sonho, aparece um "nós" — os dois juntos existem no único item que não é real.' }
        ]
      },

      {
        rotulo: 'O fecho',
        estrofes: [8],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'As mesmas palavras, outro peso',
            texto: 'Os três versos voltam idênticos pela terceira vez, mas agora as duas listas já foram apresentadas. "Pagando pra ver" deixa de soar como provocação e vira o argumento da música: existe o amargo e existe o doce, os dois ao mesmo tempo.' },
          { linhas: [2, 2], cor: 1, titulo: 'O horário fica de pé',
            texto: 'A música termina no convite, sem dizer se a pessoa foi ou ficou. O que sobra é só o compromisso marcado — e é a única coisa na letra inteira que depende das duas pessoas, não de uma.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'manual-do-suicidio-pt2',
    titulo: 'Manual do Suicídio Pt.2',
    epigrafe: 'A continuação, e o que mudou entre as duas',
    estrofesEsperadas: 6,
    contexto:
      'Continuação direta da Parte 1, e as duas se encaixam: o mesmo remédio é citado, a estrofe da ' +
      'madrugada volta igual, e o título — que na Parte 1 era um livro que ele ainda escreveria — ' +
      'aqui já é um objeto que existe. A letra é relato direto, sem metáfora: internação, ' +
      'automutilação, tentativa, e a informação de que ele está se segurando enquanto grava. No meio ' +
      'dela há uma virada inesperada, em que ele para de falar de si e passa a dar conselho a quem ' +
      'ouve. As notas à direita explicam, de forma literal, o que cada trecho diz e quem são as ' +
      'referências. Se o assunto tocar você de perto: o CVV atende de graça pelo 188, 24 horas por dia.',

    trechos: [
      {
        rotulo: 'A mentira',
        estrofes: [0],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Mentir para ser acolhido',
            texto: 'Ele abre a música admitindo que mentiu, e dá o motivo: queria ver se alguém viria. Não é mentira para enganar — é teste. O que ele estava medindo era a reação das pessoas, não o que elas acreditariam.' },
          { linhas: [2, 3], cor: 1, titulo: 'A mentira virou verdade',
            texto: 'É a informação mais grave do trecho, e está dita em dois versos: inventou que sofria e passou a sofrer de fato. O remédio citado é o mesmo da Parte 1, o que amarra as duas músicas e marca a diferença — agora existe tratamento, não invenção.' }
        ]
      },

      {
        rotulo: 'A internação',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Internado, e ninguém sabia',
            texto: 'Duas informações contraditórias coladas: a internação é o ponto mais grave de um quadro, e ainda assim as pessoas próximas não souberam. Retoma o assunto da estrofe anterior por outro lado — lá ele mentia sobre sofrer, aqui ele esconde que sofreu.' },
          { linhas: [2, 2], cor: 1, titulo: '"Dead" cravado na pele',
            texto: 'Tatuagem: ele escolheu deixar a palavra permanentemente visível. É o oposto exato do que fez com a internação, e mostra que o problema não é falar — é ser levado a sério.' },
          { linhas: [3, 3], cor: 2, titulo: 'A oferta de prova',
            texto: 'Ele se propõe a mandar foto para comprovar. É a frase de quem já não foi acreditado antes, e liga direto com a mentira admitida na estrofe de abertura: depois de mentir uma vez, ele precisa provar tudo o que diz.' }
        ]
      },

      {
        rotulo: 'O que impediu',
        estrofes: [2],
        versos: [0, 3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Relato, não metáfora',
            texto: 'Os dois versos falam de automutilação e de tentativa de suicídio sem nenhuma imagem poética em volta. A letra escolhe o registro de relato — é a mesma decisão que a Parte 1 tomou ao citar o remédio pelo nome.' },
          { linhas: [2, 2], cor: 1, titulo: 'O motivo é sobre outras pessoas',
            texto: 'O que segurou não foi esperança nem melhora: foi não querer deixar os pais naquela situação. O único freio que a música registra vem de fora dele.' },
          { linhas: [3, 3], cor: 2, titulo: '"Eu juro que eu tento"',
            texto: 'A palavra que encerra a Parte 1 — fracasso — reaparece aqui, mas com uma emenda que lá não existia. Na Parte 1 a frase terminava na sentença; aqui vem seguida de uma defesa. É a primeira diferença real entre as duas músicas.' }
        ]
      },

      {
        rotulo: 'As saídas',
        estrofes: [2],
        versos: [4, 7],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Voltar a fumar"',
            texto: 'O verbo indica que ele já tinha parado: é recaída sendo considerada, não hábito em curso. E vem colada à bebida — as duas apresentadas como alívio disponível, não como prazer.' },
          { linhas: [2, 2], cor: 1, titulo: 'Gritar até machucar',
            texto: 'É a imagem mais física do trecho, e o que ela descreve é vontade de extravasar, não de morrer. Chama atenção por estar no meio de uma lista em que todos os outros itens são fuga.' },
          { linhas: [3, 3], cor: 2, titulo: 'A conclusão que ele tira',
            texto: 'A frase que fecha a lista transforma tudo o que veio antes numa afirmação sobre o próprio caráter. É esse salto — de comportamento para essência — que os quatro versos seguintes vão tentar examinar.' }
        ]
      },

      {
        rotulo: 'As duas hipóteses',
        estrofes: [2],
        versos: [8, 11],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A primeira: defesa',
            texto: 'Ele levanta que repete o comportamento como proteção, por já ter passado pela mesma coisa antes. É uma explicação que o coloca como quem reage a algo — e é a mais generosa das duas.' },
          { linhas: [2, 3], cor: 1, titulo: 'A segunda: falta de vergonha',
            texto: 'A alternativa é bem mais dura, e o efeito apontado é arrastar os outros junto. Repare que ele apresenta as duas sem escolher: a estrofe é uma pergunta, não um veredito. E guarde a palavra "poço" — ela volta adiante, quando ele falar da própria música.' }
        ]
      },

      {
        rotulo: 'O brinde',
        estrofes: [2],
        versos: [12, 15],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Erguer a garrafa',
            texto: 'Brinde é gesto de comemoração, usado aqui para celebrar a própria desgraça. É a mesma inversão que fecha "Ave Expurgo", nesta apresentação: uma cerimônia coletiva aplicada a algo que não se comemora.' },
          { linhas: [2, 3], cor: 1, titulo: 'A música vira conselho',
            texto: 'Aqui a letra muda de direção sem aviso: ele para de falar de si e passa a instruir quem ouve. É a primeira vez em duas partes que a música se dirige ao ouvinte para orientá-lo, e não para desabafar.' }
        ]
      },

      {
        rotulo: 'O conselho',
        estrofes: [2],
        versos: [16, 20],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Não espere intervenção divina"',
            texto: 'O conselho é o oposto do que se esperaria de alguém no estado descrito: ele manda não aguardar salvação e agir. E repete a expressão inteira duas vezes seguidas, que é a forma de sublinhar em letra falada.' },
          { linhas: [2, 2], cor: 1, titulo: 'O custo de esperar',
            texto: 'A consequência apontada é tempo passando sem nada feito. É a mesma ideia do relógio parado da Parte 1, agora dita como aviso para outra pessoa em vez de queixa sobre si.' },
          { linhas: [3, 4], cor: 2, titulo: 'O quadro que fecha o aviso',
            texto: 'O exemplo termina em cocaína e em alguém pensando em se jogar de uma sacada. Ele está descrevendo o destino que quer evitar para quem ouve — e a descrição é próxima demais para não ser também sobre ele.' }
        ]
      },

      {
        rotulo: 'O diálogo previsto',
        estrofes: [3],
        versos: [0, 6],
        notas: [
          { linhas: [0, 3], cor: 0, titulo: 'A conversa inteira, antes de acontecer',
            texto: 'Ele encena pergunta, resposta, desmentido e admissão. Já sabe que vai mentir e já sabe que a mentira será percebida — o que torna a troca inútil dos dois lados, e é justamente esse o retrato que ele quer fazer.' },
          { linhas: [4, 4], cor: 1, titulo: '"Sadsong"',
            texto: 'Termo usado para música triste feita como estilo, como produto. Ele nega estar fazendo isso, e a distinção que faz não é de tema: é de intenção.' },
          { linhas: [5, 6], cor: 2, titulo: '"Levo isso a sério"',
            texto: 'O que ele aponta como problema é exatamente não estar performando. É a frase que separa esta música do gênero com que ela pode ser confundida — e explica a autocrítica técnica que aparece na Parte 1.' }
        ]
      },

      {
        rotulo: 'O contraste',
        estrofes: [3],
        versos: [7, 12],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'A frase quebrada em três',
            texto: 'O relato de automutilação vem partido em três linhas curtas. O corte isola cada parte e produz o efeito de quem conta aos poucos, verificando se pode continuar.' },
          { linhas: [3, 4], cor: 1, titulo: 'Quem consegue dançar assim mesmo',
            texto: 'Ele compara com quem sente a mesma coisa e ainda assim se diverte. Não é acusação: é constatação de uma diferença de funcionamento — os outros seguem por fora, e ele não consegue.' },
          { linhas: [5, 5], cor: 2, titulo: 'A pergunta sem resposta',
            texto: 'A sequência "tento, desisto" é o mesmo ciclo do "construo e destruo" que abre a Parte 1. E o trecho termina numa pergunta direta que a música não responde em nenhum momento.' }
        ]
      },

      {
        rotulo: 'A gravação',
        estrofes: [3],
        versos: [13, 18],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Nem perde tempo com essa"',
            texto: 'Ele pede que não ouçam a própria música. É continuação direta da gaveta da Parte 1: nas duas, a música é tratada como coisa que talvez não devesse estar circulando.' },
          { linhas: [1, 2], cor: 1, titulo: 'Ele narra o próprio momento',
            texto: 'Dizer que está se segurando e que segura o choro desde o começo muda o tempo verbal da música: ela deixa de contar uma lembrança e passa a descrever o instante em que está sendo gravada.' },
          { linhas: [3, 4], cor: 1, titulo: 'O "poço" volta',
            texto: 'A palavra reaparece — antes era arrastar os outros para o poço, agora é a própria música indo para lá. E ele pede desculpa e conta quantas vezes precisou regravar: é o registro do trabalho dando errado enquanto acontece.' },
          { linhas: [5, 5], cor: 2, titulo: 'Jogar no ventilador',
            texto: 'A expressão descreve espalhar sujeira para todos os lados de uma vez, sem controle de onde cai. É o que ele diz estar fazendo com os próprios problemas ao publicar a música.' }
        ]
      },

      {
        rotulo: 'O filme de terror',
        estrofes: [3],
        versos: [19, 23],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Protagonista, não vilão',
            texto: 'Em filme de terror o protagonista é quem foge, não quem ameaça. Ao se colocar nesse papel, ele define a si mesmo como vítima da própria cabeça — e não como o perigo.' },
          { linhas: [1, 1], cor: 1, titulo: 'Jason',
            texto: 'Jason Voorhees, o assassino mascarado da série "Sexta-Feira 13". Dizer que o assassino não é ele e mesmo assim se esconder é dizer que a ameaça é interna: não há de quem se esconder, e o esconderijo acontece do mesmo jeito.' },
          { linhas: [2, 3], cor: 1, titulo: 'Freddy Krueger',
            texto: 'O assassino de "A Hora do Pesadelo", que ataca as pessoas dentro dos sonhos. A inversão é o ponto da piada: o sonho dele é pior do que o pesadelo do especialista em pesadelos.' },
          { linhas: [4, 4], cor: 2, titulo: 'O título vira objeto',
            texto: 'É a segunda vez que o nome da música aparece dentro dela. Na Parte 1 era um livro que ele ainda escreveria; aqui já é uma coisa que existe, que está escrita e que faz mal a quem lê.' }
        ]
      },

      {
        rotulo: 'O extremo',
        estrofes: [3],
        versos: [24, 25],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Quem vive o que eu vivo"',
            texto: 'Pela primeira vez ele generaliza: deixa de falar só de si e fala de um grupo de pessoas. Em duas partes de música, tudo tinha sido dito em primeira pessoa isolada até aqui.' },
          { linhas: [1, 1], cor: 1, titulo: 'A frase mais direta das duas partes',
            texto: 'Vem logo depois da generalização, funcionando como o extremo daquilo que ele acabou de descrever, e não é comentada por nenhum verso seguinte. Repare em "qualquer dia": não há data nem plano — a indefinição aproxima a frase de um desabafo, não de um anúncio.' }
        ]
      },

      {
        rotulo: 'A madrugada, de novo',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A estrofe volta da Parte 1',
            texto: 'É o mesmo bloco da primeira música, repetido aqui. Se as duas partes forem apresentadas em sequência, este é o ponto em que elas se revelam como uma coisa só.' },
          { linhas: [1, 5], cor: 1, titulo: 'Sete vezes outra vez',
            texto: 'A repetição continua imitando a caminhada: o mesmo passo, sem destino, sem variação entre uma linha e outra.' },
          { linhas: [6, 6], cor: 2, titulo: 'A única diferença',
            texto: 'Na Parte 1 a última repetição era cortada no meio, e a frase não chegava ao fim. Aqui ela vem inteira. É a única alteração entre as duas versões do bloco — e ela acontece logo antes da estrofe final.' }
        ]
      },

      {
        rotulo: 'A saída',
        estrofes: [5],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Pela primeira vez, o futuro',
            texto: 'Depois de duas partes inteiras contando o que já fez, ele diz o que vai fazer. E o destino é indefinido de propósito — seguir a lua não é ir a lugar nenhum específico, é só não ficar.' },
          { linhas: [3, 4], cor: 1, titulo: 'Lembranças para levar',
            texto: 'Ele pede lugares bonitos, mas o motivo é o que pesa: quer boas lembranças para o momento de fechar os olhos. As lembranças não são para guardar — são para levar.' },
          { linhas: [5, 5], cor: 2, titulo: 'A única imagem não literal',
            texto: 'Depois de duas músicas de relato direto, com nome de remédio e descrição de ferimento, o fecho é a coisa mais suave da letra inteira. O contraste entre o modo de dizer e o que está sendo dito é o recado final.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'moby-dick',
    titulo: 'Moby Dick',
    epigrafe: 'Dois naufrágios famosos, os dois invertidos',
    estrofesEsperadas: 21,
    contexto:
      'A letra se apoia em duas referências marítimas que se completam: o Titanic, o navio anunciado ' +
      'como inafundável que afundou na viagem inaugural, e Moby Dick, a baleia branca do romance de ' +
      'Herman Melville (1851). As duas aparecem invertidas — o barco afunda por dentro, e não por um ' +
      'obstáculo externo; e a baleia, que no livro é caçada e mata quem a caça, aqui vem por conta ' +
      'própria e vem como alívio. A estrutura também conta: o corpo inteiro da música se repete duas ' +
      'vezes e só a última estrofe é nova, o que faz dela o único ponto aonde a letra chega. As notas ' +
      'à direita explicam, de forma literal, o que cada trecho diz. O CVV atende de graça pelo 188.',

    trechos: [
      {
        rotulo: 'O Titanic',
        estrofes: [0],
        repeticao: 'Toda esta parte da música se repete uma vez, do início ao fim',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Por que justamente o Titanic',
            texto: 'O Titanic foi anunciado como inafundável e afundou na viagem inaugural, em 1912. Escolher exatamente ele como imagem de algo que não vai naufragar é escolher o exemplo mais conhecido de promessa quebrada: o fim da música já está dado no primeiro verso.' },
          { linhas: [1, 2], cor: 1, titulo: 'A promessa é para si mesmo',
            texto: 'Não há mais ninguém na frase. Ele promete, ele é o barco e é o único que vai cobrar — o que já descarta qualquer ajuda de fora antes de a história começar.' }
        ]
      },

      {
        rotulo: 'O naufrágio',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Não em um iceberg"',
            texto: 'Ele nega a causa histórica para dar outra. O Titanic afundou por um obstáculo externo e acidental; o dele afundou por dentro. A estrofe existe justamente para marcar essa diferença.' },
          { linhas: [2, 3], cor: 1, titulo: 'Ódio e rancor',
            texto: 'Os dois substantivos supõem um alvo: rancor é sempre de alguma coisa ou de alguém. A letra nunca diz de quem — é a única informação que ela guarda para si.' },
          { linhas: [4, 4], cor: 2, titulo: 'Levado para o mar',
            texto: 'Repare na direção. Quem naufraga afunda; ele diz que foi levado para o mar, ou seja, para o aberto. E é justamente o mar que traz a baleia na estrofe seguinte.' }
        ]
      },

      {
        rotulo: 'A baleia',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Moby Dick',
            texto: 'A baleia branca do romance de Herman Melville, de 1851, perseguida obsessivamente pelo capitão Ahab — que morre na perseguição. É o livro mais conhecido sobre um homem destruído por aquilo que decidiu caçar.' },
          { linhas: [1, 1], cor: 1, titulo: 'A inversão',
            texto: 'No livro o homem caça a baleia e ela o mata. Aqui é ela que vem até ele, sem ter sido procurada. Ele não é Ahab: está parado na água, esperando — o que muda completamente quem tem vontade na cena.' },
          { linhas: [2, 3], cor: 2, titulo: '"Abraçar" e "livrar"',
            texto: 'Os dois verbos são de acolhimento, não de ataque. A letra diz com clareza que a morte aparece como alívio, e ela é a única coisa da música inteira que vem na direção dele para ajudar.' }
        ]
      },

      {
        rotulo: 'A água fria',
        estrofes: [3],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A água continua ali',
            texto: 'A mesma água que o afogou é da qual ele quer se livrar. O pedido do trecho não é sair do naufrágio: é sair do que veio depois dele.' },
          { linhas: [1, 1], cor: 1, titulo: '"Apelido ela de vida"',
            texto: 'Apelido é o nome informal, o que não é o nome verdadeiro. Ele está dizendo que chama aquilo de vida por falta de palavra melhor — e não porque considere que seja.' },
          { linhas: [2, 2], cor: 2, titulo: '"Meu lá"',
            texto: 'O destino não tem nome. Depois de duas referências precisas — um navio e um romance —, o lugar aonde ele quer chegar é indicado apenas por um advérbio. A vagueza é o conteúdo: ele sabe que quer sair, não sabe para onde.' }
        ]
      },

      {
        rotulo: 'A caminhada',
        estrofes: [4],
        repeticao: 'O bloco vem 4x seguidas, e outras 4x quando a música se repete',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Seis palavras, nenhum verbo',
            texto: 'As duas linhas são listas de sensações, sem ação nenhuma. A primeira é o que vem de fora: chuva, trovão, a roupa molhada.' },
          { linhas: [1, 1], cor: 1, titulo: 'E agora o corpo',
            texto: 'A segunda linha entra no corpo: calo, cansaço, pé descalço. Juntas, as duas descrevem alguém andando muito tempo na chuva sem sapato — e a caminhada aparece também nas duas partes de "Manual do Suicídio", nesta apresentação.' },
          { alvo: 'repeticao', cor: 2, titulo: 'Oito vezes ao todo',
            texto: 'Nada muda entre uma repetição e outra. Como não há verbo nenhum nas duas linhas, é a repetição que faz o trabalho que um verbo faria: ela é o que mostra que a caminhada continua.' }
        ]
      },

      {
        rotulo: 'O pesadelo',
        estrofes: [8],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'A primeira pergunta',
            texto: 'É a primeira vez que a música fala com alguém. E o que ela pergunta é se a outra pessoa também já passou por isso — a estratégia é buscar reconhecimento, não explicar o que sente.' },
          { linhas: [3, 4], cor: 1, titulo: 'O corpo que pesa',
            texto: 'É o pesadelo em que a pessoa tenta correr e não sai do lugar. A mesma imagem aparece em "Manual do Suicídio Pt.1", e aqui ela ganha um chão: lama, que é o que prende de verdade.' },
          { linhas: [5, 6], cor: 2, titulo: 'O verso mais ambíguo',
            texto: '"Jogar seu corpo inteiro" pode ser se entregar por completo a alguma coisa, ou pode ser literal — a música não resolve. E repare no que ele nomeia como medo: não é medo de falhar, é medo de estar sempre tentando.' }
        ]
      },

      {
        rotulo: 'A repetição, com uma diferença',
        estrofes: [9],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O pedido some',
            texto: 'A estrofe volta quase igual, mas sem o "me diga" do começo. A pergunta deixa de ser pedido e vira constatação: ele não está mais esperando resposta de ninguém.' },
          { linhas: [1, 6], cor: 1, titulo: 'O resto vem idêntico',
            texto: 'Nada mais muda. É o mesmo recurso do bloco da chuva — repetir sem variação para que a única alteração fique visível sozinha.' },
          { linhas: [7, 7], cor: 2, titulo: 'A palavra que sobra',
            texto: 'A estrofe termina com uma palavra isolada, repetida da linha anterior. Num trecho que fala de um corpo que não consegue se mover por completo, o que fica ecoando é justamente "inteiro".' }
        ]
      },

      {
        rotulo: 'O fecho',
        estrofes: [20],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A única estrofe nova',
            texto: 'A música inteira se repete duas vezes e só esta parte não volta. É o único ponto aonde a letra chega depois de dar duas voltas — o que faz dela a conclusão, por eliminação.' },
          { linhas: [1, 1], cor: 1, titulo: 'O relógio',
            texto: 'Perguntar se o relógio ainda roda é perguntar se o tempo ainda está passando. A mesma imagem aparece em "Manual do Suicídio Pt.1", no relógio parado contra o qual ele dizia correr.' },
          { linhas: [2, 3], cor: 1, titulo: 'De onde veio a dor',
            texto: 'A alternativa que ele levanta é que nada aconteceu: foi o próprio pensamento que trouxe a dor de volta. É a explicação mais desconfortável das duas, porque tira a causa de fora e não deixa o que resolver.' },
          { linhas: [4, 4], cor: 2, titulo: '"Sempre"',
            texto: 'A última palavra do verso final não fala de intensidade, fala de duração. A música termina dizendo que a dor não passa — não que ela é grande. E é isso que justifica a estrutura em círculo do resto da letra.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'chale-em-alaska',
    titulo: 'Chalé em Alaska',
    epigrafe: 'Um plano de futuro, montado item por item',
    estrofesEsperadas: 7,
    contexto:
      'É a música mais leve do conjunto e a única em que tudo é plano, não lembrança. A situação vem ' +
      'no primeiro verso: os dois ainda não se encontraram pessoalmente — só em sonho — e a promessa ' +
      'é justamente essa. O centro da letra é uma lista de oito casais da ficção e da história, de ' +
      'Bonnie e Clyde a personagens de jogos e de anime, em que ele distribui os papéis entre os ' +
      'dois. Repare em duas coisas nessa lista: quem vem primeiro na frase muda no meio dela, e boa ' +
      'parte desses casais não termina bem. As notas à direita explicam quem é cada par e o que cada ' +
      'trecho diz.',

    trechos: [
      {
        rotulo: 'A promessa',
        estrofes: [0],
        repeticao: 'A estrofe volta no fim da música, com um verso a menos',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Só se encontraram em sonho',
            texto: 'O primeiro verso já dá a situação da música inteira: os dois não se conhecem pessoalmente. Tudo o que vier depois é plano, e não lembrança — o que explica por que a letra é toda no futuro.' },
          { linhas: [2, 2], cor: 1, titulo: '"Frente a frente"',
            texto: 'A promessa não é dizer, é dizer pessoalmente. O que falta entre os dois não é a declaração — ela já está sendo feita na própria música. O que falta é a presença.' },
          { linhas: [3, 4], cor: 2, titulo: 'Dito duas vezes',
            texto: 'A frase se repete para fechar a estrofe. Guarde esse detalhe: quando esta mesma estrofe voltar no encerramento da música, ela vem com uma repetição a menos.' }
        ]
      },

      {
        rotulo: 'O chalé',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Mais nada" — e já dois porquinhos',
            texto: 'O plano começa excluindo o mundo inteiro e, no verso seguinte, já tem inventário. É a primeira pista do método da música: ele não descreve o amor, ele monta a casa.' },
          { linhas: [2, 2], cor: 1, titulo: 'Um chalé no Alaska',
            texto: 'O Alaska é um dos lugares menos povoados dos Estados Unidos, de frio extremo e céu limpo. A escolha combina com o verso anterior: o que está sendo pedido é o isolamento, e a paisagem vem junto.' },
          { linhas: [3, 4], cor: 1, titulo: 'A galáxia pelo teto',
            texto: 'Ele especifica de onde se olha: do quarto. Todo o plano é feito de detalhes de dentro de casa, e é isso que o separa de um sonho genérico — dá para desenhar a planta.' },
          { linhas: [5, 6], cor: 2, titulo: 'Os cães e a trilha sonora',
            texto: 'O São Bernardo é justamente o cão de resgate na neve, e o Pug é o oposto dele em tamanho — os dois escolhidos a dedo. E "dark country" é o ramo mais sombrio do country: a única coisa pesada dentro de um cenário inteiramente doce.' }
        ]
      },

      {
        rotulo: 'O cotidiano',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Minha gata"',
            texto: 'Repare no possessivo: o gato já é dele. Parte do plano, portanto, está no presente — nem tudo ali é imaginação, tem coisa que só falta ser levada para a casa nova.' },
          { linhas: [1, 1], cor: 1, titulo: 'Netflix e série nova',
            texto: 'O detalhe mais comum possível, e está ali de propósito. O que ele está pedindo não é luxo nem aventura: é rotina — o oposto do que se pede numa música de amor à distância.' },
          { linhas: [2, 3], cor: 2, titulo: 'O frio serve para isso',
            texto: 'Geada e neve na porta fecham a estrofe. Em toda a letra o frio nunca aparece como ameaça: ele é o que dá valor a estar dentro, e por isso o lugar escolhido tinha que ser gelado.' }
        ]
      },

      {
        rotulo: '"Meu bem"',
        estrofes: [3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O que ele quer ver',
            texto: 'O pedido não é ser amado: é ver a reação dela. O que a frase descreve é o rosto da outra pessoa no momento da declaração, não o sentimento de quem declara.' },
          { linhas: [2, 2], cor: 1, titulo: '"E tu também"',
            texto: 'A frase só se completa com a resposta dela. É a primeira vez na música que o plano depende de confirmação — até aqui, tudo tinha sido decidido sozinho.' },
          { linhas: [3, 3], cor: 2, titulo: 'O eco entre parênteses',
            texto: 'A palavra volta seis vezes como vocal de fundo. Está entre parênteses justamente porque não é verso: é o coro repetindo o apelido, e por isso não acrescenta informação nenhuma.' }
        ]
      },

      {
        rotulo: 'A fuga',
        estrofes: [4],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Arrancar"',
            texto: 'O verbo é violento para um gesto de carinho: arranca-se o que está preso. Ele trata a tristeza dela como coisa física, que dá para tirar com a mão. E vale notar a inversão em relação às outras músicas desta apresentação — aqui a tristeza é da outra pessoa.' },
          { linhas: [2, 2], cor: 1, titulo: '"Vamos fugir"',
            texto: 'Fugir supõe que existe algo de que escapar, e a letra nunca diz o quê. O verso serve de ponte: a estrofe seguinte abre justamente com o casal de fugitivos mais famoso que existe.' }
        ]
      },

      {
        rotulo: 'Os oito casais',
        estrofes: [5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Bonnie e Clyde',
            texto: 'O casal de assaltantes americanos dos anos 1930, mortos juntos numa emboscada em 1934. É o par mais literal em relação ao verso anterior — dois que fugiram juntos — e já dá o tom de uma lista em que boa parte dos casais não acaba bem.' },
          { linhas: [1, 2], cor: 1, titulo: 'Dos jogos e dos livros',
            texto: 'Leon Kennedy e Ada Wong são de Resident Evil: uma relação que nunca se resolve, porque ela ajuda e desaparece. Rony e Hermione, de Harry Potter, são o oposto — ficam juntos depois de anos de convivência.' },
          { linhas: [3, 4], cor: 1, titulo: 'Do cinema',
            texto: 'Sandy e Danny são de Grease (1978), o casal em que cada um muda de estilo pelo outro. Rose e Jack são de Titanic (1997), em que ele morre e ela sobrevive — e o mesmo navio aparece em "Moby Dick", nesta apresentação, com sentido bem diferente.' },
          { linhas: [5, 6], cor: 2, titulo: 'Do anime e dos jogos de luta',
            texto: 'Mary e Terry são de Fatal Fury. Keiko e Yusuke são de Yu Yu Hakusho, e ela é justamente a que espera enquanto ele morre e volta — o que rima com a situação da música, em que alguém está esperando o encontro.' },
          { linhas: [7, 7], cor: 0, titulo: 'O último par, sem pronome',
            texto: 'A lista inteira distribui papéis com "eu" e "você", e a ordem inverte no meio dela: começa com ele na frente e passa a ela. No último verso os dois pronomes somem e ficam só os dois nomes lado a lado — que é exatamente o que a música está pedindo. Andy Bogard é irmão do Terry citado dois versos antes.' }
        ]
      },

      {
        rotulo: 'O fecho',
        estrofes: [6],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'De volta ao começo',
            texto: 'A estrofe de abertura retorna quase inteira. Depois de todo o plano — a casa, os bichos, os oito casais —, a música termina exatamente onde começou: nos dois ainda não tendo se encontrado.' },
          { linhas: [3, 3], cor: 1, titulo: 'O verso que sumiu',
            texto: 'Na abertura a declaração aparecia duas vezes; aqui, só uma. É a única diferença entre as duas estrofes, e o efeito é deixar a frase sozinha no fim — sem eco, sem repetição e sem nada depois dela.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'chamas-da-vida',
    titulo: 'Chamas da Vida',
    epigrafe: 'Uma acusação dirigida a alguém que nunca é nomeado',
    estrofesEsperadas: 7,
    contexto:
      'A música inteira é dirigida a alguém que a letra nunca identifica. As características dadas — ' +
      'espada sempre suja de sangue, cinzas no rosto, corpo em brasa, um dedo que aponta almas e ' +
      'olhos que enxergam no escuro — apontam para uma figura de guerra ou de morte, não para uma ' +
      'pessoa comum. O refrão pede que ela apague as chamas da vida, o que é estranho por dois ' +
      'motivos: quem pede está vivo, e quem recebe o pedido é feito de fogo. E há uma virada no fim: ' +
      'até a metade a letra diz "lembra", cobrando o outro; nas duas últimas estrofes diz "lembro", e ' +
      'é aí que a figura aparece fraca e ajoelhada. As notas à direita explicam, de forma literal, o ' +
      'que cada trecho diz.',

    trechos: [
      {
        rotulo: 'A matilha',
        estrofes: [0],
        versos: [0, 3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Dor fantasma',
            texto: 'Dor fantasma é o nome do que se sente num membro amputado: dói o que não está mais lá. Aplicada à alma, a expressão diz que a dor vem de uma falta, não de um ferimento — não há o que tratar.' },
          { linhas: [2, 3], cor: 1, titulo: 'Os lobos com fome',
            texto: 'Ele vigia junto com a matilha, e os lobos estão morrendo de anemia — falta de sangue — porque a refeição depende dele. O trecho estabelece que ele alimenta os predadores antes de dizer o que ele próprio faz.' }
        ]
      },

      {
        rotulo: 'A espada e as cinzas',
        estrofes: [0],
        versos: [4, 8],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Sangue de ovelha',
            texto: 'Ovelha é a imagem clássica do indefeso, do rebanho. Espada suja de sangue de ovelha não é espada de batalha: é de abate. A letra escolhe de propósito a vítima mais frágil possível.' },
          { linhas: [2, 2], cor: 1, titulo: '"Não te causa aflição"',
            texto: 'O verso mais importante do trecho não fala do que ele faz, e sim do que ele não sente. A acusação da música não é a violência — é a indiferença que vem junto.' },
          { linhas: [3, 4], cor: 2, titulo: 'Cinzas e terra devastada',
            texto: 'As cinzas no rosto vêm de um lugar que ele queimou: ele carrega a prova consigo. E o motivo dado é "necessidade" — destruir aparece como coisa que ele precisa fazer, não como coisa que escolhe.' }
        ]
      },

      {
        rotulo: 'O refrão',
        estrofes: [1],
        repeticao: 'O refrão volta 2x seguidas na segunda metade',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Apaga as chamas da vida"',
            texto: 'Chama da vida é imagem antiga para aquilo que mantém alguém vivo. Pedir que sejam apagadas é pedir o fim — e repare em quem pede: alguém vivo, dirigindo o pedido a quem tem poder para atendê-lo.' },
          { linhas: [1, 1], cor: 1, titulo: 'A saída dos mortos',
            texto: 'A segunda linha inverte a lógica: quem está preso são os mortos, e o que os libertaria é o fim dos vivos. É a frase mais estranha da música, e é dela que a última estrofe vai sair.' }
        ]
      },

      {
        rotulo: 'A era dos corvos',
        estrofes: [2],
        versos: [0, 3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Lembra"',
            texto: 'Ele passa a cobrar memória. Daqui em diante a música vira uma lista de coisas que aconteceram, e o interlocutor é tratado como quem esteve lá — o que já indica que não se trata de alguém humano nem de algo recente.' },
          { linhas: [2, 3], cor: 1, titulo: 'Os corvos conduzindo',
            texto: 'Corvos acompanham campo de batalha e comem os mortos, e em várias tradições aparecem como guias de quem morreu. Aqui eles conduzem os vivos: gente sem luz para alcançar a redenção, ou seja, sem salvação possível.' }
        ]
      },

      {
        rotulo: 'O que selou',
        estrofes: [2],
        versos: [4, 7],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Agora com interrogação',
            texto: 'Na primeira vez a palavra vinha como ordem; aqui vem como pergunta. É uma diferença pequena e proposital — ele começou cobrando e agora está verificando se o outro ainda sabe do que se fala.' },
          { linhas: [2, 2], cor: 1, titulo: 'Luxúria, orgulho e ira',
            texto: 'Três dos sete pecados capitais, e os três escolhidos têm algo em comum: são todos excesso de si mesmo — desejo, vaidade e raiva. Ficaram de fora justamente os de omissão, como a preguiça.' },
          { linhas: [3, 3], cor: 2, titulo: '"Selar"',
            texto: 'Selar é fechar de forma definitiva, como se lacra um documento ou um túmulo. O coração dele não endureceu aos poucos: foi lacrado, e o verso diz exatamente com o quê.' }
        ]
      },

      {
        rotulo: 'A descrição',
        estrofes: [3],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A espada volta igual',
            texto: 'Os dois versos são repetidos da primeira parte, sem mudar nada. Funcionam como âncora: é a característica que a música considera principal, e ela retorna logo antes da descrição final.' },
          { linhas: [2, 2], cor: 1, titulo: 'Corpo de brasa',
            texto: 'Aqui aparece a contradição central da letra: pedem que ele apague as chamas da vida, e ele próprio é feito de fogo. Quem deveria apagar é justamente quem arde.' },
          { linhas: [3, 4], cor: 2, titulo: 'O dedo e os olhos',
            texto: 'Apontar almas é gesto de escolha — de quem seleciona quem vai. E enxergar além da escuridão significa que não há onde se esconder dele. Juntos, os dois versos descrevem uma função, não um sentimento.' }
        ]
      },

      {
        rotulo: 'A virada',
        estrofes: [5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Lembro", e não "lembra"',
            texto: 'É a virada da música. Ele para de cobrar a memória do outro e passa a lembrar sozinho — e o que lembra desmonta tudo o que veio antes: o corpo é fraco, e está ajoelhado.' },
          { linhas: [1, 1], cor: 1, titulo: 'Medo do Sol',
            texto: 'Esconder o Sol com medo de que ele volte a brilhar é ter medo do dia seguinte, da luz, do recomeço. A figura que apaga a vida dos outros tem medo justamente daquilo que renasce todo dia.' }
        ]
      },

      {
        rotulo: 'O Sol negro',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O Sol escurecido',
            texto: 'Sol apagado é imagem antiga de fim do mundo — aparece assim no Apocalipse, e é o que se vê num eclipse. Colocado logo depois do verso anterior, funciona como resposta ao medo: o Sol voltou, mas voltou sem luz.' },
          { linhas: [2, 3], cor: 1, titulo: 'Os mortos caminham',
            texto: 'É o efeito atribuído ao Sol negro, e é a resposta que faltava ao refrão: os mortos acharam a saída. Só que ninguém apagou nada — eles saíram porque o mundo acabou sozinho.' },
          { linhas: [4, 6], cor: 2, titulo: 'A palavra repetida',
            texto: 'O verbo volta quatro vezes e a música termina nele, sem nenhuma frase depois. Como em "Moby Dick" e nas duas partes de "Manual do Suicídio", nesta apresentação, é a repetição que faz o papel do movimento: enquanto a palavra volta, eles continuam andando.' }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: 'vermelho-vibrante',
    titulo: 'Vermelho Vibrante',
    epigrafe: 'Ele pediu para deixar de ter medo, e virou o medo',
    estrofesEsperadas: 13,
    contexto:
      'Quem narra diz ter vendido a alma em troca de desejos — e, nas duas vezes em que conta isso, ' +
      'o desejo revelado é o mesmo: deixar de sentir medo. A construção da frase decide o sentido da ' +
      'música e é fácil de ler errado. As estrofes seguintes não listam o que ele pediu para poder ' +
      'fazer: listam aquilo de que ele tinha medo — de sair à noite, de ser um cachorro negro, de ver ' +
      'isso no espelho, de ser o carrasco. Ele não pediu poder nenhum. Pediu para parar de recuar ' +
      'diante do que já estava dentro dele, e o resto da letra mostra no que isso deu. As duas listas ' +
      'de nomes são de assassinos em série e em massa reais, "perseguidor noturno" é a tradução do ' +
      'apelido de um deles, e a música termina não com a voz dele, mas com a da vítima. As notas à ' +
      'direita explicam, de forma literal, o que cada trecho diz — e, nas listas, o que dá para ' +
      'identificar com segurança e o que não dá.',

    trechos: [
      {
        rotulo: 'O pacto',
        estrofes: [0],
        repeticao: 'A estrofe volta na segunda metade, com uma palavra trocada',
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Vender a alma',
            texto: 'É a mesma transação que "Sinfonia do Inferno" conta por inteiro nesta apresentação. Aqui ela é resolvida num verso só, sem cena e sem encruzilhada — o que interessa à música não é o pacto, é o que foi pedido em troca.' },
          { linhas: [1, 2], cor: 1, titulo: 'Três desejos, e ele conta um',
            texto: 'A letra junta duas histórias diferentes: o pacto com o diabo e a lâmpada dos três desejos. E ele revela apenas um dos três. Isso se repete na segunda metade da música, com mais três — no fim, quatro dos seis nunca são ditos.' },
          { linhas: [3, 3], cor: 2, titulo: 'O que ele pediu',
            texto: 'Não é força, dinheiro nem poder. O pedido é para deixar de sentir uma coisa, e a coisa é o medo. Toda a música decorre disso: ele não ganhou nada, ele perdeu um freio.' }
        ]
      },

      {
        rotulo: 'O primeiro desejo',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A estrofe continua a frase anterior',
            texto: 'Estes quatro versos são complemento do "receio" da estrofe passada: receio de sair à noite, receio de ser um cachorro negro. Ele não está listando o que pediu para poder fazer — está listando aquilo de que tinha medo. E o primeiro item já entrega o assunto: o que o assustava era o que ele próprio faria.' },
          { linhas: [2, 2], cor: 1, titulo: 'O cachorro negro',
            texto: 'Em "Sinfonia do Inferno" os cães negros são o que persegue quem fez o pacto. Aqui o medo não é de encontrar um: é de ser um. O mesmo bicho das duas músicas, mudando de lugar — de perseguidor para reflexo.' },
          { linhas: [3, 3], cor: 2, titulo: 'O espelho fecha o sentido',
            texto: 'O que ele temia não era o monstro lá fora: era reconhecê-lo em si mesmo. E foi exatamente esse medo que ele pediu para tirar. Repare no que isso significa — o pacto não o transformou em nada; ele só removeu o que o impedia de agir como aquilo que já era.' }
        ]
      },

      {
        rotulo: 'A primeira lista',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"A sombra que te segue"',
            texto: 'A letra muda de interlocutor. Até aqui ele falava de si; agora avisa alguém para tomar cuidado — e quem dá o aviso é justamente a ameaça de que se deve cuidar.' },
          { linhas: [1, 1], cor: 1, titulo: '"Perseguidor noturno"',
            texto: 'É a tradução literal de Night Stalker, apelido dado a um assassino em série americano dos anos 1980. Ou seja, a expressão que apresenta a lista já é, ela própria, o nome de um dos nomes.' },
          { linhas: [2, 2], cor: 2, titulo: 'O que a lista é',
            texto: 'São assassinos em série e em massa reais. Onde aparece sobrenome dá para identificar com segurança — Andrei Chikatilo, Dennis Nilsen e o Jack de Jack, o Estripador. Os que vêm só de primeiro nome não permitem identificação certa, e isso não muda nada: o efeito pretendido é o acúmulo, não a biografia de cada um.' },
          { linhas: [3, 3], cor: 0, titulo: 'O nome fora do critério',
            texto: 'John Wayne Gacy foi condenado por dezenas de assassinatos nos Estados Unidos. Mas Billy the Kid não é assassino em série: é um fora da lei do velho oeste, morto aos 21 anos — e aparece em "6Balas", nesta mesma apresentação. É o único da lista que vem de outro tipo de história.' }
        ]
      },

      {
        rotulo: '"Pode gritar"',
        estrofes: [3],
        repeticao: 'O bloco vem 4x seguidas aqui, e outras 4x na segunda metade',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A posição muda de novo',
            texto: 'Agora ele não avisa nem se descreve: fala com alguém que já está preso. E a única informação que dá é que não haverá socorro — o aviso do trecho anterior deixou de servir para alguma coisa.' },
          { linhas: [2, 3], cor: 1, titulo: 'Oito vezes ao todo',
            texto: 'Os dois versos vêm quatro vezes seguidas aqui e quatro vezes de novo na segunda metade. A repetição é o que faz o tempo passar dentro da cena: não há mais nada a dizer, e é justamente esse o ponto.' }
        ]
      },

      {
        rotulo: 'O chão vermelho',
        estrofes: [5],
        repeticao: 'A estrofe volta na segunda metade e ainda se repete no fim',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O título, e "meu chão"',
            texto: '"Vermelho sangue vibrante" é uma descrição de cor, usada aqui para um chão sendo pintado — a letra não descreve o ato, descreve o resultado como se fosse tinta. E o possessivo importa: o chão é dele, então a cena acontece no espaço dele.' },
          { linhas: [2, 2], cor: 1, titulo: '"Me ajuda, Deus"',
            texto: 'A voz da vítima entra na música. É a única fala entre aspas da letra inteira, e o pedido é dirigido a Deus — não a ele, que é quem está presente e quem poderia parar.' },
          { linhas: [3, 3], cor: 2, titulo: '"Aos montes"',
            texto: 'A expressão indica quantidade. Aplicada ao próprio corpo de quem fala, diz que ele está em partes. É o verso mais gráfico da letra — e quem o diz é a pessoa a quem está acontecendo, não quem está fazendo.' }
        ]
      },

      {
        rotulo: 'O segundo pacto',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Mais 3 desejos"',
            texto: 'A estrofe de abertura volta com uma palavra a mais. Não são os mesmos três: são outros três, o que significa que ele voltou a negociar depois de já ter entregado a alma — e não se diz o que pagou da segunda vez.' },
          { linhas: [2, 3], cor: 1, titulo: 'O mesmo pedido, outra palavra',
            texto: 'Lá era receio, aqui é medo. Dos seis desejos que ele afirma ter pedido, os dois únicos revelados são a mesma coisa — o que sugere que a primeira vez não resolveu.' }
        ]
      },

      {
        rotulo: 'O segundo desejo',
        estrofes: [7],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'De novo, complemento do medo',
            texto: 'Mesma construção da primeira metade: a estrofe inteira é aquilo que ele tinha medo de ser — fantasma, carrasco, forasteiro. Os três são papéis de quem chega de fora, e carrasco é o único que supõe ordem cumprida: quem executa uma sentença decidida por outra pessoa.' },
          { linhas: [2, 3], cor: 1, titulo: 'Fogo e nevoeiro',
            texto: 'O fogo do inferno retoma o pacto do primeiro verso, e o nevoeiro é a chegada clássica do vilão em filme de terror. Mas o verbo continua sendo o mesmo: era disso que ele tinha medo. A música nunca diz que ele recebeu esses poderes — diz que ele parou de recuar diante deles.' }
        ]
      },

      {
        rotulo: 'A segunda lista',
        estrofes: [8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A mesma abertura',
            texto: 'O verso inicial volta igual ao da primeira lista. A estrutura é de refrão: o que se repete é o aviso, e o que varia é a enumeração que vem depois dele.' },
          { linhas: [1, 1], cor: 1, titulo: 'Manson e Speck',
            texto: 'Charles Manson liderou o grupo responsável por assassinatos na Califórnia em 1969; Richard Speck matou oito estudantes de enfermagem em Chicago, em 1966. São os dois nomes desta linha que dão para identificar com segurança.' },
          { linhas: [2, 2], cor: 1, titulo: 'Só o primeiro nome',
            texto: 'Esta linha traz nomes soltos, sem sobrenome que permita identificação segura. Vale o mesmo da primeira lista: a letra está atrás do acúmulo de nomes, não de quem é cada um.' },
          { linhas: [3, 3], cor: 2, titulo: 'Jim Jones fecha a lista',
            texto: 'Jim Jones liderou o culto responsável pela morte em massa de centenas de pessoas na Guiana, em 1978, e é o único da lista que não matou com as próprias mãos: convenceu. Joseph Kallinger, ao lado dele, é assassino em série condenado nos Estados Unidos. Terminar por Jones muda o tipo de ameaça que a lista descreve — de força para persuasão.' }
        ]
      }
    ]
  },

  {
    id: 'rainha-dos-bichos-da-floresta',
    titulo: 'Rainha dos Bichos da Floresta',
    epigrafe: 'Uma canção de ninar contada por cima de um corpo',
    estrofesEsperadas: 5,
    contexto:
      'A música tem duas camadas e a segunda só se fecha no último verso. Na superfície é uma cantiga ' +
      'de ninar para uma menina perdida no mato: alguém a acalma, manda ela dormir e a coroa rainha ' +
      'dos animais da floresta. Por baixo, as mesmas frases descrevem uma criança desaparecida que ' +
      'não foi encontrada viva — as sirenes tocam, ninguém responde, o corpo está frio e criando raiz ' +
      'na terra. A coroação não é recompensa: é o modo de dizer o que aconteceu sem dizer a palavra. ' +
      'As notas à direita mostram, verso a verso, onde a letra troca de camada e como o mesmo ' +
      'vocabulário serve às duas leituras.',

    trechos: [
      {
        rotulo: 'A cantiga',
        estrofes: [0],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Quem canta para quem',
            texto: 'O primeiro verso não fala com a menina, fala com a noite. E o segundo diz que a cantiga "vem sozinha": ninguém a está cantando de propósito. É uma abertura que já avisa que não há outra pessoa ali — o consolo não tem dono.' },
          { linhas: [2, 3], cor: 1, titulo: 'Perdida, dito sem rodeio',
            texto: 'Os dois versos dão o fato do começo ao fim: ela está com medo e não enxerga a saída. Tudo o que vem depois — a coroa, os bichos, a festa — é construído em cima desta situação, e não a resolve em nenhum momento.' }
        ]
      },

      {
        rotulo: 'Durma aqui',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: '"Nessa madeira antiga"',
            texto: 'Aqui a letra parece dizer tronco oco ou casa velha, e é assim que se lê na primeira vez. O verso final da música vai fechar essa madeira com uma tranca, e então ela passa a nomear outra coisa. É o único objeto concreto da letra inteira.' },
          { linhas: [2, 3], cor: 1, titulo: 'A Lua e o Sol',
            texto: 'A ordem está invertida: o Sol adormece depois de a Lua já estar brilhando. E o verbo usado para o Sol é o mesmo que se pede à menina no primeiro verso da estrofe — dormir. Os dois se apagam juntos.' }
        ]
      },

      {
        rotulo: 'A coroação',
        estrofes: [2],
        versos: [0, 2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Agora tu é a rainha"',
            texto: 'O "agora" marca uma mudança de estado: ela não era rainha e passou a ser. Nada na letra explica o que aconteceu entre uma coisa e outra, e é justamente esse intervalo que a música está evitando descrever.' },
          { linhas: [1, 1], cor: 1, titulo: 'Lobos e ursos',
            texto: 'São os dois animais que representariam o perigo de uma criança sozinha na mata. A letra os coloca em festa, ao lado dela, sem ameaça nenhuma — o risco deixou de existir, o que só é verdade se já não houver o que ameaçar.' },
          { linhas: [2, 2], cor: 2, titulo: 'Os micos trazem comida',
            texto: 'Imagem de conto de fadas: os bichos cuidam da criança perdida. É o ponto mais alto da camada de superfície, e a letra o sustenta por apenas três versos antes de virar.' }
        ]
      },

      {
        rotulo: 'A porra toda',
        estrofes: [2],
        versos: [3, 5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A palavra fora de lugar',
            texto: 'O verso repete a coroação, mas troca "dos bichos da floresta" por "da mata e a porra toda". O palavrão quebra o tom de cantiga de ninar de uma vez, e é a primeira evidência de que quem canta não acredita no que está cantando.' },
          { linhas: [1, 1], cor: 1, titulo: 'Uma coroa de galho',
            texto: 'A coroa não é de ouro nem foi dada por ninguém: os esquilos improvisam uma com o que há no chão. Vale para o título inteiro — o reino é o lugar onde ela ficou, e a realeza é o nome bonito dado a isso.' },
          { linhas: [2, 2], cor: 2, titulo: '"Tu fica linda"',
            texto: 'Elogio à aparência dela, parada, ao lado das raposas. O verbo está no presente e não descreve ação nenhuma — ela não brinca, não corre, não fala. Só está bonita, onde está.' }
        ]
      },

      {
        rotulo: 'As sirenes',
        estrofes: [3],
        versos: [0, 2],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'A pergunta muda tudo',
            texto: 'Até aqui a letra afirmava. Agora pergunta onde ela está e por que não grita — ou seja, quem canta não sabe onde ela está e não está sendo respondido. A cena da floresta era imaginada por alguém que a procura.' },
          { linhas: [2, 2], cor: 1, titulo: '"Sirenes tocam nesse dia"',
            texto: 'É o único elemento do mundo real na música inteira: viaturas, resgate, busca. E vêm "nesse dia" — a noite da cantiga já acabou, e o que a manhã trouxe não foi a menina de volta.' }
        ]
      },

      {
        rotulo: 'O corpo',
        estrofes: [3],
        versos: [3, 5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: '"Na terra enraiza"',
            texto: 'Enraizar é o que faz uma planta: fixar-se no chão e não sair mais. Aplicado a um corpo, é a maneira mais delicada de dizer que ele está no solo e que ali vai ficar. A palavra "morte" não aparece em nenhum verso da letra.' },
          { linhas: [1, 1], cor: 1, titulo: 'Os cachos continuam lindos',
            texto: 'O elogio da estrofe anterior volta, agora aplicado ao cabelo. É o mesmo tipo de carinho que uma família dedica a quem já não está, e a mesma leitura aparece em "Noiva Cadáver" nesta apresentação: descrever o corpo com ternura em vez de nomear o que houve.' },
          { linhas: [2, 2], cor: 2, titulo: '"Delicado e frio"',
            texto: 'Frio é o fato, e é a última coisa dita sobre ela. A palavra fecha a leitura da música toda: a rainha, a festa, a coroa e os bichos estavam sendo contados por cima disto.' }
        ]
      },

      {
        rotulo: 'A chave',
        estrofes: [4],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Trancada',
            texto: '"Lugarzinho" é diminutivo de carinho e de tamanho ao mesmo tempo, e "trancada" diz que o lugar fecha por fora. É este verso que volta para a "madeira antiga" da segunda estrofe e a redefine — não era abrigo, era caixa.' },
          { linhas: [1, 1], cor: 2, titulo: 'A chave ficou com os bichos',
            texto: 'Os mesmos animais que a coroaram são os que guardam o que a soltaria, e a chave está perdida, não guardada. A música termina informando que não há volta — e a única corte que ela tem é a que a mantém ali.' }
        ]
      }
    ]
  },

  {
    id: 'antes-e-depois-da-tempestade',
    titulo: 'Antes e Depois da Tempestade',
    epigrafe: 'Uma peça de Shakespeare encaixada dentro de um videogame',
    estrofesEsperadas: 9,
    contexto:
      'Esta é a música mais referencial da apresentação, e sem as referências ela não fecha. Tudo nela ' +
      'vem de "Life is Strange": os nomes Max, Chloe e Rachel são os três personagens centrais, a foto ' +
      'de infância, o poder de voltar o tempo, os trilhos do trem e a tempestade que destrói a cidade. ' +
      'O título tem três sentidos ao mesmo tempo — "Before the Storm" é o nome da prequela, "depois da ' +
      'tempestade" é o desfecho do primeiro jogo, e "A Tempestade" é a peça de Shakespeare que os ' +
      'personagens encenam na escola. As três estrofes do meio saem do português coloquial e passam ' +
      'para o português arcaico porque deixam de ser a personagem falando e passam a ser a peça: são ' +
      'Próspero e Ariel. As notas à direita separam as duas camadas verso a verso e apontam onde a ' +
      'letra troca de voz — o que acontece quatro vezes.',

    trechos: [
      {
        rotulo: 'A foto',
        estrofes: [0],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Quem está falando',
            texto: 'O primeiro verso é a única informação que a letra dá sobre a narradora antes de citar nomes: está deitada, sozinha, olhando uma foto — e o adjetivo está no feminino. Pelos nomes que vêm depois, é Chloe, a personagem que fica na cidade enquanto todos os outros vão embora.' },
          { linhas: [1, 1], cor: 1, titulo: 'A fantasia de pirata',
            texto: 'Não é imagem inventada: no jogo, Max e Chloe brincavam de pirata quando crianças e existe uma foto das duas fantasiadas. A música começa pelo objeto mais concreto da história das duas, e é o objeto que sobrou.' },
          { linhas: [2, 4], cor: 2, titulo: 'O gesto repetido',
            texto: 'Ela não olha a foto uma vez: olha toda vez. E o fim da estrofe explica por que — fotos daquele tipo eram raras. O que ela tem da amizade é uma quantidade fixa e pequena de imagens, e a estrofe já mostra o que ela faz com o tempo.' }
        ]
      },

      {
        rotulo: 'O mundo ilusório',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O ódio é indiscriminado',
            texto: 'Ela avisa que a raiva não depende de como o outro age: mesmo quem a cumprimenta bem está incluído. É a descrição de uma irritabilidade generalizada, não de uma briga com alguém específico.' },
          { linhas: [2, 3], cor: 1, titulo: 'O rótulo é dela mesma',
            texto: 'Ela se chama de babaca antes que alguém o faça, e diz sentir prazer nisso. O que ela recusa não é a convivência: é fingir que acredita no que os outros combinaram de acreditar.' },
          { linhas: [4, 5], cor: 2, titulo: 'A Matrix',
            texto: 'Referência direta ao filme de 1999, em que o mundo é uma simulação e o protagonista escolhe entre saber e não saber. A letra vira a escolha do avesso: aqui são os outros que preferem continuar dentro, e a palavra que ela usa para o que eles ganham com isso é sofrimento.' }
        ]
      },

      {
        rotulo: 'A fuga',
        estrofes: [2],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O balanço',
            texto: 'Uma frase só, no passado, sem detalhar nada. Na história do jogo cabe tudo: o pai morto num acidente, a melhor amiga que se mudou, a outra amiga que desapareceu.' },
          { linhas: [1, 3], cor: 1, titulo: 'O plano de sempre',
            texto: 'O desejo é ir embora, e vem no passado, o que já informa que não aconteceu. É o plano que a personagem repete durante o jogo inteiro e nunca executa.' },
          { linhas: [4, 5], cor: 2, titulo: 'Os trilhos',
            texto: 'Os trilhos do trem são, no jogo, o lugar onde a personagem quase morre. A letra os transforma em caminho romântico de mãos dadas, e ainda assim escolhe encerrar o verso na palavra fim. A imagem de fuga e a de morte usam o mesmo cenário.' }
        ]
      },

      {
        rotulo: 'O pedido a Max',
        estrofes: [3],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'O refrão, primeira vez',
            texto: 'Estes três versos voltam mais adiante com uma palavra trocada. Aqui o que vem junto com a lembrança é a tempestade, e o efeito declarado dela é medo. A tempestade é o desastre que encerra o primeiro jogo: um tornado sobre a cidade.' },
          { linhas: [3, 3], cor: 1, titulo: 'Ela diz que não existe',
            texto: 'Afirmação no presente, e no jogo há duas maneiras de ela ser literal: a personagem morre, e existem linhas de tempo alternativas que deixam de existir quando o tempo é alterado. Nos dois casos, quem fala está falando de fora da história.' },
          { linhas: [4, 6], cor: 2, titulo: 'O poder e o preço',
            texto: 'Max é a personagem que volta o tempo — é a mecânica central do jogo. O pedido tem três partes: volte, conserte e cuide-se. A do meio é o que o jogador faz; a última existe porque usar o poder machuca quem o usa. Ela pede o resgate e avisa o custo dele na mesma frase.' }
        ]
      },

      {
        rotulo: 'Rachel e Ariel',
        estrofes: [4],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'O espetáculo tem dois sentidos',
            texto: 'Rachel é a terceira personagem, e atuar é literal: na prequela ela atua na peça da escola. Mas os dois versos seguintes descrevem sorrisos falsos de pessoas em geral, não de atores — o falso espetáculo é a peça e é a cidade, e a letra usa a mesma palavra para os dois.' },
          { linhas: [3, 4], cor: 1, titulo: 'A peça entra na música',
            texto: 'Ariel é o espírito do ar de "A Tempestade", de Shakespeare, e serve ao mago Próspero. Daqui em diante a letra passa a citar a peça: são falas de Próspero chamando Ariel e cobrando o serviço feito. A troca do português coloquial pelo arcaico marca exatamente onde a peça começa.' },
          { linhas: [5, 6], cor: 2, titulo: 'Quem faz a tempestade',
            texto: 'Na peça, é Ariel que provoca a tempestade do primeiro ato, por ordem de Próspero. Então a mesma palavra que na estrofe anterior era o desastre do jogo passa a ser um trabalho executado por alguém — e é essa dupla função que o título da música guarda.' }
        ]
      },

      {
        rotulo: 'A promessa',
        estrofes: [5],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'A troca',
            texto: 'Agora quem fala é Ariel, e o assunto é o combinado da peça: serviço em troca de liberdade. Isso também descreve a relação das personagens — no jogo é Rachel quem promete a Chloe uma saída da cidade, e depois desaparece sem cumprir.' },
          { linhas: [3, 3], cor: 1, titulo: 'O inferno',
            texto: 'Retoma a fala mais conhecida de Ariel na peça, sobre o inferno estar vazio porque os demônios estão todos ali. É o único verso da estrofe que não trata do acordo: trata do que Ariel viu enquanto cumpria a ordem.' },
          { linhas: [4, 5], cor: 2, titulo: 'O barco',
            texto: 'Ariel conta a Próspero que incendiou o navio do rei durante a tempestade. A letra resume isso em dois versos e termina com a embarcação perdida no vento — mesmo tipo de imagem das outras músicas com navio nesta apresentação, mas aqui o naufrágio foi encomendado.' }
        ]
      },

      {
        rotulo: 'A condição',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O que Próspero responde',
            texto: 'A resposta não é sim nem não: é que quem manda não suportaria ver o outro voar sozinho. O motivo apresentado para não conceder a liberdade não tem nada a ver com serviço nem com dívida.' },
          { linhas: [2, 3], cor: 1, titulo: 'A pergunta invertida',
            texto: 'Em seguida a culpa é transferida: seria o outro capaz de me ver sofrer? A liberdade deixa de ser um direito combinado e passa a ser um dano que o liberto causaria em quem o mantém preso.' },
          { linhas: [4, 5], cor: 2, titulo: 'A oferta final',
            texto: 'Na peça, Próspero acaba libertando Ariel. Aqui ele propõe o contrário: fazer o outro esquecer que queria ir. É o ponto em que a citação para de seguir Shakespeare, e o que fica no lugar é uma relação em que ficar é a condição para ser amado.' }
        ]
      },

      {
        rotulo: 'As cinzas',
        estrofes: [7],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'O refrão, com uma palavra trocada',
            texto: 'O primeiro verso é idêntico ao do quarto trecho. O que mudou é o que vem depois da lembrança: antes era a tempestade se aproximando, agora é a cinza caindo. O título da música está inteiro nessa diferença — a mesma frase, antes e depois.' },
          { linhas: [3, 3], cor: 2, titulo: 'O trem',
            texto: 'A estrofe é a mais curta da letra e acaba num plano prático, com hora marcada. Depois de tudo queimado, o que ela diz é que as duas vão pegar o trem: a fuga da terceira estrofe voltando, agora impossível.' }
        ]
      },

      {
        rotulo: 'Os infinitos',
        estrofes: [8],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'A voz troca pela última vez',
            texto: 'A música inteira foi falada por Chloe. No último trecho alguém fala com Chloe e assume a tarefa. O pedido do quarto trecho tinha destinatário — Max —, e esta estrofe é a única coisa parecida com uma resposta que a letra oferece.' },
          { linhas: [1, 2], cor: 1, titulo: 'Pássaros e ninho',
            texto: 'A imagem de voo volta, mas invertida: nas estrofes da peça voar sozinho era a ameaça, e aqui as duas voam juntas. É o único trecho da música em que o futuro é usado sem ironia.' },
          { linhas: [3, 5], cor: 2, titulo: 'As linhas de tempo',
            texto: 'Os infinitos que nunca descobriram são as outras versões da história: o jogo é feito de linhas de tempo alternativas, criadas cada vez que o tempo é alterado. A música termina não num reencontro, mas na possibilidade de existir um em algum lugar, e o último verso é o de alguém que ainda não contou nada.' }
        ]
      }
    ]
  },

  {
    id: 'morgana',
    titulo: 'Morgana',
    epigrafe: 'Uma declaração de amor feita só de referências de terror',
    estrofesEsperadas: 10,
    contexto:
      'É uma música de elogio, e o elogio é feito inteiro por citação: livro de feitiçaria, tabuleiro ' +
      'de Ouija, ocultista inglês, roqueiro americano, poema medieval, dois filmes de Hitchcock, um de ' +
      'Kubrick, um vampiro de 1922 e uma série de videogame. Praticamente todo verso aponta para fora ' +
      'da música, então a tarefa das notas aqui é sobretudo identificar cada referência e mostrar por ' +
      'que ela está naquele lugar. O título é a chave da última estrofe: Morgana é a feiticeira das ' +
      'lendas do rei Artur, cujo epíteto — le Fay — quer dizer justamente "a fada". Vale notar duas ' +
      'coisas de forma: o texto não decide entre falar dela e falar com ela, trocando de "ela" para ' +
      '"tu" no meio das estrofes, e todo defeito que ele lista funciona como elogio.',

    trechos: [
      {
        rotulo: 'Ela vem pra casa',
        estrofes: [0],
        notas: [
          { linhas: [0, 2], cor: 0, titulo: 'Os livros de São Cipriano',
            texto: 'O "Livro de São Cipriano" é um grimório muito conhecido no Brasil e em Portugal: um manual de feitiços e orações. A cena é doméstica e pequena — ela chega, remexe nas coisas dele e se perde na leitura. E o livro que a prende é o manual do tipo de pacto que outras músicas desta apresentação executam.' },
          { linhas: [3, 3], cor: 1, titulo: 'Quatro defeitos numa linha',
            texto: 'O verso é só uma lista de acusações, todas rimando pela terminação. Como o resto da música é elogio, ele estabelece a regra de leitura: aqui os defeitos são ditos com gosto, e nenhum deles vai ser retirado depois.' },
          { linhas: [4, 4], cor: 2, titulo: 'A imagem fora de lugar',
            texto: 'É o único verso da estrofe que não é lista, e a imagem não fecha: flores caindo em árvores, não delas. O que sobra é a ideia de outono — decadência tratada como coisa bonita, que é exatamente o que a estrofe acabou de fazer com os quatro defeitos.' }
        ]
      },

      {
        rotulo: 'Os espíritos',
        estrofes: [1],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O ponteiro de Ouija',
            texto: 'O tabuleiro de Ouija tem letras e um ponteiro que se desloca sobre elas para formar respostas. Ela usa só o ponteiro, pendurado no cordão: a peça que serve para receber a mensagem virou enfeite, separada do tabuleiro que a faria funcionar.' },
          { linhas: [2, 2], cor: 1, titulo: 'Poltergeist e o jogo do copo',
            texto: 'Poltergeist é palavra alemã para "espírito ruidoso", e nomeia o tipo de assombração que mexe em objetos — também é o título de um filme de 1982. Os copos de vidro apontam para o jogo do copo, versão caseira do Ouija. A assombração aqui é barulho de louça, não aparição.' },
          { linhas: [3, 3], cor: 2, titulo: 'A troca de pronome',
            texto: 'A estrofe começa em "ela" e termina em "teus": ele estava descrevendo-a para alguém e passa a falar com ela, sem transição. E o que diz é que os demônios dela dormem de mãos dadas com ela — não a atormentam, fazem companhia.' }
        ]
      },

      {
        rotulo: 'Setealém',
        estrofes: [2],
        repeticao: 'A estrofe é o refrão e volta inteira mais adiante',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O argumento do refrão',
            texto: 'A tese é explícita e vem em forma de conclusão lógica: ela tem problemas, ele também, e é por isso que funciona. Não há promessa de melhora em nenhum verso — a compatibilidade está no defeito, não apesar dele.' },
          { linhas: [2, 2], cor: 1, titulo: 'Os dois surtam',
            texto: 'Repete a estrutura dos dois versos anteriores com um verbo mais forte e mais concreto. É a parte do refrão que descreve o que de fato acontece na convivência, e ele se inclui em pé de igualdade todas as vezes.' },
          { linhas: [3, 3], cor: 2, titulo: 'Onde vai o buraco',
            texto: '"Setealém" não é lugar de nenhuma tradição conhecida: parece formado por "sete" mais "além", o mundo dos mortos. Ou seja, a raiva dos dois cava um buraco em algo que já fica depois da morte. É a única hipérbole de escala da música, e serve para medir o tamanho da briga.' }
        ]
      },

      {
        rotulo: 'O vestidinho preto',
        estrofes: [3],
        repeticao: 'É o segundo refrão e também volta inteiro mais adiante',
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O inventário',
            texto: 'Vestido preto, tênis All Star e cabelo platinado: três itens de guarda-roupa, nomeados por marca e cor, sem nenhuma metáfora. Os diminutivos fazem o trabalho afetivo que os adjetivos não fazem.' },
          { linhas: [2, 2], cor: 1, titulo: 'Crowley e Marilyn Manson',
            texto: 'Aleister Crowley foi um ocultista inglês (1875–1947), fundador de uma doutrina própria e figura de referência no esoterismo do século XX. Marilyn Manson é músico americano cujo nome de palco junta Marilyn Monroe e Charles Manson — o mesmo Manson que aparece na lista de "Vermelho Vibrante", nesta apresentação.' },
          { linhas: [3, 3], cor: 2, titulo: 'O Inferno de Dante',
            texto: '"Inferno" é a primeira parte da "Divina Comédia", de Dante, poema do século XIV que desce por nove círculos de castigo. Aqui ele aparece impresso numa camiseta, e o verso informa a posição da estampa. A obra mais séria citada na música é a que recebe o tratamento mais casual.' }
        ]
      },

      {
        rotulo: 'Bons pesadelos',
        estrofes: [4],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'Meiguice e esqueleto',
            texto: 'O verso do sorriso doce e o dos acessórios vêm colados de propósito: piercing no septo e bracelete de esqueleto entram na mesma frase que a meiguice, sem contraste anunciado. A música trata as duas coisas como a mesma informação.' },
          { linhas: [2, 2], cor: 1, titulo: 'A exigência',
            texto: 'O verso parece redundante — filme de terror que dá medo — e é justamente aí que está a informação: ela consome o gênero com critério e descarta o que não cumpre a função. É elogio de rigor, não de gosto.' },
          { linhas: [3, 3], cor: 2, titulo: 'A boa-noite trocada',
            texto: 'Inverte a despedida comum: em vez de bons sonhos, bons pesadelos. É a mesma operação de toda a música aplicada a uma fórmula de gentileza — a palavra ruim ocupa o lugar da boa e continua querendo dizer carinho.' }
        ]
      },

      {
        rotulo: 'Hitchcock',
        estrofes: [5],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'O diretor',
            texto: 'Alfred Hitchcock é o cineasta associado ao suspense como técnica: fazer o espectador esperar o que vai acontecer. O verso compara o comportamento dela a um método de construir tensão, não a um susto.' },
          { linhas: [1, 1], cor: 1, titulo: 'Psicose',
            texto: 'Filme de Hitchcock de 1960, e o mais lembrado por um olhar: o do personagem que observa sem ser visto. A comparação é com o olhar dela, e o filme escolhido é aquele em que quem observa é o assassino.' },
          { linhas: [2, 3], cor: 2, titulo: 'Metamorfose, overdose, virose',
            texto: 'A estrofe toda rima na mesma terminação, e as três últimas palavras são de campos diferentes: biologia, drogas e doença. O amor entra como overdose e serve de remédio contra o estresse — imagem médica usada ao contrário, em que o excesso é o tratamento.' }
        ]
      },

      {
        rotulo: 'O Iluminado',
        estrofes: [6],
        notas: [
          { linhas: [0, 1], cor: 0, titulo: 'O machado e a porta',
            texto: '"O Iluminado" é o título brasileiro de "The Shining", filme de Kubrick de 1980 cuja cena mais conhecida é um homem arrebentando uma porta com um machado. Ele recusa o Bom Samaritano, o personagem da parábola bíblica que socorre um desconhecido, e escolhe uma palavra que soa a santidade mas nomeia quem persegue a própria família.' },
          { linhas: [2, 2], cor: 1, titulo: 'O que os vizinhos dizem',
            texto: '"Nosferatu" é o filme de vampiro de 1922, e o nome virou sinônimo de criatura que evita a luz. A frase é atribuída aos vizinhos: é a única vez que a música mostra o casal visto de fora, e de fora eles são os que não saem de casa.' },
          { linhas: [3, 3], cor: 2, titulo: 'O castelo ao contrário',
            texto: 'Castlevania é uma série de videogames sobre um castelo cheio de monstros, e o detalhe é preciso: em "Symphony of the Night", ao chegar ao fim, o jogador recebe o mesmo castelo invertido de cabeça para baixo para percorrer de novo. O verso usa isso para descrever a casa dos dois — a mesma planta, virada.' }
        ]
      },

      {
        rotulo: 'A imperatriz',
        estrofes: [9],
        notas: [
          { linhas: [0, 0], cor: 0, titulo: 'Onde entra o título',
            texto: 'Morgana, das lendas do rei Artur, é a feiticeira que se opõe à corte, e seu epíteto le Fay quer dizer "a fada". A estrofe a coloca acima do conto de fadas, e o cargo escolhido é imperatriz — que está por cima das rainhas que o verso seguinte vai enterrar.' },
          { linhas: [1, 1], cor: 1, titulo: 'As asas são dela',
            texto: 'As fadas estão presas em jaula e sem asas, mas o verso diz "tuas asas": o corte também é nela. Isso a põe dentro da jaula junto com o que ela domina, e não só do lado de fora dela.' },
          { linhas: [2, 3], cor: 2, titulo: 'Rainhas e princesas no mesmo lugar',
            texto: 'A estrofe elimina o elenco inteiro do conto de fadas: as vilãs enterradas e, junto delas, as heroínas. Sobrou apenas quem manda, num cenário sem mais ninguém — e a última palavra da música informa que a fantasia era inventada, o que desfaz o reino no verso em que ele é anunciado.' }
        ]
      }
    ]
  }

  /* ------------------------------------------------------------------
     Para adicionar outra música, copie um dos blocos acima e ajuste:
     id, titulo, epigrafe, contexto, estrofesEsperadas e trechos.
     Depois recarregue a página: ela vai pedir a letra nova.
     ------------------------------------------------------------------ */

];

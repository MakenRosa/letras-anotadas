# Letras Anotadas

Apresentação de letras de música em formato de slides: cada slide mostra um trecho
da letra (à esquerda) ligado por chaves e fios às explicações daquele trecho (à direita).
Avançar dentro de uma música é uma **transição** entre trechos; ao chegar ao fim,
o próximo avanço troca de música com uma transição diferente.

## Como abrir

Basta abrir `index.html` no navegador (duplo clique). Não precisa de servidor.

A apresentação abre já montada, com todas as músicas nas abas do topo, mesmo antes de
você colar qualquer letra. Uma música sem letra ocupa um slide só, com o título e o campo
para colar; as outras continuam navegáveis normalmente. Não é preciso importar tudo antes
de ver nada.

Para preencher uma música, cole a letra completa **com uma linha em branco entre cada
estrofe** e clique em *Montar apresentação*: os trechos anotados daquela música aparecem
na hora e o texto fica salvo no seu navegador. Enquanto uma música não tem letra, nem a
epígrafe nem a análise dela são exibidas.

> Se o seu navegador bloquear armazenamento local em arquivos `file://`, use a
> alternativa do arquivo (`letras.local.js`, descrita abaixo) ou sirva a pasta com
> um servidor simples: `python -m http.server 8000` e acesse `http://localhost:8000`.

## Controles

| Tecla | Ação |
|---|---|
| clique, `→`, `espaço` | próximo trecho (ou próxima música, no fim) |
| `←` | trecho anterior |
| `Shift`+`→`, `N` | **pula para a próxima música**, sem passar pelos trechos |
| `Shift`+`←`, `P` | volta à abertura da música atual; de novo, música anterior |
| `Esc` | índice de músicas e trechos |
| `T` | alterna tema escuro / claro |
| `F` | tela cheia |
| `L` | colar outra letra / substituir a atual |
| `?` | lista de atalhos |

Passar o mouse sobre uma explicação acende só os versos aos quais ela se refere.

No topo da tela ficam as abas numeradas com o nome de cada música — clicar em uma vai
direto para a abertura dela. Elas ocupam uma linha só, com rolagem horizontal quando não
cabem na largura da tela; a aba da música atual se centraliza sozinha a cada troca.

No rodapé, os botões `⏮` e `⏭` (nas pontas, em vermelho) pulam a música inteira, e as setas
de dentro andam trecho por trecho. Os tracinhos entre elas são um por trecho da música e
também funcionam como botão: clicar em um vai direto para aquele trecho.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | esqueleto da página |
| `styles.css` | visual, tema claro/escuro, animações de transição |
| `musicas.js` | **estrutura e explicações** — é aqui que você edita conteúdo |
| `app.js` | montagem dos slides, navegação, desenho dos fios |
| `letras.local.exemplo.js` | modelo opcional para guardar as letras em arquivo |

## Editando as explicações

Tudo o que aparece à direita está em `musicas.js`. Cada música tem uma lista de
`trechos`; cada trecho diz quais **estrofes** da letra ele mostra e traz uma lista
de `notas`:

```js
{
  rotulo: 'A encruzilhada',
  estrofes: [2],                 // índice da estrofe na letra (a primeira é 0)
  repeticao: 'Repete 2x',        // opcional: marca uma repetição sem repetir o texto
  notas: [
    { linhas: [0, 0], cor: 0, titulo: 'Rodovias 61 e 49', texto: '...' },
    { linhas: [1, 2], cor: 1, titulo: 'Meia-noite',       texto: '...' },
    { alvo: 'repeticao', cor: 2, titulo: '...',           texto: '...' }
  ]
}
```

- `estrofes` — blocos separados por linha em branco na letra colada, começando em 0.
- `versos: [início, fim]` — **opcional**: mostra só um pedaço da estrofe, para quebrar uma
  estrofe longa em vários slides. Quando ele existe, os índices de `linhas` das notas passam
  a contar a partir do início do recorte, não do início da estrofe.
- `linhas` — `[primeiro, último]`, **inclusivo**, contando os versos do trecho (juntando
  as estrofes listadas, na ordem, começando em 0). É esse intervalo que a chave abraça.
- `alvo: 'repeticao'` — em vez de apontar para versos, o fio aponta para a marca de repetição.
- `cor` — `0` azul, `1` vinho, `2` roxo.

O tamanho da fonte se ajusta sozinho para o trecho caber em 100 % da altura da tela,
então dá para incluir estrofes longas sem quebrar o layout.

## Adicionando outra música

1. Copie o bloco de `sinfonia-do-inferno` em `musicas.js` e troque `id`, `titulo`,
   `epigrafe`, `contexto` e `estrofesEsperadas`.
2. Monte os `trechos` com as explicações.
3. Recarregue a página: a música nova aparece nas abas, com o campo para colar a letra.

## Guardando as letras em arquivo (opcional)

Renomeie `letras.local.exemplo.js` para `letras.local.js`, cole as letras lá dentro
e descomente esta linha no `index.html`:

```html
<script src="letras.local.js"></script>
```

O conteúdo desse arquivo tem prioridade sobre o que foi colado na tela, e as músicas
que estiverem nele abrem direto na apresentação, sem passar pelo campo de colar.

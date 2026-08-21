# Letras Anotadas

Apresentação em slides para explicar letras de música. Cada slide mostra um trecho
da letra à esquerda, ligado por chaves e fios às explicações daquele trecho à direita.
Avançar dentro de uma música é uma transição entre trechos; ao chegar ao fim, o
próximo avanço troca de música com uma transição diferente.

HTML, CSS e JavaScript puros — sem dependências e sem build. Basta abrir `index.html`.

## As letras não estão neste repositório

Este projeto versiona **apenas estrutura e comentário original**: quais estrofes formam
cada trecho, a que versos cada nota se refere e o texto das explicações. O conteúdo das
músicas é material protegido por direito autoral e fica de fora — a letra é colada uma
vez pelo próprio usuário e guardada localmente (no navegador ou em `letras.local.js`,
que está no `.gitignore`).

As notas apontam para os versos por índice: `estrofes: [2]`, `linhas: [1, 3]`. Sem a
letra na máquina, `musicas.js` não reconstrói música nenhuma.

## Como usar

1. Abra `index.html` no navegador.
2. Cole a letra da música pedida, com uma linha em branco entre cada estrofe.
3. A apresentação é montada e o texto fica salvo no navegador.

Instruções completas, tabela de atalhos e como editar as explicações: [LEIA-ME.md](LEIA-ME.md).

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | esqueleto da página |
| `styles.css` | visual, tema claro/escuro, animações de transição |
| `musicas.js` | estrutura e explicações — é aqui que se edita conteúdo |
| `app.js` | montagem dos slides, navegação, desenho dos fios |
| `letras.local.exemplo.js` | modelo opcional para guardar as letras em arquivo |

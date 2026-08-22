# Método de avaliação integral

Use este roteiro como uma lista de cobertura interna. O relatório continua mostrando apenas problemas prováveis.

## 1. Fixar a versão da obra

- Confirme título, artista/compositor, idioma, gravação ou versão e eventuais diferenças entre letra publicada e cantada.
- Quando a fonte de letra divergir da gravação, descreva a divergência e use a versão efetivamente analisada pela aplicação.
- Não use uma tradução para provar uma nuance da letra original sem conferir o idioma original.

## 2. Conferir a estrutura da aplicação

Para cada `trecho` em `musicas.js`, confira:

- se `estrofes` e, quando presente, `versos` apontam para o bloco correto da letra completa;
- se cada intervalo inclusivo de `linhas` abraça exatamente os versos comentados;
- se `alvo: 'repeticao'`, `repeticao` e as contagens descritas correspondem à letra/execução;
- se `estrofesEsperadas`, ordem dos blocos e retornos de refrão são compatíveis com a versão escolhida;
- se o título e o texto de cada nota dizem respeito ao trecho para o qual o fio aponta.

Problemas de segmentação ou transcrição podem invalidar uma interpretação aparentemente correta; destaque isso antes de discutir o sentido.

## 3. Classificar cada afirmação

- **Fato externo:** datas, autoria, biografia, geografia, mitologia, religião, história, etimologia, tradução, referências a outras obras. Exija fonte confiável e prefira fontes primárias ou especializadas.
- **Intenção declarada:** só atribua significado pretendido ao autor/artista quando houver declaração rastreável. Cite a fonte.
- **Inferência textual:** deve resultar das palavras, imagens, estrutura ou progressão da letra. Verifique se o restante da música a contradiz.
- **Interpretação possível:** pode ser valiosa sem ser comprovável. O problema ocorre quando a análise a apresenta como literal, certa, exclusiva ou biográfica sem apoio.

## 4. Procurar falhas específicas

- sujeito, referente de pronome ou cronologia identificados sem base;
- eu lírico confundido com artista/compositor;
- símbolo tratado como universal quando depende de cultura ou contexto;
- alusão, citação ou tradução atribuída à obra errada;
- causalidade inventada, salto lógico ou conclusão mais forte que o verso;
- contagem, repetição, palavra, rima ou sequência incorreta;
- explicação que ignora um verso próximo que muda o sentido;
- linguagem absoluta onde a evidência admite mais de uma leitura;
- contexto correto, mas irrelevante para o trecho apontado;
- nota redundante, vaga ou tão extensa que encobre o ponto central.

## 5. Calibrar a inclusão

- **Confiança alta:** a letra, uma fonte primária ou fontes independentes contradizem claramente a análise.
- **Confiança média:** há uma lacuna relevante, uma formulação forte demais ou uma leitura melhor sustentada, embora reste ambiguidade.
- **Confiança baixa:** preferência estética, interpretação alternativa sem vantagem probatória ou hipótese baseada em silêncio da fonte. Não inclua.

Faça uma passagem final por todas as notas, `contexto` e `epigrafe` para garantir cobertura integral. Não transforme essa lista interna em uma seção de itens aprovados.

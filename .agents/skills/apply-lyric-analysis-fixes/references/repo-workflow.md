# Fluxo seguro de correção e publicação

## 1. Preflight obrigatório

1. Confirme a raiz do repositório, o remoto `origin` e o nome da branch principal.
2. Registre `git status --short --branch` antes de tocar nos arquivos. Considere toda alteração inicial como pertencente ao usuário.
3. Confirme que o trabalho será feito em `main`. Se outra branch estiver ativa ou `main` estiver ocupada por outro worktree, não mova mudanças nem use stash sem autorização.
4. Antes de editar, faça `git fetch origin main`. A branch local precisa estar alinhada com `origin/main`; quando estiver apenas atrás e o worktree permitir, atualize por fast-forward. Se houver divergência ou commits locais não relacionados, pare e explique.
5. Não apague, restaure, mova, adicione ao ignore ou inclua arquivos preexistentes para obter um status limpo.

## 2. Mudança focada

- Edite somente os arquivos exigidos pelas observações, normalmente `musicas.js`.
- Preserve uma lista explícita dos arquivos autorizados. Nunca use `git add .`, `git add -A` ou um glob amplo.
- Revise `git diff -- <arquivo>` e confirme que cada hunk corresponde a uma observação.
- Quando a correção for factual, mantenha no relatório final os links usados para verificá-la; não insira referências no texto da aplicação sem pedido do usuário.

## 3. Validação mínima

Execute na raiz:

```text
node --check musicas.js
git diff --check
git status --short
```

Se `node` não estiver disponível, use outro parser JavaScript confiável ou declare a validação não executada; não trate inspeção visual como equivalente à checagem sintática.

Quando campos estruturais mudarem, valide a versão correta da letra na aplicação e confira o trecho em tela. Para alterações somente de prosa, leia o bloco completo após o patch e verifique coerência com as notas vizinhas.

## 4. Staging, commit e sincronização

1. Adicione cada arquivo autorizado pelo caminho explícito, por exemplo `git add -- musicas.js`.
2. Inspecione `git diff --cached --check`, `git diff --cached` e `git status --short`. Remova do staging qualquer item fora do escopo sem alterar seu conteúdo.
3. Crie um único commit, normalmente `Corrige análise de <música>`.
4. Faça novo `git fetch origin main` antes do push. Se o remoto avançou, integre somente o novo commit sobre `origin/main` sem force-push e repita as validações. Em caso de conflito ou de mudanças locais alheias, pare e deixe o estado recuperável.
5. Execute `git push origin main`. Nunca use `--force`, `--force-with-lease`, amend de commit alheio ou alteração destrutiva de histórico.
6. Confirme o resultado com `git status --short --branch`, `git log -1 --oneline` e a relação entre `main` e `origin/main`.

## 5. Entrega

Informe:

- o que mudou na análise e em qual música;
- arquivos efetivamente incluídos;
- validações executadas e seus resultados;
- hash e mensagem do commit;
- confirmação do push para `origin/main`;
- alterações preexistentes que permaneceram fora do commit.

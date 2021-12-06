
### Agora a prática

Agora vamos abrir o  **Workbench** e fazer uma análise prática do banco de dados  `sakila`  , que já deve estar instalado, caso você tenha feito a instalação do  **MySql Workbench** de forma padrão. Caso o banco  `sakila`  não esteja disponível, volte até a seção  `Restaurando o banco de dados de prática sakila`  e siga as instruções listadas. Com esse banco disponível na sua instalação do  **Workbench** , sua missão agora é tentar finalizar os exercícios a seguir!

**Exercício 1** : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o  **MySql Workbench** .

RESPOSTA:
Na seção `Schemas`, navegue pela estrutura de pastas e selecione a tabela que deseja pesquisar. Clique com o botão direito e seleciona e opção `Select Rows - Limit 1000`

**Exercício 2** : Descubra como é possível criar uma tabela sem usar código  **SQL** usando o  **MySql Workbench** .

RESOISTA:
Na seção `Schemas`, navegue pela estrutura de pastas e selecione a pasta `Tables`. Clique com o botão direito e seleciona e opção `Create Table`

**Exercício 3** : Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela:  `Filme`

Colunas:

-   **_FilmeId_** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-   **_Descricao_** - não permite nulos, tipo texto (varchar(100));
-   **_AnoLancamento_** - não permite nulos, tipo int;
-   **_Nota_** - permite nulos, tipo int;

**Exercício 4** : Analise a tabela  `city`  e encontre a tabela à qual a coluna  `country_id`  faz referência.

RESPOSTA: 
Tabela `Country`

**Exercício 5** : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela  `city`  faz com a tabela  `country`  ?

RESPOSTA:
Relacionamento N:1

**Exercício 6** : Qual tipo de relacionamento a tabela  `country`  faz com a tabela  `city`  ?

RESPOSTA:
Relacionamento 1:N

**Exercício 7** : Abra tabela por tabela do banco  `sakila`  e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
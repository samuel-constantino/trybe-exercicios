# Detalhes do projeto
Crie uma nova pasta e inicie um projeto com Express:

$ npm init -y

$ npm install express body-parser

Crie o arquivo index.js ;

Instale o pacote sequelize e o mysql2 :


$ npm install sequelize mysql2

Instale o pacote sequelize-cli como uma dependência de desenvolvimento:

$ npm install --save-dev sequelize-cli

Use o Sequelize-CLI para iniciar a configuração do ORM:

$ npx sequelize-cli init

Esse comando irá gerar as pastas models , seeder , config e migration dentro do seu projeto.
Agora, aproveitando a CLI, vamos criar nossa primeira migration para books usando:

$ npx sequelize migration:generate --name create-books

Dentro do up , crie uma tabela Books com os atributos: id (nossa chave primária), title (string e não pode ser nulo), author (string e não pode ser nulo), pageQuantity (integer e pode ser nulo) e createdAt (date e não pode ser nulo).

Dentro do down , remova a tabela Books .

Crie seu banco de dados e coloque todas as configurações dentro do arquivo config/config.js .
Agora você pode rodar as migrations (seu banco precisa estar configurado certinho para isso funcionar):

$ npx sequelize db:migrate

Crie um arquivo Book.js dentro da pasta models e crie seu modelo lá dentro, respeitando os atributos que definimos nas migrations.

Dica - Preste atenção em como o arquivo models/index.js é definido, ele vai te ajudar a importar seus modelos mais facilmente.
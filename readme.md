# INSTALAÇÃO

No terminal rode o comando abaixo para instalar as dependência do projeto: 
```bash
npm install
```

## MYSQL
Execute as migrations para criar as tabelas no banco de dados local:
```bash
npx prisma migrate dev
```
Para ambiente de produção:

```bash
npx prisma migrate deploy
```
Execute o comando abaixo para popular o banco de dados:
```bash
npx prisma db seed
```

- Execute o comando abaixo para executar o backend em NodeJS:
```bash
npm run dev
```
- Crie um arquivo seguindo o .env.example preenchendo as variaveis de ambiente:
```bash
  .env
```

## TECNOLOGIAS UTILIZADAS

* Express
* Nodejs
* Prisma
* MySQL
* TypeScript

## PARA QUE SERVE

* Express: Framework para aplicativos da web com Node.js, lida com toda parte de roteamento e requisições HTTP;
* Typescript: Adicionar tipagem estática e intellisense ao editor para autocomplete do Prisma;
* Prisma: Fornecer uma camada de abtração da comunicação do servidor com o banco de dados unificando a Query Language independente do tipo de base (Mongo, SQL, MySQL, SQLite, Postgres etc...) 



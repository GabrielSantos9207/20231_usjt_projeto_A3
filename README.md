<h1 align="center"> SoftMusi </h1>

<h3>Universidade São Judas Tadeu</h3>

<h5>Alunos</h5>

<p>André Gonçalves Oliveira RA: 821158367</p>
<p>Ederson Paulo Pereira Manoel RA: 821225087</p>
<p>Enzo Roberto Fernandes Rodrigues RA:822132603</p>
<p>Enzo Romano Panebianco: 821224441</p>
<p>Gabriel Souza Dos Santos RA: 821239207</p>
<p>Guilherme Farias De Oliveira RA: 821224447</p>
<p>Gustavo do Prado Gabriel RA:821234228</p>

<h3>Instalação</h3>
 <h4>Microsserviços</h4>
 
Com o repositório clonado, execute os scripts de criação dos bancos no mysql.

Adicione um arquivo .env com as configurações na pasta microsserviços:

```
DB_PORT= porta do banco
DB_HOST= host do banco
DB_USER= usuario do banco
DB_PASSWORD= senha do banco

AVAL_DB_NAME= nome do banco do microsserviço de avaliação
AUTH_DB_NAME= nome do banco do microsserviço de autenticação

```

Entre na pasta dos seguintes microsserviços e execute <strong>npm install</strong>:
- Avaliação
- Autenticação
- Barramento de Eventos

Após isso, volte para a pasta microsserviços e execute <strong>npm start</strong>

<h4>Frontend</h4>

Caminhe até a pasta frontend e execute:

```
npm install
npm start
```

create database usjt_projeto_a3_autenticacao;

use usjt_projeto_a3_autenticacao;

create table usuarios(
	 id varchar(255) primary key,
     nome varchar(255) not null,
     email varchar(255) unique not null,
     senha varchar(255) not null
);

insert into usuarios values("1","Teste","teste@teste.com","12345");


create database usjt_projeto_a3_avaliacao;

use usjt_projeto_a3_avaliacao;

create table plugins(
	 id varchar(255) primary key,
     titulo varchar(255) unique not null,
     descricao varchar(255),
     link varchar (255),
     imagem varchar(300)
);

insert into plugins values("1","Plugin inicial","Plugin que ajuda muito na produção de música","link do plugin","https://academiadebeats.com.br/blog/wp-content/uploads/2018/04/tal-bassline-tela-350x230.jpg");

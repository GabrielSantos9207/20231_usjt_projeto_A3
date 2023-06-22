create database usjt_projeto_a3_avaliacao;

use usjt_projeto_a3_avaliacao;

create table plugins(
	 id varchar(255) primary key,
     titulo varchar(255) unique not null,
     descricao varchar(255),
     link varchar (255),
     imagem varchar(300)
);

insert into plugins values("1","Infinite Space Piano","O Infinite Space Piano é um plugin com uma mistura de um piano com texturas atmosféricas/psicodélicas.Tem um simples EQ embutido e um filtro ADSR para moldar o som como desejado.","https://woodandfirestudio.com/pt/beste-kostenlose-vst-plugins/","https://zaksound.com/wp-content/uploads/2022/08/infinite-space-piano-2-book-cover.webp");
insert into plugins values("2","BBC Symphony Orchestra Discover"
,"Este plugin VST gratuito é baseado na famosa orquestra da BBC britânica. Com 33 instrumentos realistas, é possível criar sons realmente cinematográficos. Esta é parte da série da Spitfire Audio para produtores de música cinematográfica. Inclui ainda o Core e o Professional, ambas extensões da versão gratuita.Pode descarregar o plugin diretamente - tudo o que precisa de fazer é criar uma conta com o Spitfire.",
"https://woodandfirestudio.com/pt/beste-kostenlose-vst-plugins/",
"https://spitfireaudio.imgix.net/0b70a243-8f07-4c87-a61d-38654adce569/smc0338_square_press.jpg?auto=compress%2Cformat&dpr=2&rect=0%2C0%2C3508%2C3508&w=1200");

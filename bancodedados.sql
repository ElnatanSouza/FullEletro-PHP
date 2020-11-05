create database fulleletro
default character set utf8
default collate utf8_general_ci;

create table comentarios (

id int AUTO_INCREMENT,
nome varchar(60) NOT null,
email varchar(30) NOT null,
msg varchar(300),
dia datetime DEFAULT now(),
PRIMARY KEY (id)

) default charset = utf8;

create table produtos (

id_produto int not null primary key auto_increment,
categoria varchar(60) not null,
descricao_produto varchar(200) not null,
preco_real char(20) not null,
preco_desc char(20) not null,
imagem varchar(200) not null unique,
marca varchar(20) not null

) default charset = utf8;


insert into produtos values

        (default,'geladeira','Geladeira/Refrigerador Side By Side Frost Free Inox Electrolux - 127V (504L)','7.789,05','1.449,90','./public/img/geladeira.jpg','Electrolux'),
        (default,'geladeira','Refrigerador Electrolux Duplex DC35A - 127V (260L)','1.849,01','1.689,00','./public/img/geladeira1.jpg','Electrolux'),
        (default,'geladeira','Refrigerador Consul Biplex - 127V (334L)','2.157,38','1.753,84','./public/img/geladeira2.jpg','Consul'),
        (default,'fogao','Fogão 05 Bocas Mesa de Vidro - Electrolux - 127V','1.659,39','1.357,67','./public/img/fogao.jpg','Electrolux'),
        (default,'fogao','Fogão 4 Bocas Electrolux - Automático com Forno (70L)','579,67','493,28','./public/img/fogao1.jpg','Electrolux'),
        (default,'microondas','Forno de Micro-ondas - Prata - 127V (27 L)','563,67 ','$498,20','./public/img/microondas.jpg','Philco'),
        (default,'microondas','Micro-ondas Philco - 127V (30L)','554,67','489,27','./public/img/microondas1.jpg','Philco'),
        (default,'microondas','Micro-ondas Brastemp Inox - 127V (20L)','554,67','489,27','./public/img/microondas2.jpg','Brastemp'),
        (default,'lavaRoupa','Lavadora Electrolux - Branca - 220V (13 Kg)','2.084,62','1.489,99','./public/img/lavroupa.jpg','Electrolux'),
        (default,'lavaRoupa','Lavadora de Roupas Brastemp com Turbo Agitação - 220V (11kg)','2.056,97','1.719,99','./public/img/lavroupa1.jpg','Brastemp'),
        (default,'lavaLouca','Lava-Louças Inox 14 Serviços - 220V','3.548,79','2.233,25','./public/img/lavlouça.jpg','Inox'),
        (default,'lavaLouca','Lava-louças 8 Serviços Brastemp Ative! - 220V','2.368,79','1.804,85','./public/img/lavlouça1.jpg','Brastemp');
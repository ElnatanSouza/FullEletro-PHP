create database cadastro
default character set utf8
default collate utf8_general_ci;

create table produtos (

    id int not null primary key auto_increment,
    descricao varchar(90) not null,
    preco char(20) not null, -- A unica forma que encontrei para aparecer as duas ultimas casas decimais dos preços foi com char -- 
    marca varchar(20)

) default charset = utf8;

insert into produtos values

        (default,'Geladeira/Refrigerador Side By Side Frost Free Inox - 127V (504L)', 'R$ 4.599,07', 'Electrolux'),
        (default,'Refrigerador Duplex DC35A - 127V (260L)', 'R$ 1.449,90', 'Electrolux'),
        (default,'Refrigerador Biplex - 127V (334L)', 'R$ 1.689,00', 'Consul'),
        (default,'Fogão 05 Bocas Mesa de Vidro - 127V', 'R$ 1.753,84', 'Electrolux'),
        (default,'Fogão 4 Bocas - Automático com Forno (70L)', 'R$ 1.357,67', 'Electrolux'),
        (default,'Forno de Micro-ondas - Prata - 127V (27 L)', 'R$ 493,28', 'Electrolux'),
        (default,'Micro-ondas - 127V (30L)', 'R$ 498,20', 'Philco'),
        (default,'Micro-ondas Inox - 127V (20L)', 'R$ 489,27', 'Brastemp'),
        (default,'Lavadora - Branca - 220V (13 Kg)', 'R$ 1.489,99', 'Electrolux'),
        (default,'Lavadora de Roupas com Turbo Agitação - 220V (11kg)', 'R$ 1.719,99', 'Brastemp'),
        (default,'Lava-Louças Inox 14 Serviços - 220V', 'R$ 2.233,25', 'Brastemp'),
        (default,'Lava-louças 8 Serviços Ative! - 220V', 'R$ 1.804,85', 'Brastemp');

create table comentarios (

	id int AUTO_INCREMENT,
	nome varchar(60) NOT null,
	email varchar(30) NOT null,
    msg varchar(300),
	dia datetime DEFAULT now(),
    PRIMARY KEY (id)

) default charset = utf8;
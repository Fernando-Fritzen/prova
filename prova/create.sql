create table contato (id  bigserial not null, email varchar(255), telefone varchar(255), primary key (id));
alter table if exists contato add constraint UK_4ds5brlm0e7etaij4k5twocp4 unique (email);
alter table if exists contato add constraint UK_f829ydnj34uigkh6qie7mr2wp unique (telefone);

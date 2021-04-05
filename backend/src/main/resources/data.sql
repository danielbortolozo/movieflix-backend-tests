


INSERT INTO usuario (user_name, email, password) VALUES ('Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO usuario (user_name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$DNvKoPB0QXJq0npzgJfhk.rbIdIad7mC3TlZIZstBN1kWQ/tiqByG');
INSERT INTO usuario (user_name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$LTiXsJtCZyfK7ifjiUjsn.PuQvZ//M.kMDU/RwJJTm0TUzys6uXKy');


INSERT INTO role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO usuario_role (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuario_role (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuario_role (usuario_id, role_id) VALUES (3, 1);

INSERT INTO genre (name) VALUES ('ROMANCE');
INSERT INTO genre (name) VALUES ('COMEDIA');
INSERT INTO genre (name) VALUES ('TERROR');

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg',
 'perigo na montanha', 'é um madereiro que mora na fronteira...', 'Perigo na montanha', 2018, 2);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg',
 'Tempo de violencia','Os assassinos Vincent e Jules passam por imprevistos ao recuperar uma mala para um mafioso.', 'Pulp Fiction', 1995, 1);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1fOsyhVz5qyX2rl1qqX6KImVhTx.jpg',
 'Dedicada a minha ex','The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical...',
 'Dedicada a minha ex', 2019, 2);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
('https://www.themoviedb.org/t/p/w220_and_h330_face/610sORPtYvnZHc6EGqqov63CiT5.jpg', 'Terror',
 'Na véspera do ano novo, os rapazes da Sigma Phi convidam os amigos para uma festa à fantasia no interior de um trem',
  'O Trem do Terror', 1980, 3);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
('https://www.themoviedb.org/t/p/w220_and_h330_face/k1PKCpRZRCy0ECWJjJEpR4joyXP.jpg', 'Terror bird',
 'When Maddy Stern discovers her father has gone missing during a routine birdwatching excursion',
  'Terror Birds', 2016, 3);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
('https://www.themoviedb.org/t/p/w220_and_h330_face/rqEgvJ7nxqShBv9m2iBfuKzUEPj.jpg', 'Terror',
 'After marrying a handsome man she barely knows',
  'Desejo Cego', 2001, 3);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
  ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/1umKVgbjFG5Cho5ZKTpcvRFJjuJ.jpg', 'Comédia roubo',
   'Em 2006, um grupo de ladrões realizou o que é considerado um dos assaltos a bancos mais famosos e inteligentes da história da Argentina quando assaltaram a agência do Banco Río em Acassuso.',
    'O Roubo do Século', 2020, 2);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
  ('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg', 'Drama, ficcao',
   'Perseguindo detritos espaciais e sonhos distantes no ano de 2092, quatro desajustados descobrem segredos explosivos durante a tentativa de comércio de um humanoide.‎',
    'Nova Ordem Espacial ', 2021, 2);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
      ('https://www.themoviedb.org/t/p/w220_and_h330_face/5xEFSRiGwxD9QY78nN5y1Mf2kF7.jpg', 'Romance',
       'Uma paixão de verão nascida sob o sol da Sicília rapidamente se transforma em uma dolorosa história de amor que obriga um jovem casal a amadurecer.',
        'Na Mesma Onda ', 2021, 1);

INSERT INTO movie (img_url, sub_title, synopsis, title, year, genre_id) VALUES
  ('https://www.themoviedb.org/t/p/w220_and_h330_face/28g5rvH7PlYB3CmilKWW20GcQkp.jpg', 'Romance',
   'Depois de se internar no centro psiquiátrico onde vive a mulher por quem ele se apaixonou, Adri descobre que sair de lá não vai ser tão fácil assim.',
    'Loucura de Amor ', 2021, 1);



INSERT INTO review (text, movie_id, user_id) VALUES ('FILME MUITO BOM BEM LEGAL', 1, 2);


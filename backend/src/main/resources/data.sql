INSERT INTO usuario (user_name, email, password) VALUES ('Bob', 'bob@gmail.com', '');
INSERT INTO usuario (user_name, email, password) VALUES ('Ana', 'ana@gmail.com', '123456');
INSERT INTO usuario (user_name, email, password) VALUES ('Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO usuario_role (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuario_role (usuario_id, role_id) VALUES (2, 2);

INSERT INTO genre (name) VALUES ('ROMANCE');
INSERT INTO genre (name) VALUES ('COMEDIA');
INSERT INTO genre (name) VALUES ('TERROR');


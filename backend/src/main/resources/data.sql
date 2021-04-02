INSERT INTO usuario (user_name, email, password) VALUES ('Bob', 'bob@gmail.com', '123456');
INSERT INTO usuario (user_name, email, password) VALUES ('Ana', 'ana@gmail.com', '123456');

INSERT INTO role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO usuario_role (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuario_role (usuario_id, role_id) VALUES (2, 2);
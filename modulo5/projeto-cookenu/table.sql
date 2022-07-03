CREATE TABLE cadastro  (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE recipe (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data_de_criacao DATE NOT NULL,
    cadastro_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (cadastro_id) REFERENCES cadastro(id)
);
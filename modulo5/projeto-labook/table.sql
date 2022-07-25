CREATE TABLE labook_user (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE labook_posts (
	id VARCHAR(255) PRIMARY KEY,
	photo VARCHAR(255) ,
    description VARCHAR(255) NOT NULL,
    creationDate DATE ,
    type ENUM ("NORMAL","EVENT") DEFAULT "NORMAL",
    criadorId_post VARCHAR(255) NOT NULL,
    FOREIGN KEY (criadorId_post) REFERENCES labook_user(id)
);
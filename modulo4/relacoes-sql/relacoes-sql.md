# EXERCICIO RELACOES-SQL

## ---A) Resposta : Chave estrangeira é para relacionar  uma tabela com outra.
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
## -----B)
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
	"Muito bom!",
	7,
	"004"
);
```

## ---- C)
## ---- Resposta: Erro Code : 1452 - Não pode adicionar um filme que não existe a chave estrangeira.
```INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "Muito bom!",
    7,
	"010"
);
   
SELECT * FROM Movie;
```
## --D)
```
ALTER TABLE Movie DROP COLUMN rating;
```

## E) Resposta : Não é possivel excluir sta linha que está atrelada a uma coluna Foreing key que foi excluida.
```
DELETE FROM Movie WHERE id = 004;
```

### --- EXERCICIO 2

## a) 
## Resposta: esta é uma tabela relacional,ela relaciona a tabela filme com a tabela  ator.

## b) 
```
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "006"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "007"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "009"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "008"
);

SELECT * FROM Movie;

SELECT * FROM Actor;

SELECT * FROM MovieCast;
```
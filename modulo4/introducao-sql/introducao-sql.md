
```#------------CREATE TABELA Actor------------
CREATE TABLE Actor (
    id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

DROP TABLE Actor;
```
# Exercicio 1
```
SHOW DATABASES;
SHOW TABLES;
```
## a)
### VARCHAR é para declarar texto e DATE para declarar data
## b) 
### Show data base, retornou o nome do banco 
### Show Tables , retorna o nome da tabela.(Actor)
## c) 
### DESCRIBE Actor Retorna toda a minha tabela.


# Exercicio 2
```#------------INSERINDO VALORES NA TABELA ACTOR------------
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
## a)
```
INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "002", 
  "Gloria Pires",
  1.200000,
  "1963-08-23", 
  "female"
);
```
## b)
### Erro 1062 , O id é uma primary key, não podendo repetir o mesmo valor.

```
INSERT INTO Actor (id, name, salary ,birth_date, gender )
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
### --- Não inseriu os dados na tabela , pq estava faltando informar o gender e a data de nascimento

```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  "Orlando Duarte",
  1100000,
  "1949-04-18", 
  "male"
);
```
### --- Erro 1364 A contagem de coluna não correspondem a contagem de valores na linha.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
### --- Erro 1364 O nome do campo não tem um valor padrão.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "011",
  "Adriana Esteves",
  400000,
  "1949-04-18", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  " Paola Oliveira",
  1200000,
  "1982-06-20", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Lima Duarte",
  1400000,
  "1923-07-11", 
  "male"
);
```
# Exercício 3
## a)
```
SELECT * from Actor WHERE gender = "female";
```
## b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
## c)
### -- Não retornou nada pq na tabela não existe nenhum gender invalid.
```
SELECT * from Actor WHERE gender = "invalid";
```

## d)
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
## e)
### -- campo 'nome' não existe na tabela. O correto é 'name'
```
SELECT id, nome from Actor WHERE id = "002";
```

# Exercício 4
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
## a)
### -- Seleciona todos os campos da tabela Actor, onde o nome começa com 'A' ou 'J' e que tenha o salario maios do que 300.000
## b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```
## c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
## d)
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```

# Exercício 5 
## a)
### -- Essa query Cria a tabela movie com id, title, synopsis, release_Date e rating
``` 
#------------CREATE TABELA MOVIES------------
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
    );
```

## b)
```
#------------INSERINDO VALORES NA TABELA MOVIES------------
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"001", 
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos" ,
	"2006-01-06", 
	7
);
```

## c)
```  
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"002", 
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
	"2012-12-27",
	10
);
```

## d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
	"003", 
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
	"2017-11-02",
	8
);
```

## e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo",
	"2003-01-30",
	9
);
```

# Exercício 6
```
#----RETORNA TODA A TABELA MOVIE(LINHAS, COLUNAS)------
SELECT * FROM Movie;
```
## a) 
```
#----RETORNA OS CAMPOS (id, title, rating) DA TABELA MOVIE, QUE TENHA O 'ID = 004'------
SELECT id, title, rating FROM Movie WHERE id = "004";
```

## b) 
```
#----RETORNA TODOS OS CAMPOS DA TABELA MOVIE QUE TENHA O 'TITULO = DEUS É BRASILEIRO'------
SELECT * FROM Movie WHERE title = "Deus é Brasileiro";
```

## c) 
```
#----RETORNA OS CAMPOS (id, title, synopsis) DA TABELA MOVIE QUE TENHA O rating MINIMO DE 7------
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

# Exercício 7
## a)
```
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

## b)
```
SELECT * FROM Movie
WHERE title LIKE "%Você%" OR
      synopsis LIKE "%Você%";
```      

## c)
``` 
SELECT * FROM Movie
WHERE release_date < "2021-05-04";
```      

## d)
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "Doce de mãe" OR
      synopsis LIKE "Doce de mãe") AND rating > 7;
```      



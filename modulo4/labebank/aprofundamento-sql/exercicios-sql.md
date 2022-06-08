````
SET SQL_SAFE_UPDATES = 0;
````

# Exercicio 1
## a) Altera a tabela apagando a coluna salario.
## b) Altera a tabela mudando o gender para sex receber 6 caracteres.
## c) Altera a tabela Actor, mudando o gender para receber gender de 255 caracteres.
## d)
````
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
SELECT * FROM Actor;
````
# Exercicio 2  
## a)
````
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
````
## b)
````
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

# b-2)
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
````
## c) ok
````
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-02-10",
	salary = 600000,
	gender = "male"
WHERE id = "005";
````
## d) O comando roda sem erro, porem não atualizou nada
````
UPDATE Actor
SET name = "Moacyr Moreira",
	birth_date = "2020-02-11",
	salary = 500000,
	gender = "male"
WHERE id = "020";
````

# Exercicio 3

## a)
````
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
````
## b)
````
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
````
# Exercicio 4

## a)
````
SELECT MAX ( salary) FROM Actor;
````
## b) 
````
SELECT MIN ( salary) FROM Actor WHERE gender = "female";
````
## c) 
````
SELECT COUNT(*) FROM Actor WHERE gender = "female";
````
## d)
````
SELECT SUM (salary) FROM Actor;
````
# Exercicio 5

## a) Resposta: Seleciona a quantidade total gender de atores agrupando valores iguais.
````
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
````
## b)
````
SELECT id, name FROM Actor
ORDER BY name DESC;
````
## c)
````
SELECT * FROM Actor
ORDER BY salary;
````
## d)
````
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
````
## e)
````
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
````

# Exercicio 6

## a)
````
ALTER TABLE Movie ADD playing_limit_date DATE;
````
## b)
````
ALTER TABLE Movie CHANGE rating rating FLOAT;
````
## c)
````
#---- uma das queries
UPDATE Movie
SET playing_limit_date = "2022-07-31"
WHERE id = "003";

#---- outra  queries verificar
UPDATE Movie
SET playing_limit_date = "2020-12-30"
WHERE id = "002";
````
## d-1)
````
DELETE FROM Movie 
WHERE id = "001";
````
## d-2) O comando roda sem erro, porem não atualizou nada
````
UPDATE Movie
SET synopsis = "TEste exercicio 6"
WHERE id = "001";
````
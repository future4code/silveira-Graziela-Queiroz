import { performAttack, validateCharacter } from "../src/controller";
import { Personagem } from "../src/types/Personagem";

// Exercicio 2  
// a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 

describe("", () => {
    //deve retornar falso para o nome vazio
    test("Should return false for empty name", () => {
        const personagem: Personagem = ({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        //Aqui crio uma variável que recebe o type "Personagem" e suas característicasn preenchidas.
        const result = validateCharacter(personagem)

        // Aqui espero que o resultado seja falso.
        expect(result).toBe(false);
    });

    // *b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.*
    test("Should return false for life 0", () => {
        const personagem: Personagem = ({
            name: "Scorpion",
            life: 0,
            strength: 300,
            defense: 500,
        });

        const result = validateCharacter(personagem)

        expect(result).toBe(false);
    });


    //*c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.* 
    test("Should return false for life 0", () => {
        const personagem: Personagem = ({
            name: "Superman",
            life: 1500,
            strength: 0,
            defense: 500,
        });

        const result = validateCharacter(personagem)

        expect(result).toBe(false);
    });

    // d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
    test("Should return false for empty name", () => {
        const personagem: Personagem = ({
            name: "Batman",
            life: 1500,
            strength: 300,
            defense: 0,
        });

        const result = validateCharacter(personagem)

        expect(result).toBe(false);
    });

    // e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
    test("Should return false for empty name", () => {
        const personagem: Personagem = ({
            name: "Coringa",
            life: -500,
            strength: 300,
            defense: 500,
        });

        const result = validateCharacter(personagem)

        expect(result).toBe(false);
      });


    // f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas*
    // Se todas as informações forem válidas retornam true
    test("Should return true for all valid inputs", () => {
        const personagem: Personagem = ({
            name: "Scorpion",
            life: 500,
            strength: 900,
            defense: 500,
        });

        const result = validateCharacter(personagem)

        expect(result).toBe(true);
    });



})


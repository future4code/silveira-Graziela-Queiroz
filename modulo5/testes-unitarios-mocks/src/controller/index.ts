import { Personagem } from "../types/Personagem";

export const validateCharacter = (input: Personagem): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};
   // quando vc usa o validador, vc está fazendo a inversão de dependencia.
export const performAttack = (attacker: Personagem, defender: Personagem, validator: (input: Personagem) =>boolean) => {

    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;

    // o que siginifica este -=
    //   defender.life = defender.life - attacker.strength - defender.defense;
    }
    // o que siginifica este -=
    // let valor = 0
    // valor += 50 
};
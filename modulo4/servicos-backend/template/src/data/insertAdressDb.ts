import { Address } from "../types/typesAdress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address) {

    const { cep, logradouro, numero, complemento, bairro, cidade, estado} = adress

    await connection("adress").insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    })

}
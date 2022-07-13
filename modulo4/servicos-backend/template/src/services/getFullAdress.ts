import axios from "axios"
import { Address } from "../types/typesAdress"

export const getFullAdress = async (cep: string): Promise<Address | undefined> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: result.data.numero,
            complemento: result.data.complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        return address
    } catch (error) {
        return undefined
    }
}
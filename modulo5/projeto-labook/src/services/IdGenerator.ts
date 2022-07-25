import { v4 } from 'uuid'

// função para gerar o id.
export class IdGenerator {
    generateId = (): string => {
        return v4()
    }
}
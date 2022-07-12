import {isEven, connection} from "../src"

describe("testando o arquivo index.js", () => {
    test("testando a função isEven", () => {
        const result = isEven(2)

        expect(result).toBe(true)

        expect(isEven(3)).toBe(false)
    })

})    
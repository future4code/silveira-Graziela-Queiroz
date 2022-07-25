export class CustomError extends Error {
    constructor(
       public statusCode: number,
       message: string
    ) {
       super(message);
    }
 }
 
 // criando uma classe de error que reeescreve a classe de Error para que ela tambem receba um statuscode.
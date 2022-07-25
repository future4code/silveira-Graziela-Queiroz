import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";

export class UserController {

    public async signup(req: Request, res: Response) {
        try {
            const { name, role, email, password } = req.body
            const result = await userBusiness.signup(
                name,
                email,
                password,
                role
            );
            res.status(200).send(result);
        } catch (error: any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message });
        }
    }

}
export default new UserController()
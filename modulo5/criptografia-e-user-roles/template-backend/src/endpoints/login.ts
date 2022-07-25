    import {Request,Response} from "express";
    import {getUserByEmail} from "../data/getUserByEmail";
    import {Authenticator} from "../services/Authenticator"




 export default async function login (req: Request, res: Response) : Promise<void> {
    try {
   
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      if(!req.body.password || req.body.password.lenght <= 6){
        throw new Error("Invalid password");
      }
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      
    //    const id = generate();

    //    const hashPassword = await hash(userData.password);

    //    await createUser(id, userData.email, hashPassword);

    //     });

        const user = await getUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

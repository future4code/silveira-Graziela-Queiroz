import { ROLE_TYPE } from "../types";

export class User {
    constructor(
        private id: string,
        private name : string,
        private email: string,
        private password: string,
       private role: ROLE_TYPE
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getRole(): string {
        return this.role;
    }
    
}

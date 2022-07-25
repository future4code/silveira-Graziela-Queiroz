import { ROLE_TYPE } from "../types";

export class User {
    constructor(
        public id: string,
        public name : string,
        public email: string,
        public password: string,
        public role: ROLE_TYPE
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

import crypto from 'crypto'
import { users } from '../../../app';

export class User {
    
    private name: string;
    private email: string;
    private password: string;

    constructor({
        name,
        email,
        password,
    }: {
        name: string;
        email: string;
        password: string;
    }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getPassword(){
        return this.password;
    }


}
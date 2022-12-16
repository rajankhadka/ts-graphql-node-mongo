import userService from './user-info.service';
import {validatedPassword} from '../utils/hashing-password';
import jwt from 'jsonwebtoken';
class AuthenticationService{
    constructor() {}

    async login(username: string, password: string){
        const foundUser = await userService.getUserByUserName(username);
        if(!foundUser) throw new Error('cannot authentixate');
        const verifyPassword = validatedPassword((foundUser.password)!, password);
        if(!verifyPassword) throw new Error("cannot authentixate");;
        
        return this.jwtSign({username, id: foundUser.id});
    }

    jwtSign(data: any){
        const token = jwt.sign(data, 'graphql', {expiresIn: 60*60});
        return {token};
    }

    jwtVerify(token: string){
        const payload = jwt.verify(token, 'graphql');
        return payload;
    }
}

const authenticationService = new AuthenticationService();
export default authenticationService;
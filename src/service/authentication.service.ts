import userService from './user-info.service';
import {validatedPassword} from '../utils/hashing-password';
import jwt from 'jsonwebtoken';
import { verifyJwt } from '../utils/jwt.utils';
class AuthenticationService{
    constructor() {}

    async login(username: string, password: string){
        const foundUser = await userService.getUserByUserName(username);
        if(!foundUser) throw new Error('cannot authentixate');
        const verifyPassword = validatedPassword((foundUser.password)!, password);
        if(!verifyPassword) throw new Error("cannot authentixate");;
        
        return this.jwtSign({username, sub: foundUser.id});
    }

    jwtSign(data: any){
        const token = jwt.sign(data, 'graphql', {expiresIn: 60*60});
        return {token};
    }

    async jwtVerify(token: string){
        try {
            const payload: any = verifyJwt(token);
            if(payload.error) throw new Error(payload.error);
            const foundUser = await userService.getUser({id: payload.sub?.toString()});
            if(!foundUser) throw new Error('RunTime Exception');
            return {isAuthenticate: true, payload, message: 'successfull', error: ''};
        } catch (error: any) {
            return {isAuthenticate: false, payload: {}, mesage: '', error: error.message};
        }
    }

    
}

const authenticationService = new AuthenticationService();
export default authenticationService;
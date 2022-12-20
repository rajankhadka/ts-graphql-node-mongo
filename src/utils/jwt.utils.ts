import jwt from 'jsonwebtoken';

export const verifyJwt = (token: string) => {
    try {
        return jwt.verify(token, 'graphql');
    } catch (error: any) {
        return {payload: null, isAuthenticate: false, message: '', error: error.message}
    }
    
    // return jwt.verify(token, "graphql");
    
    
}

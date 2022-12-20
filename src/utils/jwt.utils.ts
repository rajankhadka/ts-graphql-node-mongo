import jwt from 'jsonwebtoken';
export const jwtSign = (username: string) => {
    const token = jwt.sign({ username }, "graphql", { expiresIn: 60 * 60 });
    return { isToken: true, token: token };
}

export const verifyJwt = (token: string) => {
    try {
        return jwt.verify(token, 'graphql');
    } catch (error: any) {
        return {payload: null, isAuthenticate: false, message: '', error: error.message}
    }
    
    // return jwt.verify(token, "graphql");
    
    
}

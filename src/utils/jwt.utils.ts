import jwt from 'jsonwebtoken';
export const jwtSign = (username: string) => {
    const token = jwt.sign({ username }, "graphql", { expiresIn: 60 * 60 });
    return { isToken: true, token: token };
}

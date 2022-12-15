import * as path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config({path: path.join(process.cwd(), './.env')});

const configAttributes = {
  bytes: process.env.PASSWORD_RANDOM_BYTES,
  iteration: process.env.PASSWORD_ITERATIONS,
  length: process.env.PASSWORD_LENGTH,
  digest: process.env.PASSWORD_DIGEST,
};

export const hashedPassword = (password: string) => {
    if(configAttributes?.bytes && configAttributes?.digest && configAttributes?.iteration && configAttributes?.length){
        const salt = crypto.randomBytes(+configAttributes.bytes).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, +configAttributes.iteration, +configAttributes.length,configAttributes.digest).toString("hex");
        return hash.concat(".", salt);
    }
    throw new Error('config not loaded!!!');
}

export const validatedPassword = (hashedPassword: string, password: string) => {
    if(configAttributes?.bytes && configAttributes?.digest && configAttributes?.iteration && configAttributes?.length){
        const [hash, salt] = hashedPassword.split(".");
        const newHashed = crypto.pbkdf2Sync(password, salt, +configAttributes.iteration, +configAttributes.length,configAttributes.digest).toString("hex");
        if(hash === newHashed) return true;
        return false;
    }
    throw new Error("config not loaded!!!");

}
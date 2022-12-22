import * as path from 'path';
import * as dotenv from "dotenv";
import crypto from 'crypto';

let envPath = "";
switch (process.env.NODE_ENV) {
  case "dev":
    envPath = path.resolve(process.cwd(), "dev.env");
    console.log(path.resolve(process.cwd(), "dev.env"));
    break;
  case "home":
    envPath = path.resolve(process.cwd(), "home.env");
    
    break;
  case "prod-test":
    envPath = path.resolve(process.cwd(), "dev.env");
    break;
  default:
    console.log(path.resolve(process.cwd(), "dev.env"));
    throw new Error("cannot load env file");
}
dotenv.config({
  path: envPath,
});

class PasswordUtils {
  configAttributes;
  constructor() {
    this.configAttributes = {
      bytes: process.env.PASSWORD_RANDOM_BYTES,
      iteration: process.env.PASSWORD_ITERATIONS,
      length: process.env.PASSWORD_LENGTH,
      digest: process.env.PASSWORD_DIGEST,
    };
  }
  hashedPassword(password: string) {
    if (
      this.configAttributes?.bytes &&
      this.configAttributes?.digest &&
      this.configAttributes?.iteration &&
      this.configAttributes?.length
    ) {
      const salt = crypto
        .randomBytes(+this.configAttributes.bytes)
        .toString("hex");
      const hash = crypto
        .pbkdf2Sync(
          password,
          salt,
          +this.configAttributes.iteration,
          +this.configAttributes.length,
          this.configAttributes.digest
        )
        .toString("hex");
      return hash.concat(".", salt);
    }
    throw new Error("config not loaded!!!");
  }

  validatedPassword(hashedPassword: string, password: string){
    if (
      this.configAttributes?.bytes &&
      this.configAttributes?.digest &&
      this.configAttributes?.iteration &&
      this.configAttributes?.length
    ) {
      const [hash, salt] = hashedPassword.split(".");
      const newHashed = crypto
        .pbkdf2Sync(
          password,
          salt,
          +this.configAttributes.iteration,
          +this.configAttributes.length,
          this.configAttributes.digest
        )
        .toString("hex");
      if (hash === newHashed) return true;
      return false;
    }
    throw new Error("config not loaded!!!");
  }
}
const passwordUtils = new PasswordUtils();
export default passwordUtils;
import express, { Express } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import * as http from "http";
import { schema } from "./graphql/schema.graphql";
import * as dotenv from "dotenv";
import * as path from "path";
import mongoose from "mongoose";
import authenticationService from "./service/authentication.service";
import { verifyJwt } from "./utils/jwt.utils";
class Server {
  app;
  server;
  httpServer;
  constructor() {
    const envPath =
      process.env.NODE_ENV === "dev"
        ? path.resolve(process.cwd(), ".env")
        : path.resolve(process.cwd(), ".home.env");
    console.log(envPath);
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.app.use(express.json());
    this.server = new ApolloServer({ schema: schema });
    dotenv.config({
      path: "/Users/rajankhadka/Desktop/backend-service/graphql/small-ecommerce/.home.env",
    });
    const mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    mongoose
      .connect(mongoUrl)
      .then(() => console.log("mongodb connected!!!"))
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  async listen() {
    await this.server.start();
    this.app.use(
      "/graphql",
      expressMiddleware(this.server, {
        context: async ({ req, res }) => {
          let token = req?.headers?.authorization ?? null;
          if (token) token = token.split(" ")[1];
          if (!token)
            return {
              isAuthenticated: false,
              payload: {},
              message: "",
              error: "Token needed",
            };
          return authenticationService.jwtVerify(token);
        },
      })
    );
    this.httpServer.listen(4000, () => console.log("server running"));
  }
}

const server = new Server();
server
  .listen()
  .then()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

import express, {Express} from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import * as http from 'http';
import {schema} from './graphql/schema.graphql';
import * as dotenv from 'dotenv';
import * as path from 'path';
import mongoose from 'mongoose';
import * as dbModel from './model/index.model';


// async function main(){
//     try {
//         const app = express();
//         const httpServer = http.createServer(app);
//         app.use(express.json());
//         const server = new ApolloServer({schema});
//         await server.start();
//         app.use('/graphql', expressMiddleware(server));
//         httpServer.listen(4000, () => console.log("server running"));

//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }

// }
// main();


class Server{
    app;
    server;
    httpServer;
    constructor(){
        const envPath = path.join(process.cwd(), './.env');
        this.app = express();
        this.httpServer = http.createServer(this.app);
        this.app.use(express.json());
        this.server =  new ApolloServer({ schema: schema, });
        dotenv.config({path: envPath});
        const mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
        mongoose.connect(mongoUrl).then(() => console.log('mongodb connected!!!')).catch(error => {console.log(error); process.exit(1)});
    }

    async listen(){
        await this.server.start();
        this.app.use("/graphql", expressMiddleware(this.server));
        this.httpServer.listen(4000, () => console.log("server running"));
    }
}


const server = new Server();
server.listen()
    .then()
    .catch(error => {
        console.log(error);
        process.exit(1);
    });

    
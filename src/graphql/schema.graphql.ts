import * as fs from 'fs';
import * as path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolver/index.resolver';

//read all graphql typeDefs file
let typeDefs = '';

//read all files from typeDefs directory
const filePath = path.join(__dirname, './typedef');
const isExist = fs.existsSync(filePath);
if(isExist){
    const files = fs.readdirSync(filePath, {encoding: 'utf-8'});
    files.forEach(file => {
        typeDefs+= fs.readFileSync(path.join(filePath, file), {encoding: 'utf8'});
    });
}


const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers,
});


export {schema};
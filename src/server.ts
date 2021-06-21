import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';

import schema from './graphql/schemasMap';
import { router } from './routes';

import './database';

const app = express();

app.use(express.json());

// REST
app.use(router);

// GraphQL
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
const server = new ApolloServer({
    uploads: false,
    schema,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3333, () => console.log('Server is running'));

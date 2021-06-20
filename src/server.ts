import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './graphql/schemasMap';
import { router } from './routes';

const app = express();

app.use(express.json());

// REST
app.use(router);

// GraphQL

const server = new ApolloServer({
    schema,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3333, () => console.log('Server is running'));

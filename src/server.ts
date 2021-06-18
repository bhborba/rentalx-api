import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './graphql/schemasMap';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
const server = new ApolloServer({
    schema,
});

server.applyMiddleware({ app, path: '/graphql' });

app.use(categoriesRoutes);

app.listen(3333, () => console.log('Server is running'));

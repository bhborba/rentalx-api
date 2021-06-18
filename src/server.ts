import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from './graphql/schemasMap';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

// REST
app.use(express.json());
app.use('/categories', categoriesRoutes);

// GraphQL
const server = new ApolloServer({
    schema,
});
server.applyMiddleware({ app, path: '/graphql' });

app.listen(3333, () => console.log('Server is running'));

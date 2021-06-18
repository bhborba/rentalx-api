/* eslint-disable import/no-extraneous-dependencies */
import 'graphql-import-node';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolverMap';
import * as categoryTypeDefs from './schemas/category.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDefs, categoryTypeDefs],
    resolvers,
});

export default schema;

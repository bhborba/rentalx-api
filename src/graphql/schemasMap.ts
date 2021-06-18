import 'graphql-import-node';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolverMap';
import * as categoryTypeDefs from './schemas/category.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import * as specificationTypeDefs from './schemas/specification.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDefs, categoryTypeDefs, specificationTypeDefs],
    resolvers,
});

export default schema;

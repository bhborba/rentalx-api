import 'graphql-import-node';

import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import * as categoryTypeDefs from '../modules/cars/schema/category.graphql';
import * as specificationTypeDefs from '../modules/cars/schema/specification.graphql';
import resolvers from './resolverMap';
import * as emptyTypeDefs from './schemas/empty.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [emptyTypeDefs, categoryTypeDefs, specificationTypeDefs],

    resolvers,
});

export default schema;

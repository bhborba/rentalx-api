import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import { CategoryResolvers } from './resolvers/CategoryResolver';
import { SpecificationResolvers } from './resolvers/SpecificationResolver';

const resolverMap: IResolvers = merge(
    CategoryResolvers,
    SpecificationResolvers,
);
export default resolverMap;

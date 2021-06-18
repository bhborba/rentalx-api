// eslint-disable-next-line import/no-extraneous-dependencies
import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import { CategoryResolvers } from './resolvers/CategoryResolver';

const resolverMap: IResolvers = merge(CategoryResolvers);
export default resolverMap;

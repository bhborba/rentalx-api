import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import carsResolverMap from '../modules/cars/useCases/carsResolverMap';

const resolverMap: IResolvers = merge(carsResolverMap);

export default resolverMap;

import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import carsResolverMap from '../modules/cars/useCases/carsResolverMap';
import { UploadFIleResolver } from './resolvers/UploadFileResolver';

const resolverMap: IResolvers = merge(carsResolverMap, UploadFIleResolver);

export default resolverMap;

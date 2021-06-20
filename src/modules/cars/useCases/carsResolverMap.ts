import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

import { createCategoryResolver } from './createCategory';
import { createSpecificationResolver } from './createSpecification';
import { listCategoriesResolver } from './listCategories';

const carsResolverMap: IResolvers = merge(
    createCategoryResolver,

    listCategoriesResolver,

    createSpecificationResolver,
);

export default carsResolverMap;

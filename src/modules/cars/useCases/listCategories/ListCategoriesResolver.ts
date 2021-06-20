import { IResolvers } from 'graphql-tools';

import { listCategoriesUseCase } from '.';
import { Category } from '../../../../graphql/generated';

export const ListCategoriesResolver: IResolvers = {
    Query: {
        async listCategories(): Promise<Category[]> {
            const categories = listCategoriesUseCase.execute();

            return categories;
        },
    },
};

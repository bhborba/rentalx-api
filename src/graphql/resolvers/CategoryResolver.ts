// eslint-disable-next-line import/no-extraneous-dependencies
import { IResolvers } from 'graphql-tools';

import { Category as CategoryModel } from '../../model/Category';
import { Category, MutationCreateCategoryArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

const categories = [];

export const CategoryResolvers: IResolvers = {
    Date: dateScalar,
    Mutation: {
        async createCategory(
            _: void,
            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            const category = new CategoryModel();

            Object.assign(category, {
                name,
                description,
                created_at: new Date(),
            });

            categories.push(category);

            return category;
        },
    },
};

// eslint-disable-next-line import/no-extraneous-dependencies
import { IResolvers } from 'graphql-tools';

import { Category, MutationCreateCategoryArgs } from '../generated';

const categories = [];

export const CategoryResolvers: IResolvers = {
    Mutation: {
        async createCategory(
            _: void,
            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            categories.push({
                name,
                description,
            });

            return {
                name,
                description,
            };
        },
    },
};

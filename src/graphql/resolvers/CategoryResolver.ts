// eslint-disable-next-line import/no-extraneous-dependencies
import { IResolvers } from 'graphql-tools';
import { v4 as uuidv4 } from 'uuid';

import { Category, MutationCreateCategoryArgs } from '../generated';

const categories = [];

export const CategoryResolvers: IResolvers = {
    Mutation: {
        async createCategory(
            _: void,
            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            const category = {
                name,
                description,
                id: uuidv4(),
            };

            categories.push(category);

            return category;
        },
    },
};

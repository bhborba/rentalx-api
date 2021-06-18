import { ValidationError } from 'apollo-server-express';
import { IResolvers } from 'graphql-tools';

import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { Category, MutationCreateCategoryArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

const categoriesRepository = new CategoriesRepository();

export const CategoryResolvers: IResolvers = {
    Date: dateScalar,

    Mutation: {
        async createCategory(
            _: void,
            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            const categoryAlreadyExists = categoriesRepository.findByName(name);

            if (categoryAlreadyExists) {
                throw new ValidationError(`Category ${name} already exists`);
            }

            const category = categoriesRepository.create({ name, description });

            return category;
        },
    },

    Query: {
        async listCategories(): Promise<Category[]> {
            const categories = categoriesRepository.list();

            return categories;
        },
    },
};

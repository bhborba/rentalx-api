import { IResolvers } from 'graphql-tools';

import { createCategoryUseCase } from '.';
import {
    Category,
    MutationCreateCategoryArgs,
} from '../../../../graphql/generated';
import { dateScalar } from '../../../../graphql/scalars/dateScalar';

export const CreateCategoryResolver: IResolvers = {
    Date: dateScalar,

    Mutation: {
        async createCategory(
            _: void,

            args: MutationCreateCategoryArgs,
        ): Promise<Category> {
            const { name, description } = args;

            const category = createCategoryUseCase.execute({
                name,

                description,
            });

            return category;
        },
    },
};

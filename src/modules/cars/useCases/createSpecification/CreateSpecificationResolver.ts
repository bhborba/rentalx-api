import { IResolvers } from 'graphql-tools';

import { createSpecificationUseCase } from '.';
import {
    Specification,
    MutationCreateSpecificationArgs,
} from '../../../../graphql/generated';
import { dateScalar } from '../../../../graphql/scalars/dateScalar';

export const CreateSpecificationResolver: IResolvers = {
    Date: dateScalar,

    Mutation: {
        async createSpecification(
            _: void,

            args: MutationCreateSpecificationArgs,
        ): Promise<Specification> {
            const { name, description } = args;

            const specification = createSpecificationUseCase.execute({
                name,

                description,
            });

            return specification;
        },
    },
};

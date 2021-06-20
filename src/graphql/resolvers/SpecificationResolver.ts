import { IResolvers } from 'graphql-tools';

import { createSpecificationUseCase } from '../../modules/cars/useCases/createSpecification';
import { Specification, MutationCreateSpecificationArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

export const SpecificationResolvers: IResolvers = {
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

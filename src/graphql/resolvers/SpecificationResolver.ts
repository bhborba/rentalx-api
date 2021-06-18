import { IResolvers } from 'graphql-tools';

import { SpecificationsRepository } from '../../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../../modules/cars/services/CreateSpecificationService';
import { Specification, MutationCreateSpecificationArgs } from '../generated';
import { dateScalar } from '../scalars/dateScalar';

const specificationsRepository = new SpecificationsRepository();

export const SpecificationResolvers: IResolvers = {
    Date: dateScalar,

    Mutation: {
        async createSpecification(
            _: void,
            args: MutationCreateSpecificationArgs,
        ): Promise<Specification> {
            const { name, description } = args;

            const createSpecificationService = new CreateSpecificationService(
                specificationsRepository,
            );
            const specification = createSpecificationService.execute({
                name,
                description,
            });

            return specification;
        },
    },
};

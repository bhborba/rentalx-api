import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationResolver } from './CreateSpecificationResolver';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
);

const createSpecificationResolver = CreateSpecificationResolver;

export {
    createSpecificationUseCase,
    createSpecificationController,
    createSpecificationResolver,
};

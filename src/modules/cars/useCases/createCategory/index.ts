import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryResolver } from './CreateCategoryResolver';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
);

const createCategoryResolver = CreateCategoryResolver;

export {
    createCategoryController,
    createCategoryUseCase,
    createCategoryResolver,
};

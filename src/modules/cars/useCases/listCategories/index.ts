import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesContoller } from './ListCategoriesContoller';
import { ListCategoriesResolver } from './ListCategoriesResolver';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesContoller(
    listCategoriesUseCase,
);
const listCategoriesResolver = ListCategoriesResolver;

export {
    listCategoriesController,
    listCategoriesUseCase,
    listCategoriesResolver,
};

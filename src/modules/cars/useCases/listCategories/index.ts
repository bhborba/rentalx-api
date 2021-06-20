import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesContoller } from './ListCategoriesContoller';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesContoller(
    listCategoriesUseCase,
);

export { listCategoriesController, listCategoriesUseCase };

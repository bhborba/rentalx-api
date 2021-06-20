import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesContoller } from './listCategoriesContoller';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesContoller(
    listCategoriesUseCase,
);

export { listCategoriesController, listCategoriesUseCase };

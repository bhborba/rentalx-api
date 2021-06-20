import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesContoller } from './listCategoriesContoller';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesContoller(
    listCategoriesUseCase,
);

export { listCategoriesController, listCategoriesUseCase };

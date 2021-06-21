import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryResolver } from './ImportCategoryResolver';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
);

const importCategoryResolver = ImportCategoryResolver;

export {
    importCategoryController,
    importCategoryUseCase,
    importCategoryResolver,
};

import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryResolver } from './ImportCategoryResolver';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
);

const importCategoryResolver = ImportCategoryResolver;

export {
    importCategoryController,
    importCategoryUseCase,
    importCategoryResolver,
};

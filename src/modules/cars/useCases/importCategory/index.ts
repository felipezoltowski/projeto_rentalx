import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCagetoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
    importCagetoryUseCase
);

export { importCategoryController };

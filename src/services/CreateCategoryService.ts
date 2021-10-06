import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
/**
 * [x] - Definir tipo de retorno
 * [x] - Alterar retorno de erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */

/**
 * Realiza o processamento da rota e valida campos
 */
class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

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
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };

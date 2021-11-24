import { Category } from "../entities/Category";

/**
 * Contrato do repositório, implementa novas interfaces para uso
 * SubTipo do repositório pai
 */

// DTO - Data transfer Object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): void;
    findByName(name: string): Category;
    list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };

import { Category } from "../infra/typeorm/entities/Category";

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
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };

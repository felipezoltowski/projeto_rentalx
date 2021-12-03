import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

/**
 * Repositório Pai, serve de modelo para novas implementações
 */

// Singleton Pattern
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async findByName(name: string): Promise<Category> {
        // Select * from category where name = "name" limit 1
        const category = this.repository.findOne({ name });
        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
}

export { CategoriesRepository };

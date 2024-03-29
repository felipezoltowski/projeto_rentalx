/**
 * Repositório Pai, serve de modelo para novas implementações
 */

import { getRepository, Repository } from "typeorm";

import { Specification } from "../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../../../repositories/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name,
        });
        return specification;
    }

    /* list(): Specification[] {
        return this.specifications;
    } */
}

export { SpecificationsRepository };

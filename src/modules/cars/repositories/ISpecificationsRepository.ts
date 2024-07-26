import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

/**
 * Contrato do repositório, implementa novas interfaces para uso
 * SubTipo do repositório pai
 */

// DTO - Data transfer Object
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };

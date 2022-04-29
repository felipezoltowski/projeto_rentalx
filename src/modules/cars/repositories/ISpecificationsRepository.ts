import { Specification } from "../entities/Specification";

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
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
    // list(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };

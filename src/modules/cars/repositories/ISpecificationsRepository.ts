import { Specification } from "../model/Specification";

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
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string);
    list(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };

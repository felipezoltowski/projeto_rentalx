import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private SpecificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const SpecificationAlreadyExists =
            this.SpecificationsRepository.findByName(name);
        if (SpecificationAlreadyExists) {
            throw new Error("Specification Already Exists!");
        }
        this.SpecificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };

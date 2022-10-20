import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
/**
 * Contrato do repositório, implementa novas interfaces para uso
 * SubTipo do repositório pai
 */

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    // findByName(name: string): Promise<User>;
    // list(): User[];
}

export { IUsersRepository, ICreateUserDTO };

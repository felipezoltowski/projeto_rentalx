import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
/**
 * Contrato do repositório, implementa novas interfaces para uso
 * SubTipo do repositório pai
 */

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    // list(): User[];
}

export { IUsersRepository, ICreateUserDTO };

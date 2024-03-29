import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        password,
        driver_license,
        id,
        avatar,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
            id,
            avatar,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }
    // findByName(name: string): Promise<User> {
    //     throw new Error("Method not implemented.");
    // }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository };

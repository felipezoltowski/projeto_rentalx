import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    // Bearer
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "68ed38dc744a3eaa8efd5dfb2848b6e0"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User  does not exists!", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid Token", 401);
    }
}

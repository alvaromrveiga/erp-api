import { User } from "../entities/User";

export type UserWithoutPassDto = Omit<User, "password">;

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  Matches,
  MinLength,
} from "class-validator";
import { User } from "../entities/User";
import { Roles } from "@prisma/client";

export class CreateUserDto implements User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: "Password must have length of at least 8" })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/, {
    message: "Password must contain at least 1 number and 1 letter",
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(Roles)
  role: Roles;

  @IsUUID("4")
  departmentId: string;

  constructor(data: CreateUserDto) {
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.role = data.role;
    this.departmentId = data.departmentId;
  }
}

import { IsNotEmpty, IsString } from "class-validator";

export class LoginCredentialsDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(data: LoginCredentialsDto) {
    this.email = data.email;
    this.password = data.password;
  }
}

import { IsNotEmpty, IsString } from "class-validator";
import { Department } from "../entities/Department";

export class CreateDepartmentDto implements Department {
  @IsNotEmpty()
  @IsString()
  department: string;

  constructor(data: CreateDepartmentDto) {
    this.department = data.department;
  }
}

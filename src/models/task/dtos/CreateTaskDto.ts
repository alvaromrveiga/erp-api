import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { Task } from "../entities/Task";

export class CreateTaskDto implements Task {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsDateString()
  @IsOptional()
  dueDate?: string | Date;

  @IsUUID("4")
  @IsOptional()
  userId?: string;

  @IsUUID("4")
  departmentId: string;

  constructor(data: CreateTaskDto) {
    this.description = data.description;
    this.dueDate = data.dueDate;
    this.userId = data.userId;
    this.departmentId = data.departmentId;
  }
}

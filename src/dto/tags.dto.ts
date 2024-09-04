import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class TagsDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  id: string | number;
}

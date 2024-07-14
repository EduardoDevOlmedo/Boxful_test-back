import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';

export class PackageStateDTO {
  @IsNotEmpty()
  @IsString()
  length: string;

  @IsNotEmpty()
  @IsString()
  height: string;

  @IsNotEmpty()
  @IsString()
  width: string;

  @IsNotEmpty()
  @IsString()
  weight: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}

export class FormStateDTO {
  @IsNotEmpty()
  @IsString()
  collectionAddress: string;

  @IsNotEmpty()
  @IsString()
  scheduledDate: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  referencePoint: string;

  @IsNotEmpty()
  @IsString()
  instructions: string;

  @IsNotEmpty()
  @Matches(/^\+\d{3}\s\d{4}-?\d{4}$/)
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  municipality: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => PackageStateDTO)
  packages: PackageStateDTO[];
}

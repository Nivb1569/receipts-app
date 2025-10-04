import { IsString, MinLength } from 'class-validator'

export class CreateCustomerDto {
  @IsString()
  @MinLength(2)
  name: string

  @IsString()
  @MinLength(4)
  address: string
}

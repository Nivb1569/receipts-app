import { Type } from 'class-transformer'
import { IsInt, Min } from 'class-validator'

export class GetCustomerProductsParamsDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  customerId: number
}

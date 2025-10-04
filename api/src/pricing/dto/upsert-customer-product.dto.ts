import { Type } from 'class-transformer'
import { IsInt, Min, IsNumber } from 'class-validator'

export class UpsertCustomerProductDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  customerId: number

  @Type(() => Number)
  @IsInt()
  @Min(1)
  productId: number

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number
}

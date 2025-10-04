import { IsInt, Min } from 'class-validator'
import { Type } from 'class-transformer'

export class GetCustomerParamsDto {
  @Type(() => Number) // ממיר את המחרוזת ל-number (דורש transform: true ב-ValidationPipe)
  @IsInt()
  @Min(1)
  id: number
}

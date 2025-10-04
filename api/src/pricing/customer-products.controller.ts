import { Controller, Get, Param, Put, Body } from '@nestjs/common'
import { CustomerProductsService } from './customer-products.service'
import { GetCustomerProductsParamsDto } from './dto/get-customer-products.params'
import { UpsertCustomerProductDto } from './dto/upsert-customer-product.dto'

@Controller('customer-products')
export class CustomerProductsController {
  constructor(private readonly customerProductsService: CustomerProductsService) {}

  // GET /customer-products/customer/:customerId
  @Get('customer/:customerId')
  listForCustomer(@Param() params: GetCustomerProductsParamsDto) {
    return this.customerProductsService.findForCustomer(params.customerId)
  }

  // PUT /customer-products
  @Put()
  upsert(@Body() dto: UpsertCustomerProductDto) {
    return this.customerProductsService.upsert(dto)
  }
}


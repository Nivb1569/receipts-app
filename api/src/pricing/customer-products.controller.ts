import { Controller, Get, Param } from '@nestjs/common'
import { CustomerProductsService } from './customer-products.service'
import { GetCustomerProductsParamsDto } from './dto/get-customer-products.params'

@Controller('customer-products')
export class CustomerProductsController {
  constructor(private readonly customerProductsService: CustomerProductsService) {}

  // GET /customer-products/customer/:customerId
  @Get()
  ping() { return { ok: true } }

  @Get('customer/:customerId')
  listForCustomer(@Param() params: GetCustomerProductsParamsDto) {
    return this.customerProductsService.findForCustomer(params.customerId)
  }
}


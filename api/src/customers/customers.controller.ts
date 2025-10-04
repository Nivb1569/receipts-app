import { Controller, Get, Post, Param, Body, Patch, Delete, Query } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto'
import { CustomersService } from './customers.service';
import { ListCustomersDto } from './dto/list-customers.dto'
import { GetCustomerParamsDto } from './dto/get-customer.params';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    @Get() // GET /customers
    findAll(@Query() _query: ListCustomersDto ) {
        return this.customersService.findAll();
    }

    @Get(':id') // GET /customers/:id
    findOne(@Param() params : GetCustomerParamsDto) {
        return this.customersService.findOne(params.id);
    }

    @Post() // POST /customers
    create(@Body() dto: CreateCustomerDto) {
        return this.customersService.create(dto)
    }

    @Patch(':id') // PATCH /customers/:id
    update(@Param('id') id : string, @Body() userUpdate: object) {
        return { id, ...userUpdate }
    }

    @Delete(':id') // DELETE /customers/:id
    delete(@Param('id') id : string) {
        return { id }
    }
}

import { Controller, Get, Post, Param, Body, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import {ProductsService} from './products.service';
import {GetProductParamsDto} from './dto/get-product.dto'
import {CreateProductDto} from './dto/create-product.dto'
import {UpdateProductDto} from './dto/update-product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get(':id') // GET /products/:id
        findOne(@Param() params : GetProductParamsDto) {
            return this.productsService.findOne(params.id);
        }

    @Post() // POST /products
    create(@Body() dto: CreateProductDto) {
        return this.productsService.create(dto)
    }

    @Patch(':id') // PATCH /products/:id
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
        return this.productsService.update(id, dto)
    }   

    @Delete(':id') // DELETE /products/:id
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.remove(id)
    }
    
}

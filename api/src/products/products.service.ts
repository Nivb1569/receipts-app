import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma:PrismaService) {}

    async findOne(id: number) {
        const product = await this.prisma.product.findUnique({ where: { id } })
        if (!product) throw new NotFoundException('Product not found')
            return product
    }

    async create(dto: CreateProductDto) {
        return this.prisma.product.create({
            data : dto },)
    }

    async update(id: number, data: UpdateProductDto) {
        await this.findOne(id)
        return this.prisma.product.update({ where: { id }, data })
    }

    async remove(id : number) {
        await this.findOne(id)
        return this.prisma.product.delete({where : {id} })
    }
}

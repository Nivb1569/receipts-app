import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { NotFoundException } from '@nestjs/common'
import { UpdateCustomerDto } from './dto/update-customer.dto'

@Injectable()
export class CustomersService {
    constructor(private readonly prisma:PrismaService) {}
    
    async create(dto: CreateCustomerDto) {
        return this.prisma.customer.create({
            data : dto },)
    }

    async findAll() {
        return this.prisma.customer.findMany({ orderBy: { id: 'asc' } })
    }

    async findOne(id: number) {
        const customer = await this.prisma.customer.findUnique({ where: { id } })
        if (!customer) throw new NotFoundException('Customer not found')
            return customer
    }

    async update(id: number, data: UpdateCustomerDto) {
        await this.findOne(id)
        return this.prisma.customer.update({ where: { id }, data })
    }

    async remove(id : number) {
        await this.findOne(id)
        return this.prisma.customer.delete({where : {id} })
    }
}
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { UpsertCustomerProductDto } from './dto/upsert-customer-product.dto'

@Injectable()
export class CustomerProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findForCustomer(customerId: number) {
    const rows = await this.prisma.customerProduct.findMany({
      where: { customerId },
      include: { product: true },
      orderBy: { productId: 'asc' },
    })

    return rows.map(r => ({
      productId: r.productId,
      productName: r.product.name,
      price: r.price,
    }))
  }

  async upsert({ customerId, productId, price }: UpsertCustomerProductDto) {
        try {
        const numericPrice = typeof price === 'string' ? parseFloat(price) : price

        return await this.prisma.customerProduct.upsert({
            where: { customerId_productId: { customerId, productId } },
            update: { price: numericPrice },
            create: { customerId, productId, price: numericPrice },
            include: {
            customer: { select: { id: true, name: true } },
            product: { select: { id: true, name: true } },
            },
        })
        } catch (e: unknown) {
        if (typeof e === 'object' && e !== null && 'code' in e) {
            const error = e as { code?: string; message?: string }
            if (error.code === 'P2003') {
            throw new NotFoundException('Customer or Product not found')
            }
            if (error.code === 'P2025') {
            throw new NotFoundException('Record not found')
            }
            throw new BadRequestException(error.message || 'Failed to upsert customer product')
        }
        throw new BadRequestException('Failed to upsert customer product')
        }
    }
}

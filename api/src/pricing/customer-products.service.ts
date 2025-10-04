import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

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
}

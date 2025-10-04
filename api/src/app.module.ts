import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { BillsModule } from './bills/bills.module'
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaModule, BillsModule, CustomersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

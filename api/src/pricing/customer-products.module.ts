import { Module } from '@nestjs/common';
import { CustomerProductsController } from './customer-products.controller';
import { CustomerProductsService } from './customer-products.service';

@Module({
  controllers: [CustomerProductsController],
  providers: [CustomerProductsService]
})
export class CustomerProductsModule {}

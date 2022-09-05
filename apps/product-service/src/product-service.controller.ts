import 'reflect-metadata'
import {
  Controller,
  Get
} from '@nestjs/common';
import { ProductService } from './product-service.service';

import { MessagePattern } from '@nestjs/microservices';
import { IGetProducts } from './meta/product';
import { Product } from '@app/entity/Product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @MessagePattern('get_products')
  async getProducts(query: IGetProducts): Promise<[Product[], number]> {
    return this.productService.gets(query);
  }
}

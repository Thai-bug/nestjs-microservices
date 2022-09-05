import 'reflect-metadata'
import {
  Controller,
  Get
} from '@nestjs/common';
import { ProductService } from './product-service.service';

import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @MessagePattern('get_products')
  async getProducts(data: any) {
    return this.productService.gets();
  }
}

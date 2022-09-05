import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('v1/products')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }

  @Get()
  async index() {
    const response = (await this.productService.getProducts());

    return response;
  }
}
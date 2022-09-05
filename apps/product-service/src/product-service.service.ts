import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from 'libs/entity/src/Product.entity';
import { IGetProducts } from './meta/product';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }
  async gets(query: IGetProducts): Promise<[Product[], number]> {
    console.log(query)
    const model = this.productRepository
      .createQueryBuilder('product')

    if (query.title) {
      model.andWhere('product.title ILIKE :title', { title: `%${query.title}%` })
    }

    if (query.status) {
      model.andWhere('product.status = :status', { status: query.status })
    }

    return model.getManyAndCount();
  }
}

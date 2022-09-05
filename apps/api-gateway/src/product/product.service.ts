import { Inject, Injectable } from "@nestjs/common";
import {
  ClientProxy
} from '@nestjs/microservices';
import {
  firstValueFrom
} from 'rxjs'

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
  ) { }

  async getProducts(): Promise<string> {
    return await firstValueFrom(this.client.send('get_products', {
      title: 'h',
      status: 2
    }));
  }
}
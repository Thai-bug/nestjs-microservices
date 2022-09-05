import {
  TypeOrmModule,
} from '@nestjs/typeorm'

import {
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices';


import { Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigService
} from '@nestjs/config'

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Product } from 'libs/entity/src/Product.entity';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 9013,
      username: 'thai-bug',
      password: '12022021',
      database: 'dev',
      entities: [Product]
    })
  ],
  controllers: [ProductController],
  providers: [ProductService,
    {

      provide: 'PRODUCT_SERVICE',
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'products_queue',
            queueOptions: {
              durable: false
            },
          },
        }),
    }]

})
export class ApiGatewayModule {}

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
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { Role, User } from '@app/entity/User.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
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
      entities: [Product, User, Role]
    }),
    TypeOrmModule.forFeature([Product, User, Role])
  ],
  controllers: [
    ProductController,
    UserController,
    AuthController
  ],
  providers: [
    ProductService,
    UserService,
    AuthService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://35.240.138.31:5672'],
            queue: 'products_queue',
            queueOptions: {
              durable: false
            },
          },
        }),
    },
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://35.240.138.31:5672'],
            queue: 'users_queue',
            queueOptions: {
              durable: false
            },
          },
        }),
    },
    {
      provide: 'AUTH_SERVICE',
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://35.240.138.31:5672'],
            queue: 'auth_queue',
            queueOptions: {
              durable: false
            },
          },
        }),
    },
  ]

})
export class ApiGatewayModule { }

import { Module } from '@nestjs/common';
import { Product } from 'libs/entity/src/Product.entity';
import { ProductController } from './product-service.controller';
import { ProductService } from './product-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entity/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 9013,
      username: 'thai-bug',
      password: '12022021',
      database: 'dev',
      entities: [Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController],
  providers: [ProductService],
  
})
export class ProductServiceModule {}

import { Role, User } from '@app/entity/User.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user-service.controller';
import { UserService } from './user-service.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 9013,
      username: 'thai-bug',
      password: '12022021',
      database: 'dev',
      entities: [Role, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Role])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }

import { User } from '@app/entity/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly productRepository: Repository<User>,
  ) { }
  getHello(): string {
    return 'Hello World!';
  }
}

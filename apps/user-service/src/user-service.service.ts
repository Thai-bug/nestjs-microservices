import { User } from '@app/entity/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }
  async getHello() {
    console.log(await this.userRepository.find({
      where: {
        id: 1
      }
    }))
    return 'Hello World!';
  }
}

import { User } from '@app/entity/User.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';


import { ILogin } from './meta/login';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly productRepository: Repository<User>,
  ) { }

  async validateUser(body: ILogin): Promise<any> {
    const user = await this.productRepository.findOne({
      where: {
        email: body.email
      }
    });
    const isValidate = await bcrypt.compare(body.password, user.password)

    return isValidate;
  }
}

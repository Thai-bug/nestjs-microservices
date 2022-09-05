import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user-service.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern('get_users')
  getHello(data: any) {
    return this.userService.getHello();
  }
}

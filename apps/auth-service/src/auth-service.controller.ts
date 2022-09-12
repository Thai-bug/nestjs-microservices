import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth-service.service';
import { ILogin } from './meta/login';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern('login')
  async login(data: ILogin) {
    const isValidate = await this.authService.validateUser(data);
    return isValidate;
  }
}

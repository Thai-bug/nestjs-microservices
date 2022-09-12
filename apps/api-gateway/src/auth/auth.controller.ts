import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('login')
  async loginUser(
    @Body() body
  ) {
    
    const result = await this.authService.validateUser(body);
    return result
  }
}
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly client: ClientProxy
  ) { }

  async getUsers() {
    const response = await firstValueFrom(this.client.send('get_users', ''));
    return "Hello World!";
  }
}
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";


@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly client: ClientProxy
  ) { }

  async validateUser(body: any): Promise<any> {
    const user = { ...body };
    return await firstValueFrom(this.client.send('login', user));
    // if (user && user.password === pass) {
    //   return user;
    // }
    // return null;
  }
}
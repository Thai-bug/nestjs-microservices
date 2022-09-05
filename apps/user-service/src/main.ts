import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserModule } from './user-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://localhost:5672"],
      queue: "users_queue",
      queueOptions: {
        durable: false
      }
    }
  });

  app.listen();
}
bootstrap();

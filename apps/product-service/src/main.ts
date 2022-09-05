import { NestFactory } from "@nestjs/core";
import {
  MicroserviceOptions,
  Transport
}
  from "@nestjs/microservices";
import { ProductServiceModule } from "./product-service.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductServiceModule, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://localhost:5672"],
      queue: "products_queue",
      queueOptions: {
        durable: false
      }
    }
  });

  app.listen();
  console.log('Product service is listening')
}

bootstrap()
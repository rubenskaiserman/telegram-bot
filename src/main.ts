import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { urlencoded, json } from "express";
import { Logger, ValidationPipe } from "@nestjs/common";
import { swagger } from "./config/swagger.config";

async function bootstrap() {
  const logger = new Logger("Bootstrap");

  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: "20mb" }));
  app.use(urlencoded({ extended: true, limit: "20mb" }));

  app.enableCors({
    origin: true, // TODO: Build a function here to validate if the origin is allowed
    allowedHeaders: [
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Content-Length",
      "Accept",
    ],
    methods: "GET,HEAD,OPTIONS,PATCH,POST,DELETE",
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());

  const swaggerDoc = swagger(app);

  app.use("/docs/swagger.json", (req: any, res: any, next: any) => res.send(swaggerDoc));

  const port = process.env.PORT || 3001;
  await app.listen(port);
  const url = `http://localhost:${port}`;
  logger.log(`Application listening on ${url} .`);
  logger.log(`Find this API documentation at ${url}/docs/ .`);
}
bootstrap();
import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle("Telegram Bot")
    .setExternalDoc("Swagger JSON", "/docs/swagger.json")
    .setDescription("API para meu bot do telegram")
    .setVersion("0.1")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);

  return document;
};
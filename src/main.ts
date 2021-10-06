import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  initSwagger(app)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { getDocApiVersion, getUrlApiVersion } from './utils/proyect-version';

/**
 * Generates the API documentation complying with the OpenAPI specification
 * @param app Nestjs Application
 */
export const initSwagger = (app: INestApplication) => {
    const urlApiVersion = getUrlApiVersion()
    const docApiVersion = getDocApiVersion()

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Flowers Ecommerce API')
        .setDescription('Flower & Gardening Ecommerce API REST.')
        .setVersion(docApiVersion)
        .build();
    
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    const setupOptions = {
        customSiteTitle: 'Flowers Ecommerce API',
        customCss: `.topbar-wrapper img[alt="Swagger UI"] {
            visibility: hidden;
        }`
    };
    SwaggerModule.setup(`/api/${urlApiVersion}/docs`, app, document, setupOptions);
};
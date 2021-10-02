import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { join } from 'path';

const {
  DATABASE_TYPE,
  RDS_HOSTNAME,
  RDS_PORT,
  RDS_USERNAME,
  RDS_PASSWORD,
  RDS_DB_NAME
} = process.env

console.log(process.env)

@Module({
  imports: [
    CategoriesModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: DATABASE_TYPE as any,
      host: RDS_HOSTNAME,
      port: parseInt(RDS_PORT),
      username: RDS_USERNAME,
      password: RDS_PASSWORD,
      database: RDS_DB_NAME,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      autoLoadEntities: true,
      migrationsRun: true,
      migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
      migrationsTableName: 'migrations_typeorm',
      cli: {
        migrationsDir: 'src/migration',
      },
      synchronize: false,
    }),
  ],
})
export class AppModule {}

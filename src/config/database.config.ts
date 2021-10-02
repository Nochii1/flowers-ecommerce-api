import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
    const {
        DATABASE_TYPE,
        RDS_HOSTNAME,
        RDS_PORT,
        RDS_USERNAME,
        RDS_PASSWORD,
        RDS_DB_NAME
    } = process.env

    console.log(process.env)

    return {
        type: DATABASE_TYPE as any,
        host: RDS_HOSTNAME,
        port: parseInt(RDS_PORT),
        username: RDS_USERNAME,
        password: RDS_PASSWORD,
        database: RDS_DB_NAME,
        entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
        autoLoadEntities: true,
        migrationsRun: true,
        migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
        migrationsTableName: 'migrations_typeorm',
        cli: {
            migrationsDir: 'src/migration',
        },
        synchronize: true,
    }
}

export default registerAs('database', () => ({
    config: typeormModuleOptions()
}));
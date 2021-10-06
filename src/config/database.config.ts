import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function typeormModuleOptions(): TypeOrmModuleOptions {
    const {
        DATABASE_TYPE,
        DATABASE_HOSTNAME,
        DATABASE_PORT,
        DATABASE_USERNAME,
        DATABASE_PASSWORD,
        DATABASE_NAME
    } = process.env
    console.log("PROCESS.ENV: ",process.env)
    return {
        type: DATABASE_TYPE as any,
        host: DATABASE_HOSTNAME,
        port: parseInt(DATABASE_PORT),
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
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
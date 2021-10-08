import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

/**
 * Load from the environment variables the configuration for the database typeorm connection
 * @returns Configuration options for typeorm connection
 */
const typeormModuleOptions = (): TypeOrmModuleOptions  => {
    const {
        DATABASE_TYPE,
        DATABASE_HOSTNAME,
        DATABASE_PORT,
        DATABASE_USERNAME,
        DATABASE_PASSWORD,
        DATABASE_NAME
    } = process.env

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
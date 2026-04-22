import path from 'path';
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: 'public',
        ssl: false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: 60000,
    },
  };
};

export default config;
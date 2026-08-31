import 'dotenv/config';
import  env  from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DATABASE_URL : env.get('DATABASE_URL').required().asString(),
    DATABASE_NAME: env.get('DATABASE_NAME').required().asString(),
    JWT_SEEDER: env.get('JWT_SEEDER').required().asString(),

    MAILERSERVICE : env.get('MAILERSERVICE').required().asString(),
    MAILERUSER    :env.get('MAILERUSER   ').required().asString(),
    MAILERPASS    : env.get('MAILERPASS   ').required().asString(),    
}

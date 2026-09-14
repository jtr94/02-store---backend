import 'dotenv/config';
import  env  from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DATABASE_URL : env.get('DATABASE_URL').required().asString(),
    DATABASE_NAME: env.get('DATABASE_NAME').required().asString(),
    BASE_URL: env.get('BASE_URL').required().asString(),
    JWT_SEEDER: env.get('JWT_SEEDER').required().asString(),

    SEND_EMAIL: env.get('SEND_EMAIL').default('true').asBool(),
    MAILERSERVICE: env.get('MAILERSERVICE').required().asString(),
    MAILERUSER:env.get('MAILERUSER').required().asString(),
    MAILERPASS: env.get('MAILERPASS').required().asString(),    
}

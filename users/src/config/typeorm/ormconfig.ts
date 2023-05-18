import { join } from 'path';
import { DataSource } from 'typeorm';
import 'dotenv/config';

const ormConfig = new DataSource({
  host: process.env.DB_HOST,
  type: 'postgres',
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '..', '..', 'entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '..', 'migrations/*{.ts,.js}')],
  synchronize: false,
});

export default ormConfig;

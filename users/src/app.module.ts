import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/typeorm/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig.options)],
})
export class AppModule {}

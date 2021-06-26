import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseBasicaController } from './controllers/base-basica.controller';
import { BaseBasicaEntity } from './models/base-basica.entity';
import { BaseBasicaService } from './services/base-basica.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaseBasicaEntity])],
  providers: [BaseBasicaService],
  controllers: [BaseBasicaController],
})
export class BaseBasicaModule {}

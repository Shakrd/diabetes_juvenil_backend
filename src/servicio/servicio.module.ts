import { Module } from '@nestjs/common';
import { ServicioService } from './services/servicio.service';
import { ServicioController } from './controllers/servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioEntity } from './models/servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicioEntity])],
  providers: [ServicioService],
  controllers: [ServicioController],
})
export class ServicioModule {}

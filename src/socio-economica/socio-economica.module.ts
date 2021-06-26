import { Module } from '@nestjs/common';
import { SocioEconomicaService } from './services/socio-economica.service';
import { SocioEconomicaController } from './controllers/socio-economica.controller';
import { SocioEconomicaEntity } from './models/socio_economica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SocioEconomicaEntity])],
  providers: [SocioEconomicaService],
  controllers: [SocioEconomicaController],
})
export class SocioEconomicaModule {}

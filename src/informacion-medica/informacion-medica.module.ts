import { Module } from '@nestjs/common';
import { InformacionMedicaService } from './services/informacion-medica.service';
import { InformacionMedicaController } from './controllers/informacion-medica.controller';
import { InformacionMedicaEntity } from './models/información_medica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InformacionMedicaEntity])],
  providers: [InformacionMedicaService],
  controllers: [InformacionMedicaController],
})
export class InformacionMedicaModule {}

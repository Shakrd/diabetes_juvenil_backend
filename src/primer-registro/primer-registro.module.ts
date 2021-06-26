import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrimerRegistroController } from './controllers/primer-registro.controller';
import { PrimerRegistroEntity } from './models/primer_registro.entity';
import { PrimerRegistroService } from './services/primer-registro.service';

@Module({
  imports: [TypeOrmModule.forFeature([PrimerRegistroEntity])],
  providers: [PrimerRegistroService],
  controllers: [PrimerRegistroController],
})
export class PrimerRegistroModule {}

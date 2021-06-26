import { Module } from '@nestjs/common';
import { TipoDiabetesService } from './services/tipo-diabetes.service';
import { TipoDiabetesController } from './controllers/tipo-diabetes.controller';
import { TipoDiabetesEntity } from './models/tipo_diabetes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDiabetesEntity])],
  providers: [TipoDiabetesService],
  controllers: [TipoDiabetesController],
})
export class TipoDiabetesModule {}

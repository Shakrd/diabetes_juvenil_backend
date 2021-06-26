import { Module } from '@nestjs/common';
import { SecAtenMedService } from './services/sec-aten-med.service';
import { SecAtenMedController } from './controllers/sec-aten-med.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecAtenMedEntity } from './models/sec_aten_med.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SecAtenMedEntity])],
  providers: [SecAtenMedService],
  controllers: [SecAtenMedController],
})
export class SecAtenMedModule {}

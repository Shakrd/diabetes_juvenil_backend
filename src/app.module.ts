import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
import { BaseBasicaModule } from './base-basica/base-basica.module';
import { PrimerRegistroModule } from './primer-registro/primer-registro.module';
import { InformacionMedicaModule } from './informacion-medica/informacion-medica.module';
import { SecAtenMedModule } from './sec-aten-med/sec-aten-med.module';
import { ServicioModule } from './servicio/servicio.module';
import { SocioEconomicaModule } from './socio-economica/socio-economica.module';
import { TipoDiabetesModule } from './tipo-diabetes/tipo-diabetes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // shouldn't be used in production - may lose data
    }),
    FeedModule,
    BaseBasicaModule,
    PrimerRegistroModule,
    InformacionMedicaModule,
    SecAtenMedModule,
    ServicioModule,
    SocioEconomicaModule,
    TipoDiabetesModule,
  ],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}

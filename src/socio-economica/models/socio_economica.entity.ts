import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('socioeconomica')
  export class SocioEconomicaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.socioEconomicas)
    primerRegistro: PrimerRegistroEntity;   

    

    
  }
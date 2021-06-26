import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('informacionmedica')
  export class InformacionMedicaEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    rangoEdad: string;

    @ManyToOne(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.informacionesMedicas)
    primerRegistro: PrimerRegistroEntity;

    
  }
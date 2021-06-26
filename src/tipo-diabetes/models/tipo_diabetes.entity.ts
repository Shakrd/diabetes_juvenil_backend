import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('tipodiabetes')
  export class TipoDiabetesEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    tipoDiabetes: string;

    @OneToMany(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.servicio)
    primerRegistros: PrimerRegistroEntity[];

    
  }
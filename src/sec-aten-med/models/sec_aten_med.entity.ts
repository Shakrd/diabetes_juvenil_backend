import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('secatenmed')
  export class SecAtenMedEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    descripcionSecAtenMed: string;

    @OneToMany(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.servicio)
    primerRegistros: PrimerRegistroEntity[];

    
  }
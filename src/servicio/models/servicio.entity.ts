import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('servicio')
  export class ServicioEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    descripcionServicio: string;

    
    @OneToMany(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.servicio)
    primerRegistros: PrimerRegistroEntity[];

    
  }
import { PrimerRegistroEntity } from 'src/primer-registro/models/primer_registro.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('base_basica')
  export class BaseBasicaEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ default: '' })
    cedula: string;

    @Column()
    lugarNacimiento: string;

    @Column()
    provincia: string;

    @Column()
    medicionGlucosa: string;

    @Column()
    automedicionGlucosa: boolean;

    @Column()
    registroEscrito: boolean;

    @Column()
    insulinaBasal: string;

    @Column()
    insulinaPrandial: string;

    @Column()
    dosisBasal: string;

    @Column()
    dosisPrandial: string;

    @Column()
    valUltHemGliHb1sc: string;

    @Column()
    fechUltHem: Date;

    @Column()
    convulsiones: boolean;

    @Column()
    nombreMedico: string;

    @Column()
    fechUltVisMed: Date;

    @Column()
    nombreMadre: string;

    @Column()
    cedulaMadre: string;

    @Column()
    telefonoMadre: string;

    @Column()
    nombrePadre: string;

    @Column()
    cedulaPadre: string;

    @Column()
    telefonoPadre?: string;
  
    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => PrimerRegistroEntity, (primerRegistroEntity) => primerRegistroEntity.basesBasicas)
    primerRegistro: PrimerRegistroEntity;
  }
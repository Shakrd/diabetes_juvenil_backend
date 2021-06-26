import { BaseBasicaEntity } from 'src/base-basica/models/base-basica.entity';
import { InformacionMedicaEntity } from 'src/informacion-medica/models/información_medica.entity';
import { SecAtenMedEntity } from 'src/sec-aten-med/models/sec_aten_med.entity';
import { ServicioEntity } from 'src/servicio/models/servicio.entity';
import { SocioEconomicaEntity } from 'src/socio-economica/models/socio_economica.entity';
import { TipoDiabetesEntity } from 'src/tipo-diabetes/models/tipo_diabetes.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('primer_regidtro')
export class PrimerRegistroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  cedula: string;

  @Column()
  apellidos: string;

  @Column()
  nombres: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  telefono: string;

  @Column()
  celular: string;

  @Column()
  correoElectronico: string;

  @Column()
  ciudadResidencia: string;

  @Column()
  fechaDigDiabetes: Date;

  @Column()
  nombreRepresentante: string;

  @Column()
  telefonoRepresentante: string;

  @Column()
  tiempoDiabetes: string;

  @Column()
  medioConFun: string;

  @Column()
  conexionInternet: string;

  @ManyToOne(() => ServicioEntity, (servicioEntity) => servicioEntity.primerRegistros)
  servicio: ServicioEntity;

  @ManyToOne(() => SecAtenMedEntity, (secAtenMedEntity) => secAtenMedEntity.primerRegistros)
  secAtenMEd: SecAtenMedEntity;

  @ManyToOne(() => TipoDiabetesEntity, (tipoDiabetesEntity) => tipoDiabetesEntity.primerRegistros)
  tipoDiabetes: TipoDiabetesEntity;

  @OneToMany(() => BaseBasicaEntity, (baseBasicaEntity) => baseBasicaEntity.primerRegistro)
  basesBasicas: BaseBasicaEntity[];

  @OneToMany(() => InformacionMedicaEntity, (informacionMedicaEntity) => informacionMedicaEntity.primerRegistro)
  informacionesMedicas: InformacionMedicaEntity[];  

  @OneToMany(() => SocioEconomicaEntity, (socioEconomicaEntity) => socioEconomicaEntity.primerRegistro)
  socioEconomicas: SocioEconomicaEntity[];

}
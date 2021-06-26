import { BaseBasica } from "src/base-basica/models/base_basica.interface";
import { InformacionMedicaEntity } from "src/informacion-medica/models/información_medica.entity";
import { InformaciónMedica } from "src/informacion-medica/models/información_medica.interface";
import { SecAtenMed } from "src/sec-aten-med/models/sec_aten_med.interface";
import { Servicio } from "src/servicio/models/servicio.interface";
import { SocioEconomica } from "src/socio-economica/models/socio_economica.interface";
import { TipoDiabetes } from "src/tipo-diabetes/models/tipo_diabetes.interface";

export interface PrimerRegistro {
    id?: number;
    apellidos?: string;
    nombres?: string;
    edad?: string;
	fechaNacimiento?: Date;
	telefono?: string;
	celular?: string;
    correoElectronico?: string;
    ciudadResidencia?: string;
	fechaDigDiabetes?: Date;
    nombreRepresentante?: string;
    telefonoRepresentante?: string;
    tiempoDiabetes?: string;
    medioConFun?: string;
    conexionInternet?: string;
    servicio?: Servicio;
    secAtenMEd?: SecAtenMed;
    tipoDiabetes?: TipoDiabetes;
    basesBasicas?: BaseBasica[];
    informacionesMedicas?: InformaciónMedica[];
    socioEconomicas?: SocioEconomica[];
  }
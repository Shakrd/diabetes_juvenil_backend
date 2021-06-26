import { PrimerRegistroEntity } from "src/primer-registro/models/primer_registro.entity";

export interface InformaciónMedica {
    id?: number;
    rangoEdad?: string;
    primerRegistro?: PrimerRegistroEntity;
    
  }
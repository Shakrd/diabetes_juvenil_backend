import { PrimerRegistro } from "src/primer-registro/models/primer_registro.interface";

export interface Servicio {
    id?: number;
    descripcionServicio?: string;
    primerosRegistros?: PrimerRegistro[];
    
  }
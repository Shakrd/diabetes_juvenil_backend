import { PrimerRegistro } from "src/primer-registro/models/primer_registro.interface";

export interface SecAtenMed {
    id?: number;
    descripcionSecAtenMed?: string;
    primerosRegistros?: PrimerRegistro[];
  }
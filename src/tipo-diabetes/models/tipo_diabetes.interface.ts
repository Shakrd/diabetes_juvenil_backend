import { PrimerRegistro } from "src/primer-registro/models/primer_registro.interface";

export interface TipoDiabetes {
    id?: number;
    tipoDiabetes?: string;
    primerosRegistros?: PrimerRegistro[];
    
  }
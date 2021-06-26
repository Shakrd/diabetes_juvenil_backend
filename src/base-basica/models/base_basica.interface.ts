import { PrimerRegistro } from "src/primer-registro/models/primer_registro.interface";

export interface BaseBasica {
    id?: number;
    cedula?: string;
    lugarNacimiento?: string;
    provincia?: string;
    medicionGlucosa?: string;
    automedicionGlucosa?: boolean;
    registroEscrito?: boolean;
    insulinaBasal?: string;
    insulinaPrandial?: string;
    dosisBasal?: string;
    dosisPrandial?: string;
    valUltHemGliHb1sc?: string;
    fechUltHem?: Date;
    convulsiones?: boolean;
    nombreMedico?: string;
    fechUltVisMed?: Date;
    nombreMadre?: string;
    cedulaMadre?: string;
    telefonoMadre?: string;
    nombrePadre?: string;
    cedulaPadre?: string;
    telefonoPadre?: string;
    primerRegistro?: PrimerRegistro;
    createdAt?: Date;
  }
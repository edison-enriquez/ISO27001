/** Estado de verificación de un contenido frente a su fuente documental. */
export type Procedencia =
  /** Contrastado con el texto oficial de ISO/IEC (edición en inglés). */
  | 'oficial'
  /** Elaboración propia: ejemplos, guías prácticas, interpretaciones. */
  | 'elaboracion-propia';

export interface Fuente {
  procedencia: Procedencia;
  /** Documento concreto contra el que se verificó, si lo hay. */
  documento?: string;
  /** Advertencia que debe mostrarse al lector en la propia página. */
  advertencia?: string;
}

export interface Seccion {
  /** Identificador de ruta, p. ej. "contexto". */
  slug: string;
  /** Rótulo corto para menús e índices. */
  rotulo: string;
  /** Título completo de la página. */
  titulo: string;
  descripcion: string;
  /**
   * Clave del contenido: un módulo de src/contenido cargado con ?raw,
   * o un marcador "@tema-N" / "@correspondencia" para tablas generadas
   * a partir de src/datos/controles.ts.
   */
  contenido: string;
  fuente: Fuente;
}

export interface Norma {
  /** Identificador de ruta, p. ej. "iso-27001". */
  id: string;
  /** Designación oficial, p. ej. "ISO/IEC 27001:2022". */
  designacion: string;
  titulo: string;
  /** Frase de una línea para tarjetas y menús. */
  resumen: string;
  /** Naturaleza del documento: condiciona cómo se lee. */
  naturaleza: 'requisitos' | 'codigo-de-practica';
  certificable: boolean;
  secciones: Seccion[];
  fuente: Fuente;
}

/** Atributos oficiales de un control (ISO/IEC 27002:2022, cláusula 4.2). */
export interface Atributos {
  /** Preventive | Detective | Corrective */
  tipo: string[];
  /** Confidentiality | Integrity | Availability */
  cia: string[];
  /** Identify | Protect | Detect | Respond | Recover (ISO/IEC TS 27110) */
  ciber: string[];
  /** Capacidades operativas (15 valores posibles). */
  cap: string[];
  /** Governance_and_Ecosystem | Protection | Defence | Resilience. */
  dom: string[];
}

/** Un control del Anexo A de 27001 / capítulos 5 a 8 de 27002. */
export interface Control {
  /** Identificador 2022, p. ej. "5.7" o "8.24". */
  id: string;
  /** Nombre oficial en español (traducción ISO). */
  nombre: string;
  /** Qué exige el control, en una o dos frases (elaboración didáctica). */
  resumen: string;
  /** Nuevo en la edición 2022: no tiene equivalencia directa en 2013. */
  nuevo?: boolean;
  /** Identificador(es) del control (o controles) de ISO/IEC 27002:2013, según la Tabla B.1. */
  origen2013?: string;
}

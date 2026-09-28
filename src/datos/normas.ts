import type { Fuente, Norma } from './tipos';

import cInicio from '../contenido/index.html?raw';
import cAlcance from '../contenido/alcance.html?raw';
import cVocabulario from '../contenido/referencias-vocabulario.html?raw';
import cContexto from '../contenido/contexto.html?raw';
import cLiderazgo from '../contenido/liderazgo.html?raw';
import cPlanificacion from '../contenido/planificacion.html?raw';
import cSoporte from '../contenido/soporte.html?raw';
import cOperacion from '../contenido/operacion.html?raw';
import cEvaluacion from '../contenido/evaluacion.html?raw';
import cMejora from '../contenido/mejora.html?raw';
import cAnexoA from '../contenido/anexo-a.html?raw';
import cCambios from '../contenido/cambios-2022.html?raw';
import cImplantacion from '../contenido/implantacion.html?raw';
import cFaq from '../contenido/preguntas-frecuentes.html?raw';
import cEstructura from '../contenido/estructura-27002.html?raw';

export const CONTENIDO: Record<string, string> = {
  'index': cInicio,
  'alcance': cAlcance,
  'referencias-vocabulario': cVocabulario,
  'contexto': cContexto,
  'liderazgo': cLiderazgo,
  'planificacion': cPlanificacion,
  'soporte': cSoporte,
  'operacion': cOperacion,
  'evaluacion': cEvaluacion,
  'mejora': cMejora,
  'anexo-a': cAnexoA,
  'cambios-2022': cCambios,
  'implantacion': cImplantacion,
  'preguntas-frecuentes': cFaq,
  'estructura-27002': cEstructura,
};

const FUENTE_27001: Fuente = {
  procedencia: 'oficial',
  documento: 'ISO/IEC 27001:2022, 3.ª edición (2022-10), en inglés, incluida la Enmienda 1:2024',
  advertencia:
    'Los resúmenes están escritos en español a partir del texto oficial en inglés. Como criterio de auditoría, utilice siempre el texto oficial (o su adopción nacional, p. ej. NTC-ISO/IEC 27001:2022 de ICONTEC).',
};

const FUENTE_27002: Fuente = {
  procedencia: 'oficial',
  documento: 'ISO/IEC 27002:2022, 2.ª edición (2022-02, corr. 2022-03), en inglés',
  advertencia:
    'Los nombres de los controles siguen la traducción oficial al español; los resúmenes son elaboración didáctica y no reproducen la guía de implementación de la norma.',
};

const FUENTE_PROPIA: Fuente = {
  procedencia: 'elaboracion-propia',
  advertencia:
    'Esta página es elaboración propia con fines didácticos: ordena y aplica la norma, pero su contenido no es texto normativo.',
};

export const ISO_27001: Norma = {
  id: 'iso-27001',
  designacion: 'ISO/IEC 27001:2022',
  titulo:
    'Seguridad de la información, ciberseguridad y protección de la privacidad — Sistemas de gestión de la seguridad de la información — Requisitos',
  resumen:
    'La única norma certificable de la familia: los requisitos del SGSI (cláusulas 4 a 10) y el Anexo A con 93 controles.',
  naturaleza: 'requisitos',
  certificable: true,
  fuente: FUENTE_27001,
  secciones: [
    {
      slug: 'alcance',
      rotulo: '1. Objeto y campo de aplicación',
      titulo: 'Cláusula 1: objeto y campo de aplicación',
      descripcion:
        'Qué especifica ISO/IEC 27001:2022, a quién se aplica y por qué excluir requisitos de 4 a 10 no es aceptable.',
      contenido: 'alcance',
      fuente: FUENTE_27001,
    },
    {
      slug: 'referencias-vocabulario',
      rotulo: '2 y 3. Referencias y vocabulario',
      titulo: 'Cláusulas 2 y 3: referencias normativas, términos y definiciones',
      descripcion:
        'La ISO/IEC 27000 como única referencia normativa y el vocabulario del SGSI: CIA, riesgo, amenaza, vulnerabilidad y compañía.',
      contenido: 'referencias-vocabulario',
      fuente: FUENTE_27001,
    },
    {
      slug: 'contexto',
      rotulo: '4. Contexto de la organización',
      titulo: 'Cláusula 4: contexto de la organización',
      descripcion:
        'Partes interesadas, cuestiones internas y externas, alcance del SGSI y el sistema mismo. Incluye la Enmienda 1:2024 sobre el cambio climático.',
      contenido: 'contexto',
      fuente: FUENTE_27001,
    },
    {
      slug: 'liderazgo',
      rotulo: '5. Liderazgo',
      titulo: 'Cláusula 5: liderazgo',
      descripcion:
        'El compromiso de la alta dirección, la política de seguridad y la asignación de roles, responsabilidades y autoridades.',
      contenido: 'liderazgo',
      fuente: FUENTE_27001,
    },
    {
      slug: 'planificacion',
      rotulo: '6. Planificación',
      titulo: 'Cláusula 6: planificación',
      descripcion:
        'El motor del SGSI: evaluación y tratamiento del riesgo, la declaración de aplicabilidad (SoA) integrada en 6.1.3, los objetivos y la planificación de cambios.',
      contenido: 'planificacion',
      fuente: FUENTE_27001,
    },
    {
      slug: 'soporte',
      rotulo: '7. Soporte',
      titulo: 'Cláusula 7: soporte',
      descripcion:
        'Recursos, competencia, concienciación, comunicación e información documentada: lo que sostiene el sistema.',
      contenido: 'soporte',
      fuente: FUENTE_27001,
    },
    {
      slug: 'operacion',
      rotulo: '8. Operación',
      titulo: 'Cláusula 8: operación',
      descripcion:
        'Planificación y control operativo, y la ejecución periódica de la evaluación y del tratamiento del riesgo.',
      contenido: 'operacion',
      fuente: FUENTE_27001,
    },
    {
      slug: 'evaluacion',
      rotulo: '9. Evaluación del desempeño',
      titulo: 'Cláusula 9: evaluación del desempeño',
      descripcion:
        'Seguimiento y medición, auditoría interna (9.2.1 y 9.2.2) y revisión por la dirección con sus entradas y salidas.',
      contenido: 'evaluacion',
      fuente: FUENTE_27001,
    },
    {
      slug: 'mejora',
      rotulo: '10. Mejora',
      titulo: 'Cláusula 10: mejora',
      descripcion:
        'Mejora continua y el tratamiento de no conformidades con acciones correctivas eficaces y documentadas.',
      contenido: 'mejora',
      fuente: FUENTE_27001,
    },
    {
      slug: 'anexo-a',
      rotulo: 'Anexo A. Controles de referencia',
      titulo: 'Anexo A (normativo): controles de seguridad de la información',
      descripcion:
        'Los 93 controles del Anexo A organizados en cuatro temas, su relación con 6.1.3 y con ISO/IEC 27002:2022.',
      contenido: 'anexo-a',
      fuente: FUENTE_27001,
    },
    {
      slug: 'cambios-2022',
      rotulo: 'Qué cambió en 2022',
      titulo: 'De ISO/IEC 27001:2013 a 2022: cambios, migración y plazos',
      descripcion:
        'Qué cambió realmente en la tercera edición, el proceso de transición (cerrado el 31-10-2025) y las enmiendas.',
      contenido: 'cambios-2022',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'implantacion',
      rotulo: 'Implantación paso a paso',
      titulo: 'Implantación del SGSI paso a paso: las 10 fases',
      descripcion:
        'El camino de implantación y certificación ordenado por fases, actualizado a la edición 2022.',
      contenido: 'implantacion',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'preguntas-frecuentes',
      rotulo: 'Preguntas frecuentes',
      titulo: 'Preguntas frecuentes sobre ISO/IEC 27001:2022',
      descripcion:
        'Las dudas más habituales: certificación, SoA, riesgos, plazos de migración y relaciones con otras normas.',
      contenido: 'preguntas-frecuentes',
      fuente: FUENTE_PROPIA,
    },
  ],
};

export const ISO_27002: Norma = {
  id: 'iso-27002',
  designacion: 'ISO/IEC 27002:2022',
  titulo:
    'Seguridad de la información, ciberseguridad y protección de la privacidad — Controles de seguridad de la información',
  resumen:
    'El código de buenas prácticas: guía de implementación de los 93 controles citados en el Anexo A de la 27001.',
  naturaleza: 'codigo-de-practica',
  certificable: false,
  fuente: FUENTE_27002,
  secciones: [
    {
      slug: 'estructura',
      rotulo: 'Estructura: cómo leer un control',
      titulo: 'ISO/IEC 27002:2022: estructura del documento y cómo leer un control',
      descripcion:
        'Enunciado, guía de implementación, referencias y atributos de cada control: temas, tipo, propiedades CIA, conceptos de ciberseguridad, capacidades operativas y dominios de seguridad.',
      contenido: 'estructura-27002',
      fuente: FUENTE_27002,
    },
    {
      slug: 'tema-5',
      rotulo: 'Tema 5. Controles organizacionales (37)',
      titulo: 'Tema 5: controles organizacionales (37 controles)',
      descripcion:
        'Políticas, roles, inventario, clasificación, acceso, proveedores, nube, incidentes, continuidad, legal y cumplimiento: los 37 controles organizacionales.',
      contenido: '@tema-5',
      fuente: FUENTE_27002,
    },
    {
      slug: 'tema-6',
      rotulo: 'Tema 6. Controles de personas (8)',
      titulo: 'Tema 6: controles de personas (8 controles)',
      descripcion:
        'Cribado, contrato, formación, disciplina, salida, confidencialidad, teletrabajo y notificación de eventos.',
      contenido: '@tema-6',
      fuente: FUENTE_27002,
    },
    {
      slug: 'tema-7',
      rotulo: 'Tema 7. Controles físicos (14)',
      titulo: 'Tema 7: controles físicos (14 controles)',
      descripcion:
        'Perímetros, entrada, oficinas, monitorización, amenazas ambientales, zonas seguras, escritorio, equipo, soportes y servicios de apoyo.',
      contenido: '@tema-7',
      fuente: FUENTE_27002,
    },
    {
      slug: 'tema-8',
      rotulo: 'Tema 8. Controles tecnológicos (34)',
      titulo: 'Tema 8: controles tecnológicos (34 controles)',
      descripcion:
        'Endpoints, accesos privilegiados, autenticación, malware, vulnerabilidades, configuración, copias, registros, redes, criptografía y desarrollo seguro.',
      contenido: '@tema-8',
      fuente: FUENTE_27002,
    },
    {
      slug: 'correspondencia',
      rotulo: 'Correspondencia 2013 → 2022',
      titulo: 'Correspondencia de los 114 controles de 2013 con los 93 de 2022',
      descripcion:
        'Tabla de correspondencia basada en el Anexo B (informativo) de ISO/IEC 27002:2022: qué control absorbe a cuál.',
      contenido: '@correspondencia',
      fuente: FUENTE_27002,
    },
  ],
};

export const NORMAS: Norma[] = [ISO_27001, ISO_27002];

export function buscarNorma(id: string): Norma | undefined {
  return NORMAS.find((n) => n.id === id);
}

export function buscarSeccion(idNorma: string, slug: string) {
  const norma = buscarNorma(idNorma);
  return norma?.secciones.find((s) => s.slug === slug);
}

import type { Control } from './tipos';

/**
 * Los 93 controles del Anexo A de ISO/IEC 27001:2022 (Tabla A.1), idénticos a
 * los capítulos 5 a 8 de ISO/IEC 27002:2022.
 *
 * - Nombres: traducción oficial al español de ISO.
 * - «origen2013»: Tabla B.1 de ISO/IEC 27002:2022 (correspondencia con la
 *   edición anterior).
 * - «nuevo»: los 11 controles sin equivalente en 2013, según la Tabla B.1.
 * - «resumen»: elaboración didáctica a partir del enunciado del control; no es
 *   texto normativo.
 */
export const CONTROLES: Control[] = [
  // ── Tema 5 · Controles organizacionales (37) ──────────────────────────────
  {
    id: '5.1',
    nombre: 'Políticas de seguridad de la información',
    resumen:
      'Definir, aprobar, publicar, comunicar y revisar periódicamente la política general y las políticas específicas de cada tema.',
    origen2013: '5.1.1, 5.1.2',
  },
  {
    id: '5.2',
    nombre: 'Roles y responsabilidades de seguridad de la información',
    resumen:
      'Definir y asignar los roles de seguridad según las necesidades de la organización, con personal competente que los asuma.',
    origen2013: '6.1.1',
  },
  {
    id: '5.3',
    nombre: 'Segregación de funciones',
    resumen:
      'Separar tareas y áreas de responsabilidad en conflicto para que nadie pueda crear, modificar y usar registros sin control.',
    origen2013: '6.1.2',
  },
  {
    id: '5.4',
    nombre: 'Responsabilidades de la dirección',
    resumen:
      'Exigir que todo el personal aplique la seguridad conforme a las políticas y procedimientos establecidos.',
    origen2013: '7.2.1',
  },
  {
    id: '5.5',
    nombre: 'Contacto con autoridades',
    resumen:
      'Mantener contacto establecido y sostenido con las autoridades pertinentes (judiciales, reguladoras, de ciberseguridad).',
    origen2013: '6.1.3',
  },
  {
    id: '5.6',
    nombre: 'Contacto con grupos de interés especial',
    resumen:
      'Mantener relaciones con foros de seguridad, asociaciones profesionales y comunidades de intercambio de información.',
    origen2013: '6.1.4',
  },
  {
    id: '5.7',
    nombre: 'Inteligencia de amenazas',
    resumen:
      'Recopilar y analizar información sobre amenazas para producir inteligencia que oriente las decisiones de protección.',
    nuevo: true,
  },
  {
    id: '5.8',
    nombre: 'Seguridad de la información en la gestión de proyectos',
    resumen:
      'Integrar la seguridad de la información en la gestión de todos los proyectos, desde su inicio.',
    origen2013: '6.1.5, 14.1.1',
  },
  {
    id: '5.9',
    nombre: 'Inventario de información y otros activos asociados',
    resumen:
      'Elaborar y mantener un inventario de la información y los activos asociados, con sus responsables («owners»).',
    origen2013: '8.1.1, 8.1.2',
  },
  {
    id: '5.10',
    nombre: 'Uso aceptable de la información y otros activos asociados',
    resumen:
      'Definir reglas de uso aceptable y procedimientos de manejo para cada tipo de activo.',
    origen2013: '8.1.3, 8.2.3',
  },
  {
    id: '5.11',
    nombre: 'Devolución de activos',
    resumen:
      'Exigir la devolución de todos los activos de la organización al terminar o cambiar la relación laboral, contractual o de acuerdo.',
    origen2013: '8.1.4',
  },
  {
    id: '5.12',
    nombre: 'Clasificación de la información',
    resumen:
      'Clasificar la información según confidencialidad, integridad, disponibilidad y los requisitos de las partes interesadas.',
    origen2013: '8.2.1',
  },
  {
    id: '5.13',
    nombre: 'Etiquetado de la información',
    resumen:
      'Desarrollar e implementar procedimientos de etiquetado coherentes con el esquema de clasificación adoptado.',
    origen2013: '8.2.2',
  },
  {
    id: '5.14',
    nombre: 'Transferencia de información',
    resumen:
      'Reglas, procedimientos o acuerdos para transferir información dentro de la organización y con terceros, por cualquier medio.',
    origen2013: '13.2.1, 13.2.2, 13.2.3',
  },
  {
    id: '5.15',
    nombre: 'Control de acceso',
    resumen:
      'Establecer reglas para controlar el acceso físico y lógico a la información y demás activos, según necesidades de negocio y de seguridad.',
    origen2013: '9.1.1, 9.1.2',
  },
  {
    id: '5.16',
    nombre: 'Gestión de identidades',
    resumen:
      'Gestionar el ciclo de vida completo de las identidades: alta, uso, revisión y baja.',
    origen2013: '9.2.1',
  },
  {
    id: '5.17',
    nombre: 'Información de autenticación',
    resumen:
      'Controlar la asignación y gestión de credenciales (contraseñas, claves, tokens) y aconsejar al personal sobre su manejo.',
    origen2013: '9.2.4, 9.3.1, 9.4.3',
  },
  {
    id: '5.18',
    nombre: 'Derechos de acceso',
    resumen:
      'Proveer, revisar, modificar y retirar los derechos de acceso conforme a la política específica de control de acceso.',
    origen2013: '9.2.2, 9.2.5, 9.2.6',
  },
  {
    id: '5.19',
    nombre: 'Seguridad de la información en las relaciones con proveedores',
    resumen:
      'Definir e implementar procesos para gestionar los riesgos de seguridad asociados al uso de productos o servicios de proveedores.',
    origen2013: '15.1.1',
  },
  {
    id: '5.20',
    nombre: 'Abordar la seguridad de la información en los acuerdos con proveedores',
    resumen:
      'Establecer y acordar los requisitos de seguridad pertinentes con cada proveedor, según el tipo de relación.',
    origen2013: '15.1.2',
  },
  {
    id: '5.21',
    nombre: 'Gestión de la seguridad de la información en la cadena de suministro de las TIC',
    resumen:
      'Gestionar los riesgos de seguridad de la información en la cadena de suministro de productos y servicios TIC.',
    origen2013: '15.1.3',
  },
  {
    id: '5.22',
    nombre: 'Supervisión, revisión y gestión de cambios de los servicios de proveedores',
    resumen:
      'Monitorizar, revisar, evaluar y gestionar periódicamente los cambios en las prácticas de seguridad y en la entrega de servicios de los proveedores.',
    origen2013: '15.2.1, 15.2.2',
  },
  {
    id: '5.23',
    nombre: 'Seguridad de la información para el uso de servicios en la nube',
    resumen:
      'Establecer procesos de adquisición, uso, gestión y salida de servicios en la nube conforme a los requisitos de la organización.',
    nuevo: true,
  },
  {
    id: '5.24',
    nombre: 'Planificación y preparación de la gestión de incidentes de seguridad de la información',
    resumen:
      'Planificar y prepararse definiendo, estableciendo y comunicando procesos, roles y responsabilidades para gestionar incidentes.',
    origen2013: '16.1.1',
  },
  {
    id: '5.25',
    nombre: 'Evaluación y decisión sobre eventos de seguridad de la información',
    resumen:
      'Evaluar los eventos de seguridad y decidir si deben categorizarse como incidentes.',
    origen2013: '16.1.4',
  },
  {
    id: '5.26',
    nombre: 'Respuesta a incidentes de seguridad de la información',
    resumen:
      'Responder a los incidentes de acuerdo con procedimientos documentados.',
    origen2013: '16.1.5',
  },
  {
    id: '5.27',
    nombre: 'Aprendizaje de los incidentes de seguridad de la información',
    resumen:
      'Usar el conocimiento adquirido en los incidentes para reforzar y mejorar los controles.',
    origen2013: '16.1.6',
  },
  {
    id: '5.28',
    nombre: 'Recopilación de evidencias',
    resumen:
      'Establecer procedimientos para identificar, recopilar, adquirir y preservar evidencias relacionadas con eventos de seguridad.',
    origen2013: '16.1.7',
  },
  {
    id: '5.29',
    nombre: 'Seguridad de la información durante la interrupción',
    resumen:
      'Planificar cómo mantener la seguridad de la información en un nivel adecuado durante una interrupción.',
    origen2013: '17.1.1, 17.1.2, 17.1.3',
  },
  {
    id: '5.30',
    nombre: 'Preparación de las TIC para la continuidad del negocio',
    resumen:
      'Planificar, implementar, mantener y probar la disponibilidad de las TIC conforme a los objetivos de continuidad del negocio.',
    nuevo: true,
  },
  {
    id: '5.31',
    nombre: 'Requisitos legales, estatutarios, normativos y contractuales',
    resumen:
      'Identificar, documentar y mantener al día los requisitos legales y contractuales aplicables a la seguridad de la información.',
    origen2013: '18.1.1, 18.1.5',
  },
  {
    id: '5.32',
    nombre: 'Derechos de propiedad intelectual',
    resumen:
      'Implementar procedimientos adecuados para proteger los derechos de propiedad intelectual.',
    origen2013: '18.1.2',
  },
  {
    id: '5.33',
    nombre: 'Protección de registros',
    resumen:
      'Proteger los registros contra pérdida, destrucción, falsificación y acceso o difusión no autorizados.',
    origen2013: '18.1.3',
  },
  {
    id: '5.34',
    nombre: 'Privacidad y protección de la información de identificación personal (PII)',
    resumen:
      'Identificar y cumplir los requisitos de protección de la privacidad y de la PII conforme a leyes, regulaciones y contratos.',
    origen2013: '18.1.4',
  },
  {
    id: '5.35',
    nombre: 'Revisión independiente de la seguridad de la información',
    resumen:
      'Revisar de forma independiente, periódicamente o ante cambios significativos, el enfoque de gestión de la seguridad y su implementación.',
    origen2013: '18.2.1',
  },
  {
    id: '5.36',
    nombre: 'Cumplimiento de las políticas, reglas y estándares de seguridad de la información',
    resumen:
      'Revisar periódicamente el cumplimiento de la política de seguridad, las políticas específicas, las reglas y los estándares.',
    origen2013: '18.2.2, 18.2.3',
  },
  {
    id: '5.37',
    nombre: 'Procedimientos operativos documentados',
    resumen:
      'Documentar los procedimientos operativos de las instalaciones de procesamiento de la información y ponerlos a disposición del personal que los necesita.',
    origen2013: '12.1.1',
  },

  // ── Tema 6 · Controles de personas (8) ────────────────────────────────────
  {
    id: '6.1',
    nombre: 'Cribado de personal',
    resumen:
      'Verificar los antecedentes de todos los candidatos antes de su ingreso y de forma continuada, según la ley, la ética y la criticidad del acceso.',
    origen2013: '7.1.1',
  },
  {
    id: '6.2',
    nombre: 'Términos y condiciones de empleo',
    resumen:
      'Hacer constar en el contrato las responsabilidades de seguridad del personal y de la organización.',
    origen2013: '7.1.2',
  },
  {
    id: '6.3',
    nombre: 'Concienciación, educación y formación en seguridad de la información',
    resumen:
      'Proporcionar al personal y a las partes interesadas relevantes concienciación y formación periódica, actualizada y acorde a su función.',
    origen2013: '7.2.2',
  },
  {
    id: '6.4',
    nombre: 'Proceso disciplinario',
    resumen:
      'Formalizar y comunicar un proceso disciplinario para actuar frente a quien viole la política de seguridad.',
    origen2013: '7.2.3',
  },
  {
    id: '6.5',
    nombre: 'Responsabilidades tras la terminación o cambio de empleo',
    resumen:
      'Definir, hacer cumplir y comunicar las responsabilidades de seguridad que persisten después de la terminación o el cambio.',
    origen2013: '7.3.1',
  },
  {
    id: '6.6',
    nombre: 'Acuerdos de confidencialidad o de no divulgación',
    resumen:
      'Identificar, documentar, revisar y firmar acuerdos de confidencialidad que reflejen las necesidades de protección de la información.',
    origen2013: '13.2.4',
  },
  {
    id: '6.7',
    nombre: 'Teletrabajo',
    resumen:
      'Implementar medidas de seguridad para proteger la información a la que se accede, procesa o almacena fuera de las instalaciones.',
    origen2013: '6.2.2',
  },
  {
    id: '6.8',
    nombre: 'Notificación de eventos de seguridad de la información',
    resumen:
      'Disponer de un mecanismo para que el personal reporte de forma puntual los eventos de seguridad observados o sospechados.',
    origen2013: '16.1.2, 16.1.3',
  },

  // ── Tema 7 · Controles físicos (14) ───────────────────────────────────────
  {
    id: '7.1',
    nombre: 'Perímetros de seguridad física',
    resumen:
      'Definir y usar perímetros de seguridad para proteger las áreas que contienen información y activos asociados.',
    origen2013: '11.1.1',
  },
  {
    id: '7.2',
    nombre: 'Entrada física',
    resumen:
      'Proteger las zonas seguras con controles de entrada y puntos de acceso adecuados.',
    origen2013: '11.1.2, 11.1.6',
  },
  {
    id: '7.3',
    nombre: 'Aseguramiento de oficinas, salas e instalaciones',
    resumen:
      'Diseñar e implementar la seguridad física de oficinas, salas e instalaciones.',
    origen2013: '11.1.3',
  },
  {
    id: '7.4',
    nombre: 'Monitorización de la seguridad física',
    resumen:
      'Vigilar las instalaciones de forma continua para detectar accesos físicos no autorizados.',
    nuevo: true,
  },
  {
    id: '7.5',
    nombre: 'Protección frente a amenazas físicas y ambientales',
    resumen:
      'Diseñar e implementar protección frente a desastres naturales y otras amenazas físicas, intencionadas o no.',
    origen2013: '11.1.4',
  },
  {
    id: '7.6',
    nombre: 'Trabajo en zonas seguras',
    resumen:
      'Diseñar e implementar medidas de seguridad para quienes trabajan dentro de zonas seguras.',
    origen2013: '11.1.5',
  },
  {
    id: '7.7',
    nombre: 'Escritorio despejado y pantalla despejada',
    resumen:
      'Definir y hacer cumplir reglas de escritorio despejado (papeles y medios extraíbles) y pantalla despejada.',
    origen2013: '11.2.9',
  },
  {
    id: '7.8',
    nombre: 'Ubicación y protección del equipo',
    resumen:
      'Situar y proteger el equipo de forma segura.',
    origen2013: '11.2.1',
  },
  {
    id: '7.9',
    nombre: 'Seguridad de los activos fuera de las instalaciones',
    resumen:
      'Proteger los activos que se encuentran fuera de las instalaciones de la organización.',
    origen2013: '11.2.6',
  },
  {
    id: '7.10',
    nombre: 'Soportes de almacenamiento',
    resumen:
      'Gestionar los soportes durante todo su ciclo de vida (adquisición, uso, transporte, eliminación) según la clasificación adoptada.',
    origen2013: '8.3.1, 8.3.2, 8.3.3, 11.2.5',
  },
  {
    id: '7.11',
    nombre: 'Servicios de apoyo',
    resumen:
      'Proteger las instalaciones de procesamiento frente a fallos de energía y otras interrupciones por fallo de servicios de apoyo.',
    origen2013: '11.2.2',
  },
  {
    id: '7.12',
    nombre: 'Seguridad del cableado',
    resumen:
      'Proteger los cables que transportan energía, datos o servicios frente a intercepción, interferencia o daño.',
    origen2013: '11.2.3',
  },
  {
    id: '7.13',
    nombre: 'Mantenimiento del equipo',
    resumen:
      'Mantener el equipo correctamente para asegurar la disponibilidad, integridad y confidencialidad de la información.',
    origen2013: '11.2.4',
  },
  {
    id: '7.14',
    nombre: 'Eliminación segura o reutilización de equipos',
    resumen:
      'Verificar que los equipos con medios de almacenamiento eliminan o sobrescriben de forma segura los datos sensibles y el software con licencia antes de su eliminación o reutilización.',
    origen2013: '11.2.7',
  },

  // ── Tema 8 · Controles tecnológicos (34) ──────────────────────────────────
  {
    id: '8.1',
    nombre: 'Dispositivos de extremo de usuario',
    resumen:
      'Proteger la información almacenada, procesada o accesible mediante dispositivos de extremo de usuario.',
    origen2013: '6.2.1, 11.2.8',
  },
  {
    id: '8.2',
    nombre: 'Derechos de acceso privilegiados',
    resumen:
      'Restringir y gestionar la asignación y el uso de derechos de acceso privilegiados.',
    origen2013: '9.2.3',
  },
  {
    id: '8.3',
    nombre: 'Restricción del acceso a la información',
    resumen:
      'Restringir el acceso a la información y demás activos conforme a la política específica de control de acceso.',
    origen2013: '9.4.1',
  },
  {
    id: '8.4',
    nombre: 'Acceso al código fuente',
    resumen:
      'Gestionar adecuadamente el acceso de lectura y escritura a código fuente, herramientas de desarrollo y bibliotecas de software.',
    origen2013: '9.4.5',
  },
  {
    id: '8.5',
    nombre: 'Autenticación segura',
    resumen:
      'Implementar tecnologías y procedimientos de autenticación segura según las restricciones de acceso y la política de control de acceso.',
    origen2013: '9.4.2',
  },
  {
    id: '8.6',
    nombre: 'Gestión de la capacidad',
    resumen:
      'Monitorizar y ajustar el uso de recursos conforme a los requisitos de capacidad actuales y previstos.',
    origen2013: '12.1.3',
  },
  {
    id: '8.7',
    nombre: 'Protección frente a malware',
    resumen:
      'Implementar protección contra malware, apoyada en la concienciación adecuada de los usuarios.',
    origen2013: '12.2.1',
  },
  {
    id: '8.8',
    nombre: 'Gestión de vulnerabilidades técnicas',
    resumen:
      'Obtener información sobre vulnerabilidades técnicas de los sistemas en uso, evaluar la exposición y tomar medidas apropiadas.',
    origen2013: '12.6.1, 18.2.3',
  },
  {
    id: '8.9',
    nombre: 'Gestión de la configuración',
    resumen:
      'Establecer, documentar, implementar, monitorizar y revisar las configuraciones —incluida la seguridad— de hardware, software, servicios y redes.',
    nuevo: true,
  },
  {
    id: '8.10',
    nombre: 'Eliminación de la información',
    resumen:
      'Eliminar la información de sistemas, dispositivos y soportes cuando ya no sea necesaria.',
    nuevo: true,
  },
  {
    id: '8.11',
    nombre: 'Ofuscación de datos (data masking)',
    resumen:
      'Usar ofuscación u ocultación de datos conforme a las políticas específicas, los requisitos de negocio y la legislación aplicable.',
    nuevo: true,
  },
  {
    id: '8.12',
    nombre: 'Prevención de fugas de datos',
    resumen:
      'Aplicar medidas de prevención de fuga de datos en sistemas, redes y dispositivos que procesan, almacenan o transmiten información sensible.',
    nuevo: true,
  },
  {
    id: '8.13',
    nombre: 'Copia de seguridad de la información',
    resumen:
      'Mantener copias de seguridad de información, software y sistemas, y probarlas regularmente conforme a la política de respaldos.',
    origen2013: '12.3.1',
  },
  {
    id: '8.14',
    nombre: 'Redundancia de las instalaciones de procesamiento de la información',
    resumen:
      'Implementar las instalaciones de procesamiento con redundancia suficiente para cumplir los requisitos de disponibilidad.',
    origen2013: '17.2.1',
  },
  {
    id: '8.15',
    nombre: 'Registro (logging)',
    resumen:
      'Producir, almacenar, proteger y analizar registros de actividades, excepciones, fallos y otros eventos relevantes.',
    origen2013: '12.4.1, 12.4.2, 12.4.3',
  },
  {
    id: '8.16',
    nombre: 'Actividades de monitorización',
    resumen:
      'Monitorizar redes, sistemas y aplicaciones en busca de comportamientos anómalos y actuar para evaluar incidentes potenciales.',
    nuevo: true,
  },
  {
    id: '8.17',
    nombre: 'Sincronización de relojes',
    resumen:
      'Sincronizar los relojes de los sistemas de procesamiento con fuentes de tiempo aprobadas.',
    origen2013: '12.4.4',
  },
  {
    id: '8.18',
    nombre: 'Uso de programas de utilidad privilegiados',
    resumen:
      'Restringir y controlar estrictamente el uso de programas capaces de anular los controles de sistema y aplicación.',
    origen2013: '9.4.4',
  },
  {
    id: '8.19',
    nombre: 'Instalación de software en sistemas operativos',
    resumen:
      'Implementar procedimientos y medidas para gestionar de forma segura la instalación de software en sistemas operativos.',
    origen2013: '12.5.1, 12.6.2',
  },
  {
    id: '8.20',
    nombre: 'Seguridad de las redes',
    resumen:
      'Asegurar, gestionar y controlar las redes y los dispositivos de red para proteger la información en sistemas y aplicaciones.',
    origen2013: '13.1.1',
  },
  {
    id: '8.21',
    nombre: 'Seguridad de los servicios de red',
    resumen:
      'Identificar, implementar y monitorizar los mecanismos de seguridad, los niveles y los requisitos de los servicios de red.',
    origen2013: '13.1.2',
  },
  {
    id: '8.22',
    nombre: 'Segregación de redes',
    resumen:
      'Segregar en la red los grupos de servicios de información, usuarios y sistemas de información.',
    origen2013: '13.1.3',
  },
  {
    id: '8.23',
    nombre: 'Filtrado web',
    resumen:
      'Gestionar el acceso a sitios web externos para reducir la exposición a contenido malicioso.',
    nuevo: true,
  },
  {
    id: '8.24',
    nombre: 'Uso de criptografía',
    resumen:
      'Definir e implementar reglas para el uso eficaz de la criptografía, incluida la gestión de claves.',
    origen2013: '10.1.1, 10.1.2',
  },
  {
    id: '8.25',
    nombre: 'Ciclo de vida de desarrollo seguro',
    resumen:
      'Establecer y aplicar reglas para el desarrollo seguro de software y sistemas.',
    origen2013: '14.2.1',
  },
  {
    id: '8.26',
    nombre: 'Requisitos de seguridad de las aplicaciones',
    resumen:
      'Identificar, especificar y aprobar requisitos de seguridad al desarrollar o adquirir aplicaciones.',
    origen2013: '14.1.2, 14.1.3',
  },
  {
    id: '8.27',
    nombre: 'Arquitectura de sistemas seguros y principios de ingeniería',
    resumen:
      'Establecer, documentar, mantener y aplicar principios de ingeniería de sistemas seguros a todo desarrollo.',
    origen2013: '14.2.5',
  },
  {
    id: '8.28',
    nombre: 'Programación segura (secure coding)',
    resumen:
      'Aplicar principios de programación segura en el desarrollo de software.',
    nuevo: true,
  },
  {
    id: '8.29',
    nombre: 'Pruebas de seguridad en el desarrollo y la aceptación',
    resumen:
      'Definir e implementar procesos de pruebas de seguridad en el ciclo de vida de desarrollo.',
    origen2013: '14.2.8, 14.2.9',
  },
  {
    id: '8.30',
    nombre: 'Desarrollo subcontratado',
    resumen:
      'Dirigir, monitorizar y revisar las actividades de desarrollo de sistemas subcontratadas.',
    origen2013: '14.2.7',
  },
  {
    id: '8.31',
    nombre: 'Separación de los entornos de desarrollo, prueba y producción',
    resumen:
      'Separar y asegurar los entornos de desarrollo, prueba y producción.',
    origen2013: '12.1.4, 14.2.6',
  },
  {
    id: '8.32',
    nombre: 'Gestión de cambios',
    resumen:
      'Someter los cambios en instalaciones y sistemas de información a procedimientos de gestión de cambios.',
    origen2013: '12.1.2, 14.2.2, 14.2.3, 14.2.4',
  },
  {
    id: '8.33',
    nombre: 'Información de pruebas',
    resumen:
      'Seleccionar, proteger y gestionar adecuadamente la información utilizada en pruebas.',
    origen2013: '14.3.1',
  },
  {
    id: '8.34',
    nombre: 'Protección de los sistemas de información durante las pruebas de auditoría',
    resumen:
      'Planificar y acordar entre quien prueba y la dirección las pruebas de auditoría y actividades de aseguramiento sobre sistemas operativos.',
    origen2013: '12.7.1',
  },
];

export const CONTROLES_POR_TEMA: Record<number, Control[]> = {
  5: CONTROLES.filter((c) => c.id.startsWith('5.')),
  6: CONTROLES.filter((c) => c.id.startsWith('6.')),
  7: CONTROLES.filter((c) => c.id.startsWith('7.')),
  8: CONTROLES.filter((c) => c.id.startsWith('8.')),
};

export const ROTULOS_TEMA: Record<number, { singular: string; plural: string; etiqueta: string }> = {
  5: { singular: 'Organizacionales', plural: 'Controles organizacionales', etiqueta: 'Organización' },
  6: { singular: 'Personas', plural: 'Controles de personas', etiqueta: 'Personas' },
  7: { singular: 'Físicos', plural: 'Controles físicos', etiqueta: 'Físicos' },
  8: { singular: 'Tecnológicos', plural: 'Controles tecnológicos', etiqueta: 'Tecnológicos' },
};

/**
 * Práctica de la guía de estudio. Los talleres recogen (enunciados breves y
 * reformados) los ejercicios presenciales del material I217001; el banco de
 * preguntas es elaboración propia para autoevaluación, alineado con la
 * ISO/IEC 27001:2022 y con el programa del curso.
 */

export interface Taller {
  id: string;
  fase: number;
  titulo: string;
  objetivo: string;
  entrega: string;
  pistas: string[];
}

export const TALLERES: Taller[] = [
  {
    id: 't1',
    fase: 1,
    titulo: 'Determinar el contexto con una matriz FODA',
    objetivo:
      'Aplicar 4.1 y 4.2: identificar cuestiones externas e internas y requisitos de partes interesadas que afectan al SGSI.',
    entrega:
      'Matriz FODA de una organización real o inventada, filtrada: solo las cuestiones que tocan la confidencialidad, integridad o disponibilidad de la información.',
    pistas: [
      'No vale cualquier FODA comercial: cada casilla debe responder «¿y esto qué efecto tiene sobre mi información?».',
      'Incluye una nota sobre si el cambio climático es o no cuestión relevante (Enmienda 1:2024).',
      'Cruza el resultado con 4.2: cada requisito de parte interesada que decidas abordar debe poder rastrearse aquí.',
    ],
  },
  {
    id: 't2',
    fase: 2,
    titulo: 'Definir el alcance del SGSI',
    objetivo: 'Aplicar 4.3: fijar límites y aplicabilidad del sistema.',
    entrega:
      'Una página de alcance: unidades organizativas, procesos, ubicaciones, activos principales, interfaces y dependencias con otras organizaciones, y justificación de exclusiones.',
    pistas: [
      'Pruébalo con la pregunta del cliente difícil: «¿esto que me vendes entra en tu certificado?».',
      'Las interfaces con terceros (4.3 c) son el punto que más se olvida.',
      'Recuerda: el alcance se conserva como información documentada y es lo primero que lee el auditor de certificación.',
    ],
  },
  {
    id: 't3',
    fase: 2,
    titulo: 'Revisar los términos y definiciones',
    objetivo:
      'Consolidar el vocabulario de la ISO/IEC 27000 que la 27001 da por conocido: riesgo, control, activo, parte interesada, información documentada…',
    entrega:
      'Parejas o grupos: cada uno define un término en 30 segundos sin leer; los demás corrigen con el glosario.',
    pistas: [
      'Confusión clásica: «objetivo de control» (2013) ya no existe; ahora son temas, controles y atributos.',
      'Practica distinguir información «disponible» de información documentada «conservada» frente a «disponible».',
    ],
  },
  {
    id: 't4',
    fase: 4,
    titulo: 'Elaborar un plan de auditoría individual',
    objetivo:
      'Aplicar 6.3 de la ISO 19011: objetivos, alcance, criterios, métodos, programa horario y asignación de tareas.',
    entrega:
      'Plan de auditoría de 1,5 días a un SGSI (propio o ficticio), con la matriz de asignación de miembros del equipo a procesos, funciones y ubicaciones.',
    pistas: [
      'Los criterios de tu auditoría 27001: los requisitos de la norma + el propio SGSI del auditado (política, SoA, procedimientos).',
      'Programa primero las cláusulas con más riesgo (6.1, 9) y deja flexibilidad para seguir evidencias.',
      'Ningún miembro puede auditar su propio trabajo (imparcialidad, 9.2.2 b).',
    ],
  },
  {
    id: 't5',
    fase: 4,
    titulo: 'Construir la lista de verificación (checklist)',
    objetivo:
      'Convertir cláusulas asignadas en preguntas auditables que guíen la recopilación de evidencia.',
    entrega:
      'Checklist para auditar 2-3 cláusulas: cada requisito con sus puntos de evidencia (qué documento mirar, a quién preguntar, qué muestra tomar).',
    pistas: [
      'Un checklist útil no copia la norma: la «interroga». Para «6.1.2 b: resultados coherentes» → pide dos evaluaciones de riesgo de áreas distintas y compáralas.',
      'Anota espacio para evidencia y conclusiones provisionales por fila.',
    ],
  },
  {
    id: 't6',
    fase: 4,
    titulo: 'Simulacro de entrevista de auditoría',
    objetivo:
      'Practicar la técnica de entrevista de la ISO 19011: preguntas abiertas, escucha, manejo del auditado difícil.',
    entrega:
      'Rol play de 15 minutos auditor/auditado sobre un requisito (p. ej. 7.3 concienciación); el resto observa y clasifica las preguntas hechas.',
    pistas: [
      'Prohibido empezar con «¿cumplen la política?» (cerrada e inductiva). Empieza por «descríbame qué ocurre cuando…».',
      'Ensaya las situaciones difíciles: desvía, reformula, cuestiona, «eso no es mi área».',
    ],
  },
  {
    id: 't7',
    fase: 5,
    titulo: 'Clasificar hallazgos: NC, observación u oportunidad',
    objetivo: 'Distinguir los tres tipos de hallazgo y decidir su tratamiento (10.2 vs mejora).',
    entrega:
      'Con escenarios dados por el instructor (o los de este sitio), clasificar cada hallazgo y justificar.',
    pistas: [
      'Regla simple: ¿hay un requisito incumplido con evidencia? → no conformidad. ¿Solo riesgo futuro? → observación. ¿Cumple pero podría mejorarse? → oportunidad.',
      'No atribuyas un hallazgo a dos cláusulas: elige la que mejor aplica.',
    ],
  },
  {
    id: 't8',
    fase: 5,
    titulo: 'Redactar no conformidades y conclusiones',
    objetivo:
      'Aplicar la fórmula evidencia + referencia + conclusión y preparar la reunión de cierre.',
    entrega:
      'Tres no conformidades redactadas a partir de hallazgos del taller anterior, en lenguaje claro y aceptable para el auditado.',
    pistas: [
      'Evidencia con datos: «en la revisión de accesos del 14-03 permanecían 6 cuentas de personal egresado».',
      'Referencia exacta: «lo cual no conforme con ISO/IEC 27001:2022, 5.18/8.1 (derechos de acceso)…».',
      'Conclusión breve y sin adjetivos: describe el incumplimiento, no a la persona.',
    ],
  },
];

export interface Pregunta {
  id: string;
  fase: number;
  enunciado: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
}

export const PREGUNTAS: Pregunta[] = [
  // ── Fase 1 · Fundamentos ──────────────────────────────────────────────────
  {
    id: 'f1-1',
    fase: 1,
    enunciado: '¿Qué propiedad de la información protege principalmente un backup probado?',
    opciones: ['Confidencialidad', 'Integridad', 'Disponibilidad', 'Autenticidad'],
    correcta: 2,
    explicacion:
      'El backup garantiza que la información vuelva a estar accesible y utilizable cuando se necesita: disponibilidad (A.8.13). También puede proteger integridad, pero su razón de ser es la disponibilidad.',
  },
  {
    id: 'f1-2',
    fase: 1,
    enunciado: 'De las siguientes normas de la familia 27000, ¿cuál es certificable?',
    opciones: ['ISO/IEC 27002', 'ISO/IEC 27001', 'ISO/IEC 27005', 'ISO/IEC 27000'],
    correcta: 1,
    explicacion:
      'Solo la 27001 especifica requisitos de sistema de gestión. Las demás son guías, vocabulario o código de prácticas.',
  },
  {
    id: 'f1-3',
    fase: 1,
    enunciado: '¿Cuál es la definición de SGSI según el vocabulario de la ISO/IEC 27000?',
    opciones: [
      'Un conjunto de herramientas técnicas que protege los sistemas de información.',
      'La parte del sistema de gestión global, basada en un enfoque de riesgo, para establecer, implementar, operar, hacer seguimiento, revisar, mantener y mejorar la seguridad de la información.',
      'La certificación que expide un organismo acreditado.',
      'El inventario de activos con sus dueños.',
    ],
    correcta: 1,
    explicacion:
      'Es la definición clásica de la familia (definición 2.34 de la 27000): sistema de gestión, basado en riesgo, con el ciclo completo establecimiento → mejora.',
  },
  {
    id: 'f1-4',
    fase: 1,
    enunciado: 'La ISO/IEC 27001:2022 hereda su origen de…',
    opciones: [
      'La norma BS 7799-2 británica',
      'El marco NIST CSF',
      'La directiva NIS de la UE',
      'La ISO 9001',
    ],
    correcta: 0,
    explicacion:
      'ISO/IEC 27001 es la internacionalización de la BS 7799-2 (1ª ed. 2005). NIST CSF y la normativa europea influyeron en la edición 2022 (atributos, ciberseguridad), pero no son su origen.',
  },
  // ── Fase 2 · Estructura de la norma y edición 2022 ────────────────────────
  {
    id: 'f2-1',
    fase: 2,
    enunciado: '¿Cuántos controles tiene el Anexo A de la ISO/IEC 27001:2022 y en cuántos temas?',
    opciones: ['114 controles en 14 dominios', '93 controles en 4 temas', '93 controles en 14 temas', '114 controles en 4 dominios'],
    correcta: 1,
    explicacion:
      '93 controles en 4 temas: A.5 organizacionales (37), A.6 personas (8), A.7 físicos (14), A.8 tecnológicos (34). Los 114/14 corresponden a la edición 2013.',
  },
  {
    id: 'f2-2',
    fase: 2,
    enunciado: 'En el ciclo PHVA aplicado al SGSI, ¿a qué cláusula corresponde el «VERIFICAR»?',
    opciones: ['Cláusula 8 Operación', 'Cláusula 9 Evaluación del desempeño', 'Cláusula 10 Mejora', 'Cláusula 6 Planificación'],
    correcta: 1,
    explicacion:
      'Planear = 4-7; Hacer = 8; Verificar = 9 (seguimiento, medición, auditoría interna, revisión); Actuar = 10 (mejora, NC y acciones correctivas).',
  },
  {
    id: 'f2-3',
    fase: 2,
    enunciado: 'Un proveedor te pide excluir la cláusula 7 «Soporte» del alcance de certificación porque «no aplica» a su tamaño. ¿Qué respondes?',
    opciones: [
      'Es válido: las pymes pueden excluir cláusulas',
      'No es válido: excluir requisitos de 4 a 10 no es aceptable al reclamar conformidad (cláusula 1)',
      'Solo es válido si lo aprueba el organismo de certificación',
      'Es válido si documentas la justificación en la SoA',
    ],
    correcta: 1,
    explicacion:
      'La cláusula 1 de la 27001:2022 lo dice literalmente: excluir cualquiera de los requisitos de 4 a 10 no es aceptable. Lo que sí se justifica (no «se excluye») son controles del Anexo A vía 6.1.3.',
  },
  {
    id: 'f2-4',
    fase: 2,
    enunciado: '¿Cuál de estos controles NO es nuevo en la edición 2022?',
    opciones: ['Inteligencia de amenazas (A.5.7)', 'Gestión de la configuración (A.8.9)', 'Control de acceso (A.5.15)', 'Filtrado web (A.8.23)'],
    correcta: 2,
    explicacion:
      'A.5.15 Control de acceso proviene de A.5.15/A.9.1.x de 2013 (actualizado). Los 11 nuevos son: 5.7, 5.23, 5.30, 7.4, 8.9, 8.10, 8.11, 8.12, 8.16, 8.23 y 8.28.',
  },
  {
    id: 'f2-5',
    fase: 2,
    enunciado: '¿Qué añade la Enmienda 1:2024 a la ISO/IEC 27001:2022?',
    opciones: [
      'Nuevos controles de cambio climático en el Anexo A',
      'Determinar si el cambio climático es una cuestión relevante al analizar contexto (4.1) y partes interesadas (4.2)',
      'Un plazo nuevo de transición',
      'La obligación de medir la huella de carbono del SGSI',
    ],
    correcta: 1,
    explicacion:
      'Solo son textos nuevos en 4.1 y 4.2: decidir y documentar si el cambio climático es cuestión relevante. No añade controles ni obliga a gestionar el clima como riesgo.',
  },
  // ── Fase 3 · Riesgo (6.1) y 27005 ─────────────────────────────────────────
  {
    id: 'f3-1',
    fase: 3,
    enunciado: 'La declaración de aplicabilidad (SoA) de la 27001:2022 se obtiene en…',
    opciones: ['6.1.2 e)', '6.1.3 d)', '6.2 a)', 'Anexo A, tabla A.1'],
    correcta: 1,
    explicacion:
      'En la edición 2022 la SoA es un resultado del tratamiento del riesgo: 6.1.3 d) (la antigua 6.1.4 desapareció). Contiene controles necesarios con justificación, estado de implementación y justificación de exclusiones.',
  },
  {
    id: 'f3-2',
    fase: 3,
    enunciado: 'Tras el tratamiento, el riesgo que permanece debe…',
    opciones: [
      'Eliminarlo siempre con controles adicionales',
      'Ser aceptado por el dueño del riesgo',
      'Comunicarse solo al auditor',
      'Registrarlo como no conformidad',
    ],
    correcta: 1,
    explicacion:
      '6.1.3 f): el dueño del riesgo aprueba el plan de tratamiento y acepta los riesgos residuales. Sin esa aceptación, el tratamiento queda huérfano de responsabilidad.',
  },
  {
    id: 'f3-3',
    fase: 3,
    enunciado: '¿Cuándo exige la norma repetir la evaluación del riesgo?',
    opciones: [
      'Solo anualmente',
      'A intervalos planificados o cuando se proponen o producen cambios significativos (8.2)',
      'Solo antes de la auditoría de certificación',
      'Cuando lo pida el organismo de certificación',
    ],
    correcta: 1,
    explicacion:
      '8.2 obliga a reevaluar «a intervalos planificados» o «ante cambios significativos propuestos o ocurridos», con criterios de 6.1.2 a) y conservando la información documentada.',
  },
  {
    id: 'f3-4',
    fase: 3,
    enunciado: 'Una opción de tratamiento que NO contempla la práctica estándar de la 27001/27005 es…',
    opciones: ['Evitar el riesgo', 'Asumirlo', 'Eliminar el activo y el riesgo con él', 'Transferirlo o compartirlo'],
    correcta: 2,
    explicacion:
      'Las opciones canónicas: evitar, asumir (retener), compartir/transferir y reducir (con controles). «Eliminar el activo» es un caso particular de evitar, no una opción independiente.',
  },
  {
    id: 'f3-5',
    fase: 3,
    enunciado: '6.1.2 b) pide que las evaluaciones repetidas produzcan resultados…',
    opciones: [
      'Idénticos siempre',
      'Coherentes, válidos y comparables',
      'Cuantificados en euros',
      'Aprobados por el CEO',
    ],
    correcta: 1,
    explicacion:
      'Consistent, valid and comparable: por eso deben existir criterios de análisis (6.1.2 a), escalas y dueños. No exige cuantificación monetaria.',
  },
  {
    id: 'f3-6',
    fase: 3,
    enunciado: 'Comparas tus controles con el Anexo A y omitiste A.8.13 (backups) porque «no hay riesgo», pero tus servidores no tienen copia. ¿Qué falla?',
    opciones: [
      'Nada: si no hay riesgo, no hay control',
      'La comparación 6.1.3 c) y la justificación de exclusión en la SoA: el riesgo de pérdida existe y fue mal evaluado',
      'Solo falla el auditor que no lo vio',
      'Falla 9.1 pero no 6.1',
    ],
    correcta: 1,
    explicacion:
      '6.1.3 c) sirve para detectar precisamente omisiones. Una exclusión injustificada (o un riesgo no identificado) es no conformidad de 6.1.2/6.1.3, no un problema de medición.',
  },
  // ── Fase 4 · Auditoría (19011, 9.2, 9.3) ──────────────────────────────────
  {
    id: 'f4-1',
    fase: 4,
    enunciado: '¿Qué tipo de auditoría corresponde a la que exige el requisito 9.2 de la 27001?',
    opciones: ['Segunda parte', 'Tercera parte', 'Primera parte (interna)', 'Auditoría legal'],
    correcta: 2,
    explicacion:
      '9.2 = auditoría interna (primera parte): por o en nombre de la propia organización, con objetividad e imparcialidad (9.2.2 b).',
  },
  {
    id: 'f4-2',
    fase: 4,
    enunciado: 'En ISO 19011, los «criterios de auditoría» son…',
    opciones: [
      'Las opiniones del auditor',
      'El conjunto de requisitos usados como referencia para comparar la evidencia',
      'Los hallazgos del informe',
      'La lista de partes interesadas',
    ],
    correcta: 1,
    explicacion:
      'Criterios = referencia (política, norma, contrato, requisitos legales). Evidencia se compara contra criterios → hallazgos → conclusiones.',
  },
  {
    id: 'f4-3',
    fase: 4,
    enunciado: '¿Qué cláusula de la ISO 19011 cubre la competencia y evaluación de los auditores?',
    opciones: ['Cláusula 4', 'Cláusula 5', 'Cláusula 6', 'Cláusula 7'],
    correcta: 3,
    explicacion:
      'Cl. 4 principios; cl. 5 gestión del programa; cl. 6 realización de la auditoría; cl. 7 competencia y evaluación de auditores.',
  },
  {
    id: 'f4-4',
    fase: 4,
    enunciado: 'El programa de auditoría (cl. 5 de la 19011, y 9.2.2 de la 27001) debe…',
    opciones: [
      'Definir una sola auditoría al año con lista fija',
      'Considerar la importancia de los procesos y los resultados de auditorías anteriores',
      'Asignar siempre al mismo auditor por relación',
      'Aprobarlo el organismo de certificación',
    ],
    correcta: 1,
    explicacion:
      '9.2.2 y 19011 5.4: el programa es risk-based y se alimenta de resultados previos; la frecuencia y alcance se ajustan, no son una auditoría fija anual.',
  },
  {
    id: 'f4-5',
    fase: 4,
    enunciado: '¿Cuál NO es una entrada obligatoria de la revisión por la dirección (9.3.2)?',
    opciones: [
      'Estado de acciones de revisiones anteriores',
      'Resultado de la evaluación del riesgo y estado del plan de tratamiento',
      'El presupuesto detallado de TI del siguiente año',
      'Feedback de partes interesadas',
    ],
    correcta: 2,
    explicacion:
      'Las entradas son a)-g): acciones previas, cambios de contexto y partes, desempeño (con tendencias), feedback, resultados de riesgo/plan y oportunidades. El presupuesto de TI puede entrar como decisión, pero no es entrada obligatoria.',
  },
  // ── Fase 5 · Hallazgos, mejora y examen ───────────────────────────────────
  {
    id: 'f5-1',
    fase: 5,
    enunciado: '¿Qué diferencia una acción correctiva de una simple corrección?',
    opciones: [
      'El costo',
      'La corrección ataca el efecto; la acción correctiva elimina la causa para que no vuelva a ocurrir (10.2)',
      'Solo la acción correctiva va al informe',
      'La acción correctiva la decide el auditor',
    ],
    correcta: 1,
    explicacion:
      '10.2 exige: reaccionar (controlar/corregir) y además evaluar causas, extendibilidad, implementar, revisar eficacia y ajustar el SGSI si procede. Todo ello documentado (naturaleza de NC + resultados).',
  },
  {
    id: 'f5-2',
    fase: 5,
    enunciado: 'La fórmula de redacción de una no conformidad de auditoría es…',
    opciones: [
      'Problema + culpable + fecha',
      'Evidencia + referencia (cláusula) + conclusión',
      'Síntoma + suposición + opinión',
      'Observación + recomendación + firma',
    ],
    correcta: 1,
    explicacion:
      'Evidencia verificable, referencia a UN requisito que mejor aplique, conclusión breve aceptada por el auditado. Nunca dos cláusulas para el mismo hallazgo ni lenguaje de culpables.',
  },
  {
    id: 'f5-3',
    fase: 5,
    enunciado: 'Un hallazgo que no incumple un requisito pero podría derivar en incumplimiento se clasifica como…',
    opciones: ['No conformidad mayor', 'Observación', 'Acción correctiva', 'Excepción'],
    correcta: 1,
    explicacion:
      'Observación (con el curso): riesgo futuro si no se trata. Oportunidad de mejora es otra categoría: cumplimiento actual mejorable.',
  },
  {
    id: 'f5-4',
    fase: 5,
    enunciado: '¿Qué debe contener como mínimo el informe de auditoría?',
    opciones: [
      'Solo la lista de hallazgos',
      'Objetivos, alcance y período, criterios, equipo, fechas/lugares, hallazgos y conclusiones',
      'Las cuentas de usuario auditadas',
      'Las opiniones del equipo sobre el personal',
    ],
    correcta: 1,
    explicacion:
      'Además: identificación del auditado/persona de contacto y, en su caso, recomendaciones. El informe se distribuye con la antelación acordada y las conclusiones reflejan el grado de cumplimiento.',
  },
  {
    id: 'f5-5',
    fase: 5,
    enunciado: 'El certificado ISO/IEC 27001:2022 de un cliente indica la vigencia hasta 2027. ¿Qué toca al año siguiente?',
    opciones: ['Nada hasta la recertificación', 'Auditoría de vigilancia (seguimiento)', 'Re-auditoría de fase 1', 'Renovación automática'],
    correcta: 1,
    explicacion:
      'Ciclo de certificación: fase 1 + fase 2 inicial; luego vigilancia anual y recertificación antes de los 3 años. Un certificado sin vigilancia realizada puede suspenderse.',
  },
  {
    id: 'f5-6',
    fase: 5,
    enunciado: '¿Qué fecha cerró el periodo de transición mundial de 27001:2013 a 27001:2022?',
    opciones: ['31-03-2025', '25-10-2025', '31-10-2025', '30-06-2026'],
    correcta: 2,
    explicacion:
      'El 31 de octubre de 2025 (3 años de la publicación en octubre 2022). Desde entonces, todos los certificados vigentes son contra la edición 2022.',
  },
];

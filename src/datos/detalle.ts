/**
 * Desarrollo por control: claves de implementación y preguntas típicas de
 * auditoría. Elaboración propia a partir de la guía de implementación de
 * ISO/IEC 27002:2022; no reproduce el texto de la norma.
 */
export interface Detalle {
  como: string[];
  auditoria: string[];
}

export const DETALLE: Record<string, Detalle> = {
  '5.1': {
    como: [
      'Redactar una política general firmada por la alta dirección y un conjunto de políticas específicas por tema (control de acceso, criptografía, nube, escritorio limpio…).',
      'Definir ciclo de revisión (p. ej. anual) y disparador de revisión extraordinaria ante cambios significativos.',
      'Publicar en un lugar conocido y medir el conocimiento: no basta con enviarla por correo.',
      'Hacerla coherente con la estrategia del negocio y con los requisitos legales y contractuales detectados en 4.1-4.2.',
    ],
    auditoria: [
      '¿Puede mostrarme la política vigente, su fecha de aprobación y las revisiones documentadas?',
      '¿Cómo comunica la política al personal nuevo y a los proveedores con acceso?',
      '¿Qué cambios recientes obligaron a revisar alguna política específica?',
    ],
  },
  '5.2': {
    como: [
      'Asignar la gestión de la seguridad de la información a un rol con nombre, autoridad y recursos.',
      'Definir roles de proceso (dueños de activos, administradores, SOC) y describirlos en perfiles o matrices RACI.',
      'Verificar que quien asume un rol tiene la competencia exigida en 7.2.',
    ],
    auditoria: [
      '¿Quién es el responsable de la seguridad de la información y con qué autoridad cuenta?',
      '¿Dónde está documentada la asignación de roles? ¿Se revisó tras la última reorganización?',
    ],
  },
  '5.3': {
    como: [
      'Identificar tareas en conflicto: quien crea una transacción no debe poder aprobarla y auditarla a la vez.',
      'Analizar restricciones de tamaño: si no hay plantilla para segregar, establecer compensaciones (supervisión, doble revisión, logs).',
      'Revisar los privilegios técnicos de administradores frente a su rol funcional.',
    ],
    auditoria: [
      '¿Qué funciones están segregadas y qué compensaciones aplica cuando no es posible?',
      '¿Puede mostrarme una revisión de conflictos de duties en el equipo de administración?',
    ],
  },
  '5.4': {
    como: [
      'Incluir cláusulas de seguridad en descripciones de puesto y objetivos anuales de mandos intermedios.',
      'Que la dirección modele el comportamiento: cumplirla primero (claves, escritorios, sesiones).',
    ],
    auditoria: [
      '¿Cómo exige la dirección a sus equipos el cumplimiento de las políticas?',
      '¿Hay evidencia de que los responsables de área revisan el cumplimiento de seguridad?',
    ],
  },
  '5.5': {
    como: [
      'Mantener un directorio de autoridades de contacto (policía, CERT nacional, regulador de datos, fiscalía).',
      'Definir quién y cuándo se contacta a cada una (procedimiento de escalado vinculado a 5.24-5.26).',
      'Documentar contactos formales e informales y su validez temporal.',
    ],
    auditoria: [
      '¿Con qué autoridades tiene contacto establecido? ¿Está actualizado el directorio?',
      '¿En un ransomware, a quién notifica primero y por qué canal?',
    ],
  },
  '5.6': {
    como: [
      'Pertenecer a foros sectoriales (ISAC), asociaciones profesionales y comunidades de intercambio de IOC.',
      'Definir reglas de participación: qué se comparte y con qué acuerdos de confidencialidad.',
    ],
    auditoria: [
      '¿A qué foros o comunidades de seguridad pertenece? ¿Qué valor ha aportado la información recibida?',
    ],
  },
  '5.7': {
    como: [
      'Elegir fuentes de inteligencia fiables: CERTs, ISACs, proveedores de threat intelligence, OSINT.',
      'Definir el ciclo: colección, normalización, análisis, difusión al SOC/CSIRT y a dueños de activos.',
      'Contextualizar: solo interesa la amenaza aplicable al sector, geografía y perfil de la organización.',
      'Medir la utilidad: indicadores que cambiaron (parcheos priorizados, reglas de detección, bloqueos).',
    ],
    auditoria: [
      '¿De dónde recibe inteligencia de amenazas y quién la analiza?',
      'Muéstreme un caso en que información de amenazas modificó un control o una decisión.',
    ],
  },
  '5.8': {
    como: [
      'Incluir requisitos y decisiones de seguridad como entregables de proyecto (registro de riesgos del proyecto, plan de tratamiento).',
      'Revisar los proyectos con un checklist de seguridad de la información en sus gateways.',
      'Asignar responsable de seguridad en proyectos relevantes.',
    ],
    auditoria: [
      '¿Cómo entra la seguridad de la información en la metodología de proyectos?',
      '¿Puede mostrarme el análisis de seguridad de un proyecto reciente?',
    ],
  },
  '5.9': {
    como: [
      'Definir qué se inventaría (información, sistemas, equipos, software, servicios, nube) y con qué nivel de detalle.',
      'Asignar dueño a cada activo: el dueño responde por su clasificación y acceso.',
      'Establecer periodicidad de revisión y limpieza; el inventario debe ser consultable y accionable.',
    ],
    auditoria: [
      '¿Muestra el inventario de información y activos asociados sus dueños y la última revisión?',
      '¿Cómo detecta activos fuera de inventario?',
    ],
  },
  '5.10': {
    como: [
      'Publicar reglas de uso aceptable por tipo de activo (equipos, correo, red, datos, aplicaciones, nube).',
      'Incluir los supuestos de uso razonable personal y las restricciones de instalacion de software.',
      'Recoger el acuse del personal y de proveedores con acceso.',
    ],
    auditoria: [
      '¿Dónde están las reglas de uso aceptable y cómo comprueba que el personal las conoce?',
      '¿Qué ocurre cuando alguien las incumple (vínculo con 6.4)?',
    ],
  },
  '5.11': {
    como: [
      'Listar los activos que debe devolver cada rol (equipos, tokens, tarjetas, documentación, llaves).',
      'Activar la devolución en los procedimientos de baja y de fin de contrato; bloquear accesos antes de cerrar la relación.',
    ],
    auditoria: [
      '¿Qué activos quedan pendientes en las tres últimas bajas de personal?',
      '¿Cómo sabe el área de RH que no cierre la baja sin visto bueno de seguridad?',
    ],
  },
  '5.12': {
    como: [
      'Adoptar un esquema de clasificación (p. ej. pública / interna / confidencial / restringida) basado en CIA y en requisitos de partes interesadas.',
      'Definir manejo por nivel: quién accede, dónde se almacena, cómo se transmite, cuánto se retiene.',
      'Clasificar especialmente los datos personales, financieros y de I+D.',
    ],
    auditoria: [
      '¿Cuál es el esquema de clasificación y dónde se aplica? ¿Ponme un ejemplo de dato clasificado incorrectamente y detectado?',
    ],
  },
  '5.13': {
    como: [
      'Definir cómo se etiqueta la información según su formato: marcas en documentos, propiedades de metadatos, categorías en correo, etiquetas visuales en sistemas.',
      'Tratar también el etiquetado informal: carpetas etiquetadas, rotulados físicos de soportes.',
      'Verificar que las medidas de manejo se disparan a partir de la etiqueta.',
    ],
    auditoria: [
      '¿Cómo viaja la etiqueta de un documento confidencial cuando se comparte o se imprime?',
    ],
  },
  '5.14': {
    como: [
      'Regular los canales: correo cifrado para adjuntos sensibles, transferencia gestionada, mensajería, USB (política de medios), API entre sistemas.',
      'Aplicar reglas también a la transferencia entre áreas internas con niveles distintos.',
      'Definir acuerdos con terceros receptores antes de transferir.',
    ],
    auditoria: [
      '¿Qué canales permiten transferir información confidencial y con qué salvaguardas?',
      '¿Puede enviarme un documento restringido por correo ordinario sin control?',
    ],
  },
  '5.15': {
    como: [
      'Definir la política de control de acceso: quién accede a qué, según rol, nivel y necesidad; incluyendo acceso físico y lógico.',
      'Aplicar el principio de mínimo privilegio y el control de acceso por defecto denegado.',
      'Documentar flujos de autorización por recurso crítico.',
    ],
    auditoria: [
      '¿Muestra la política de control de acceso vigente y su aplicación en sistemas críticos?',
      '¿Cómo se autoriza un acceso extraordinario (urgencias, terceros)?',
    ],
  },
  '5.16': {
    como: [
      'Gestionar el ciclo completo de identidades: personas, servicios (cuentas de máquina) y dispositivos.',
      'Integrar alta, cambio y baja con RH y con la gestión de accesos (5.18).',
      'Evitar identidades compartidas; usar identificadores únicos; revisar cuentas huérfanas.',
    ],
    auditoria: [
      '¿Cuántas identidades de servicio y huérfanas tiene el directorio? ¿Cuándo se revisaron?',
      '¿Cómo se asegura de que la baja de un empleado desactiva todas sus cuentas en todos los sistemas?',
    ],
  },
  '5.17': {
    como: [
      'Proteger contraseñas, claves SSH, tokens y tarjetas de autenticación a lo largo de todo su ciclo (generación, distribución, cambio, retiro).',
      'Fijar requisitos de robustez, rotación y no reutilización; formar al personal en su manejo.',
      'Nunca guardar secretos de forma compartida en texto claro.',
    ],
    auditoria: [
      '¿Cómo se emiten, cambian y retiran las credenciales privilegiadas?',
      '¿Hay material de autenticación por defecto o heredado sin cambiar?',
    ],
  },
  '5.18': {
    como: [
      'Modelar los derechos por rol con aprobación del dueño del recurso.',
      'Revisar derechos periódicamente y al cambiar o cesar el usuario; retirar accesos pendientes de revisión.',
      'Registrar y analizar las excepciones de acceso.',
    ],
    auditoria: [
      '¿Cuándo se hizo la última revisión completa de derechos de acceso y con qué resultado?',
      '¿Qué ocurre con los accesos de los usuarios que cambiaron de área hace 6 meses?',
    ],
  },
  '5.19': {
    como: [
      'Clasificar a los proveedores por su exposición a la información y a los servicios críticos.',
      'Evaluar el riesgo del proveedor antes de contratar (due diligence) y al renovar.',
      'Definir el ciclo de vida de la relación con requisitos de seguridad en cada etapa.',
    ],
    auditoria: [
      '¿Qué proveedores tienen acceso a información confidencial? ¿Fueron evaluados antes de contratar?',
      '¿Cómo gestiona el riesgo de concentrarse en un proveedor único?',
    ],
  },
  '5.20': {
    como: [
      'Incorporar requisitos de seguridad medibles y auditables en contratos y SLAs: cifrado, notificación de incidentes, ubicaciones de datos, derechos de auditoría, salida ordenada.',
      'Alinear los requisitos con la criticidad del servicio (clasificación de la información involucrada).',
    ],
    auditoria: [
      '¿Puedo ver las cláusulas de seguridad del contrato con su proveedor principal? ¿Son verificables?',
      '¿Existe obligación de notificar incidentes con plazo concreto?',
    ],
  },
  '5.21': {
    como: [
      'Identificar riesgos específicos de cadena: componentes de terceros, firmware, dependencias de software, origen de los equipos.',
      'Exigir transparencia (SBOM), prácticas de desarrollo seguro y parcheo al proveedor TIC.',
      'Considerar múltiples fuentes para componentes críticos.',
    ],
    auditoria: [
      '¿Conoce los componentes y subcontratistas de segundo nivel de sus servicios críticos?',
      '¿Cómo controla las dependencias de software de sus aplicaciones?',
    ],
  },
  '5.22': {
    como: [
      'Monitorizar el desempeño de seguridad del proveedor frente a lo acordado (métricas, informes, pruebas).',
      'Revisar periódicamente el servicio y sus cambios; gestionar contractualmente los cambios relevantes.',
      'Prever la terminación: migración, retorno de información, borrado certificado.',
    ],
    auditoria: [
      '¿Qué informes de seguridad recibe del proveedor y quién los revisa?',
      '¿Qué pasó la última vez que el proveedor cambió algo sin avisar?',
    ],
  },
  '5.23': {
    como: [
      'Definir qué servicios en nube puede usar la organización (catálogo aprobado) y con qué requisitos por nivel de criticidad.',
      'Cubrir el ciclo: selección, configuración de seguridad, monitorización, governanza de datos y salida (exit plan).',
      'Diferenciar IaaS/PaaS/SaaS en responsabilidades: la seguridad en la nube, no de la nube.',
      'Vincular con controles técnicos: configuración (8.9), identidades (5.16), cifrado (8.24).',
    ],
    auditoria: [
      '¿Qué proveedores cloud usan y quién los aprobó? ¿Hay SaaS no aprobados (shadow IT)?',
      '¿Cómo recuperaría su información si el proveedor desaparece mañana?',
    ],
  },
  '5.24': {
    como: [
      'Definir la estructura de respuesta: roles (CSIRT/SOC), niveles de severidad, matriz de escalado, plantillas.',
      'Preparar canales redundantes de comunicación (incluidos offline para cuando la red esté comprometida).',
      'Ensayar con simulacros periódicos y medir los tiempos de respuesta.',
    ],
    auditoria: [
      '¿Muestra el procedimiento de gestión de incidentes y su último simulacro?',
      '¿Quién decide la activación del plan y cómo se le localiza a las 3 de la mañana?',
    ],
  },
  '5.25': {
    como: [
      'Definir qué cuenta como evento y cómo llega al evaluador (alertas, reportes de usuarios, telemetría).',
      'Establecer criterios de categorización como incidente y quién decide.',
      'Eliminar ruido: sin priorización, los alertas relevantes se pierden.',
    ],
    auditoria: [
      '¿Cuántos eventos recibió el mes pasado y cuántos se convirtieron en incidentes?',
      '¿Puede mostrarme un evento que se evaluó y descartó, con su justificación?',
    ],
  },
  '5.26': {
    como: [
      'Responder según playbook por tipo (ransomware, filtración de datos, phishing, caída): contención, erradicación, recuperación.',
      'Respetar la cadena de custodia si puede haber acciones legales (relación con 5.28).',
      'Notificar a quien deba ser notificado (dirección, clientes, regulador) conforme a plazos legales.',
    ],
    auditoria: [
      '¿Cuál fue el último incidente real y cómo se ejecutó la respuesta? ¿Hay bitácora?',
      '¿Qué plazo de notificación a la autoridad de protección de datos aplica y quién lo cursa?',
    ],
  },
  '5.27': {
    como: [
      'Cerrar cada incidente con lecciones aprendidas: causa raíz, controles que fallaron, qué cambia.',
      'Alimentar con los aprendizajes el registro de riesgos, las pruebas y las reglas de detección.',
      'Compartir el conocimiento (interno, sectorial) sin exponer datos sensibles.',
    ],
    auditoria: [
      '¿Qué cambió en el SGSI a raíz del último incidente?',
      '¿Hay un repositorio de lecciones aprendidas accesible al equipo de seguridad?',
    ],
  },
  '5.28': {
    como: [
      'Definir qué se preserva (logs, imágenes de memoria, copias de sistemas) y cómo: herramientas forenses, hashes, cadena de custodia.',
      'Capacitar al primer respondedor: lo que no se preserva bien al inicio, no se recupera después.',
      'Alinear retención y formatibilidad con requisitos legales.',
    ],
    auditoria: [
      '¿Quién puede iniciar la preservación de evidencias y con qué procedimiento?',
      '¿Dónde se guardan las evidencias y cómo se demuestra su integridad?',
    ],
  },
  '5.29': {
    como: [
      'Definir qué controles deben mantenerse durante una interrupción (los que no dependen del sistema caído): registros en papel de accesos, custodia de medios, identidad de emergencias.',
      'Integrar con continuidad (ISO 22301): la seguridad no puede ser el freno ni quedar apagada en la recuperación.',
      'Ensayar los modos degradados en los simulacros.',
    ],
    auditoria: [
      'En el último simulacro de caída, ¿qué protecciones siguieron funcionando y cuáles no?',
      '¿Qué procedimiento usa el personal mientras reconstruye sin acceso a los sistemas?',
    ],
  },
  '5.30': {
    como: [
      'Traducir los objetivos de continuidad (RTO/RPO del BIA) en capacidad TIC: redundancia, backups, sitios alternos, nubes.',
      'Probar con ejercicios reales de restauración y conmutación; medir tiempos obtenidos vs. objetivos.',
      'Mantener actualizados los planes de recuperación de TI con cada cambio arquitectónico.',
    ],
    auditoria: [
      '¿Cuándo probó por última vez la restauración completa de un sistema crítico? ¿Qué RTO real obtuvo?',
      '¿Quién aprobó el RTO/RPO y con qué base de negocio?',
    ],
  },
  '5.31': {
    como: [
      'Levantar el mapa de requisitos aplicables: protección de datos, secreto de comunicaciones, notificación de brechas, sectoriales, contratos.',
      'Mantener el registro vivo con dueño y revisión periódica.',
      'Vincular cada requisito con los controles que lo cubren.',
    ],
    auditoria: [
      '¿Qué requisitos legales le aplican? ¿Quién vigila que el listado no quede obsoleto?',
      '¿Cómo demuestra cumplimiento de uno de esos requisitos ante el regulador?',
    ],
  },
  '5.32': {
    como: [
      'Controlar licencias de software (uso legal, trazabilidad, renovaciones).',
      'Respetar licencias del material usado (open source, contenidos) y sus obligaciones (copyleft, atribución).',
      'Definir quién decide arquitecturas con licenciamiento especial.',
    ],
    auditoria: [
      '¿Hay un inventario de licencias y de uso de componentes open source en sus productos?',
    ],
  },
  '5.33': {
    como: [
      'Identificar los registros con valor probatorio (logs, contratos, evidencias sanitarias o financieras) y fijar retención, protección e integridad.',
      'Prevenir falsificación: trazabilidad de cambios, accesos restringidos, custodia segura.',
      'Definir disposición final legalmente compatible.',
    ],
    auditoria: [
      '¿Puede demostrar que un registro de hace tres años no fue alterado?',
    ],
  },
  '5.34': {
    como: [
      'Identificar qué PII trata y bajo qué base legal, con evaluación de impacto (EIPD) cuando proceda.',
      'Aplicar minimización, plazos de conservación y derechos de interesados con procedimiento documentado.',
      'Alinear con el deleg de protección de datos si existe; considerar la extensión ISO/IEC 27701.',
    ],
    auditoria: [
      '¿Tiene registro de tratamientos y sabe cuál es la base legítima del más sensible?',
      '¿Cómo atiende un derecho de supresión que afecta a backups?',
    ],
  },
  '5.35': {
    como: [
      'Programar revisiones independientes (no por quien implementó) a intervalos y ante cambios significativos: pentesting externo, revisión del diseño, consultoría.',
      'Documentar hallazgos y llevarlos al riesgo del proyecto/SGSI.',
      'Definir independencia real del revisor.',
    ],
    auditoria: [
      '¿Quién realizó la última revisión independiente y qué encontró?',
      '¿Se materializaron sus recomendaciones?',
    ],
  },
  '5.36': {
    como: [
      'Definir cómo se verifica el cumplimiento de políticas propias: comprobaciones automáticas de configuración, muestras manuales, revisiones por área.',
      'Escalar incumplimientos sistemáticos a la dirección (10.2).',
    ],
    auditoria: [
      '¿Qué incumplimientos de política detectó el último trimestre y qué hizo?',
    ],
  },
  '5.37': {
    como: [
      'Documentar los procedimientos operativos de instalaciones de procesamiento: arranque/parada, copias, gestión de incidencias rutinarias.',
      'Mantenerlos accesibles para quien los necesita y actualizados tras cambios.',
      'Vincular con la gestión de cambios (8.32).',
    ],
    auditoria: [
      'Si mañana entra un operador nuevo sin contexto, ¿puede operar el centro con los procedimientos escritos?',
    ],
  },
  '6.1': {
    como: [
      'Definir qué verificaciones aplica según ley, sector y criticidad del acceso, y quién las ejecuta.',
      'Documentar el resultado sin discriminación y con base legal para el tratamiento de esos datos.',
      'Reverificar periódicamente en puestos sensibles.',
    ],
    auditoria: [
      '¿A qué puestos exige cribado y qué incluye? ¿Puede mostrarme un caso sin exponer datos personales?',
    ],
  },
  '6.2': {
    como: [
      'Incluir cláusulas de confidencialidad y seguridad en el contrato; referenciar las políticas aplicables.',
      'Actualizar el modelo cuando cambien políticas; recoger las responsabilidades persistentes post-contrato.',
    ],
    auditoria: [
      '¿Qué responsabilidad de seguridad asume el empleado al firmar?',
    ],
  },
  '6.3': {
    como: [
      'Combinar inducción obligatoria al ingreso, formación continua por rol y campañas de concienciación.',
      'Usar canales variados (microlearning, simulacros de phishing) y medir la reacción de comportamiento, no solo la asistencia.',
      'Extender a partes interesadas relevantes (contratistas, clientes que acceden).',
    ],
    auditoria: [
      '¿Cuándo capacitó por última vez y qué porcentaje aprobó?',
      '¿Qué tasa de clickbait tuvo la última campaña de phishing?',
    ],
  },
  '6.4': {
    como: [
      'Formalizar un procedimiento disciplinario proporcionado y conocido, con pasos, garantías y plazos.',
      'Que la sanción no dependa solo del área de seguridad: HR, legal y dirección involucrados.',
    ],
    auditoria: [
      '¿Se ha aplicado el procedimiento disciplinario? ¿Con qué resultado, sin exponer identidades?',
    ],
  },
  '6.5': {
    como: [
      'Definir obligaciones que sobreviven al contrato (confidencialidad, no divulgación) y comunicárselas a la salida.',
      'Checklist de desconexión: cuentas, accesos, activos, claves.',
    ],
    auditoria: [
      '¿Qué recuerda el personal al salir? ¿Cómo se le comunica?',
    ],
  },
  '6.6': {
    como: [
      'Mantener un modelo de NDA y saber cuándo usarlo (empleados, proveedores, socios, revisores).',
      'Revisar periodicamente si los acuerdos vigentes reflejan los riesgos actuales.',
    ],
    auditoria: [
      '¿Quién firma NDA con usted cuando accede a su información? ¿Están vigentes los antiguos?',
    ],
  },
  '6.7': {
    como: [
      'Evaluar riesgos específicos del teletrabajo: red doméstica, espacio compartido, robos, shoulder surfing, menores en casa.',
      'Proveer controles: VPN, gestión de endpoints, cifrado, autenticación reforzada y reglas físicas.',
      'Documentar acuerdos de uso para trabajo remoto.',
    ],
    auditoria: [
      '¿Qué controles distintos exige al teletrabajador frente al usuario en oficina?',
    ],
  },
  '6.8': {
    como: [
      'Dar canales fáciles de reporte (buzón, botón, teléfono) y una cultura que no castigue reportar.',
      'Responder a cada reporte (acuse y clasificación) o el canal muere.',
      'Medir tiempo y calidad de los reportes ciudadanos.',
    ],
    auditoria: [
      '¿Puedo reportar un correo sospechoso en menos de 30 segundos? ¿Qué pasó con el último reporte?',
    ],
  },
  '7.1': {
    como: [
      'Definir perímetros físicos por capas (exterior, edificio, sala técnica, rack) según la información alojada.',
      'Documentar dónde empieza y termina cada perímetro y quién lo aprueba.',
    ],
    auditoria: [
      '¿Puede describirme los perímetros de seguridad del centro de datos y su justificación?',
    ],
  },
  '7.2': {
    como: [
      'Controles de entrada proporcionados: tarjetas, biométricos, guardias, visitantes acompañados.',
      'Bitácora de entradas y revisiones periódicas de listas maestras.',
      'Puntos de acceso protegidos contra cola-tailgating.',
    ],
    auditoria: [
      '¿Cómo entra un visitante a la sala de servidores y quién lo registra?',
      '¿Cuándo se revocó por última vez una tarjeta de acceso caducada?',
    ],
  },
  '7.3': {
    como: [
      'Diseñar oficinas y salas con criterios físicos: muros hasta losa, puertas resistentes, cerraduras controladas, ventanas opacas.',
      'Restringir documentación visible desde accesos públicos.',
    ],
    auditoria: [
      '¿Puede un tercero sin acreditación observar pantallas o documentos desde el exterior?',
    ],
  },
  '7.4': {
    como: [
      'Videovigilancia y sensores proporcionados al riesgo, con respeto a privacidad y avisos legales.',
      'Grabaciones conservadas con tiempo y accesos controlados; monitorización activa, no solo grabación.',
    ],
    auditoria: [
      '¿Quién revisa las alertas de intrusión y de noche?',
      '¿Cuánto retienen las grabaciones y quién puede verlas?',
    ],
  },
  '7.5': {
    como: [
      'Proteger contra incendios, agua, polvo, energía inestable, sismos y amenazas climáticas según la geografía.',
      'Sistemas de detección/supresión, elevación de equipos, mantenimientos certificados.',
    ],
    auditoria: [
      '¿Qué amenazas naturales son relevantes para su ubicación y qué las mitiga?',
    ],
  },
  '7.6': {
    como: [
      'Reglas de trabajo en salas seguras: sin dispositivos personales, acompañamiento, control de materiales.',
      'Registro de tareas realizadas en zona segura.',
    ],
    auditoria: [
      '¿Qué lleva puesto un técnico externo al entrar a la sala de datos?',
    ],
  },
  '7.7': {
    como: [
      'Regla de escritorio: no documentos sensibles a la vista ni al final de la jornada; pantallas bloqueadas automáticamente.',
      'Destrucción segura de papel; armarios con llave para niveles altos.',
      'Recordatorios y verificaciones por rondas.',
    ],
    auditoria: [
      'Si entro ahora a las oficinas, ¿encuentro información confidencial sin proteger?',
    ],
  },
  '7.8': {
    como: [
      'Ubicar equipos fuera de zonas de paso, anclados, sin exponer etiquetas de red; pantalla y teclado orientados a la privacidad.',
      'Evaluar riesgos ambientales del emplazamiento concreto.',
    ],
    auditoria: [
      '¿Qué equipos están en zonas accesibles al público?',
    ],
  },
  '7.9': {
    como: [
      'Reglas para activos fuera de sede: cifrado de portátiles y móviles, no dejar en vehículos, transporte seguro, límites de uso.',
      'Inventario de activos móviles y reportes de extravío inmediatos.',
    ],
    auditoria: [
      '¿Qué ocurre si se pierde un portátil con datos de clientes? ¿Está cifrado y localizado?',
    ],
  },
  '7.10': {
    como: [
      'Gestionar el ciclo de vida de medios: adquisición clasificado, uso, reetiquetado, transporte y eliminación segura.',
      'Controlar extraíbles: bloqueo, registro, alternativas seguras.',
    ],
    auditoria: [
      '¿Puede un USB entrar o salir con datos de la organización?',
    ],
  },
  '7.11': {
    como: [
      'Garantizar energía (SAI, generador con pruebas), refrigeración con redundancia y detección de fugas/incendio en salas.',
      'Mantenimientos con planes de contingencia para la interrupción de servicios.',
    ],
    auditoria: [
      '¿Cuándo probó el generador? ¿Qué autonomía de SAI tiene y para qué cargas?',
    ],
  },
  '7.12': {
    como: [
      'Proteger el cableado: canalizaciones segregadas, rutas inaccesibles, detección de intrusión en tendederos, blindaje frente a interferencia.',
      'Documentar planos de cableado y controlar su acceso.',
    ],
    auditoria: [
      '¿Puede alguien conectar un dispositivo a una toma libre de la red corporativa?',
    ],
  },
  '7.13': {
    como: [
      'Mantenimiento según fabricante con técnicos autorizados y supervisión.',
      'Borrado/purga de equipos antes de mantenimiento externo; registro de intervenciones.',
    ],
    auditoria: [
      '¿Qué protocolo sigue cuando un técnico externo abre un equipo con datos?',
    ],
  },
  '7.14': {
    como: [
      'Verificar purga/borrado certificable de medios antes de reuso o desecho; destruir si no es posible.',
      'Retirar licencias y datos; destruir con trazabilidad (certificado de destrucción).',
    ],
    auditoria: [
      '¿Qué hizo con los discos de la última renovación de equipos? ¿Puede probarlo?',
    ],
  },
  '8.1': {
    como: [
      'Definir línea base segura por tipo de dispositivo: cifrado, parcheo, MDM, control de aplicaciones.',
      'Aplicar a equipos propios, BYOD y dispositivos efímeros de terceros.',
      'Restringir el almacenamiento local sin control.',
    ],
    auditoria: [
      '¿Está cifrado todo endpoint que sale con información fuera de la oficina?',
      '¿Cómo conoce y controla los dispositivos de sus usuarios remotos?',
    ],
  },
  '8.2': {
    como: [
      'Inventariar cuentas privilegiadas y su titular; eliminar las heredadas.',
      'Acceso privilegiado justificado, con caducidad y elevación puntual (just-in-time) cuando sea posible.',
      'Registro y revisión independiente del uso privilegiado.',
    ],
    auditoria: [
      '¿Cuántas cuentas administrativas hay y cuándo se revisó cada una?',
      '¿Puede un administrador hacer algo y que nadie más lo vea?',
    ],
  },
  '8.3': {
    como: [
      'Aplicar reglas de negocio y de clasificación a las consultas y objetos de datos (mínimo privilegio a nivel de fila/campo cuando aplica).',
      'Proteger también por canales no técnicos (impresión, exportaciones).',
    ],
    auditoria: [
      '¿Un usuario puede ver datos de clientes que no atiende?',
    ],
  },
  '8.4': {
    como: [
      'Gestionar el acceso al código fuente con el mismo rigor que los datos: mínimo privilegio, ramas protegidas, revisión obligatoria.',
      'Controlar claves y secretos del repositorio; restringir el código de terceros.',
    ],
    auditoria: [
      '¿Quién puede subir código a producción y qué revisión pasa?',
    ],
  },
  '8.5': {
    como: [
      'Autenticación acorde a la sensibilidad: MFA en accesos remotos, privilegiados y hacia datos sensibles.',
      'Gestionar ciclos de tokens, certificados y métodos de recuperación.',
      'Vigilar intentos fallidos en cascada y ataques de fatiga.',
    ],
    auditoria: [
      '¿Qué accesos tienen MFA obligatorio? ¿Hay excepciones y quién las autorizó?',
    ],
  },
  '8.6': {
    como: [
      'Monitorizar capacidad (almacenamiento, cómputo, ancho de banda) y definir umbrales de alerta.',
      'Plan de crecimiento con los objetivos de negocio; probar planes de contingencia de capacidad.',
    ],
    auditoria: [
      '¿Cuál fue la última saturación y se vio venir en los paneles?',
    ],
  },
  '8.7': {
    como: [
      'Capas: EDR/antimalware gestionado centralmente, filtros de correo y web, sandboxing de adjuntos.',
      'Concienciación: el eslabón de clic; política de dispositivos extraíbles.',
      'Actualización y verificación de que las protecciones están activas (relación con 8.16).',
    ],
    auditoria: [
      '¿Qué porcentaje de endpoints tiene el antimalware activo y actualizado hoy?',
    ],
  },
  '8.8': {
    como: [
      'Inventario técnico completo (sin él no hay superficie conocida).',
      'Vigilar fuentes CVE/advisories, evaluar exposición con criticidad del activo, priorizar por exploit real.',
      'SLA de parcheo por severidad y rutas de excepción con compensaciones.',
    ],
    auditoria: [
      '¿Qué criticidad de vulnerabilidad obliga a parchear en menos de 72 horas? ¿Se cumple?',
      '¿Muestre el informe de vulnerabilidades abiertas y sus dueños.',
    ],
  },
  '8.9': {
    como: [
      'Definir líneas base seguras por tipo (hardening) y almacenar configuraciones como código.',
      'Detectar desviaciones (drift) y gestionar excepciones con aprobación.',
      'Revisar configuraciones periódicamente, sobre todo tras incidentes.',
    ],
    auditoria: [
      '¿Cómo sabe que un servidor mantiene hoy la configuración aprobada?',
    ],
  },
  '8.10': {
    como: [
      'Eliminar información cuando ya no se necesita (plazos de retención, bajas de personal, proyectos cerrados).',
      'Borrado efectivo considerando réplicas, cachés y copias de seguridad.',
      'Diferenciar borrado lógico y destrucción física de soportes (7.14).',
    ],
    auditoria: [
      '¿Qué información conserva sin finalidad y desde cuándo?',
    ],
  },
  '8.11': {
    como: [
      'Ofuscar, enmascarar o anonimizar según el caso de uso (entornos de prueba, analítica, soporte).',
      'Definir la técnica (tokenización, masking, redacción) alineada con el riesgo de reidentificación.',
    ],
    auditoria: [
      '¿Los datos que usan en pruebas son reales, anonimizados o sintéticos?',
    ],
  },
  '8.12': {
    como: [
      'Identificar la información a proteger y sus rutas de salida probables (correo, nube personal, USB, portapapeles).',
      'Aplicar reglas DLP graduadas: aviso, bloqueo, cifrado, auditoría.',
      'Equilibrio: sin capacitación, el DLP genera trabajo y puentes.',
    ],
    auditoria: [
      '¿Qué intentos de salida de información sensible detectó el último trimestre?',
    ],
  },
  '8.13': {
    como: [
      'Regla 3-2-1 o equivalente: frecuencia y retención según RPO; versiones inmutables para resistir ransomware.',
      'Probar restauraciones realmente, con métricas de tiempo.',
      'Proteger credenciales de backup y separar el plano de administración.',
    ],
    auditoria: [
      '¿Cuándo restauró por última vez un sistema completo y cuánto tardó?',
    ],
  },
  '8.14': {
    como: [
      'Redundancia proporcional a los requisitos de disponibilidad de negocio (no toda la infraestructura paga el mismo nivel).',
      'Conmutación probada; evitar dependencia de un solo proveedor o zona.',
    ],
    auditoria: [
      '¿Qué servicio crítico quedaría caído mañana sin redundancia?',
    ],
  },
  '8.15': {
    como: [
      'Decidir qué registrar (autenticación, privilegiados, cambios, seguridad) con sincronía horaria (8.17).',
      'Proteger los logs: centralizar, integridad, retención, acceso restringido.',
      'Analizar: el log que nadie consulta es coste sin beneficio.',
    ],
    auditoria: [
      '¿Puede reconstruir qué hizo un administrador la semana pasada?',
    ],
  },
  '8.16': {
    como: [
      'Definir qué anomalía busca (reglas, casos de uso, UEBA) y hacia dónde va (cola de triaje del SOC).',
      'Cobertura: endpoints, red, cloud, identidades; revisar periodically los casos de uso.',
    ],
    auditoria: [
      '¿Qué alerta anómala se activó el último mes y qué se hizo?',
    ],
  },
  '8.17': {
    como: [
      'Sincronizar relojes a fuentes autorizadas (NTP interno, stratum controlado) y proteger la fuente.',
      'Los logs sin hora fiable pierden valor probatorio (clave en incidentes multi-sistema).',
    ],
    auditoria: [
      '¿A qué fuente de tiempo están sincronizados los registros?',
    ],
  },
  '8.18': {
    como: [
      'Listar las utilidades poderosas (editores de bajo nivel, scripts, herramientas de red) y controlar su uso y ejecución.',
      'Aprobar y registrar cada uso privilegiado; limitar a entornos autorizados.',
    ],
    auditoria: [
      '¿Qué herramientas de diagnóstico puede usar un técnico y con qué permiso?',
    ],
  },
  '8.19': {
    como: [
      'Instalación controlada: repositorios de software aprobados, firma, despliegue gestionado por el equipo de administración.',
      'Bloquear instalación por el usuario salvo catálogo permitido.',
    ],
    auditoria: [
      '¿Puedo instalar en un equipo corporativo una aplicación de internet?',
    ],
  },
  '8.20': {
    como: [
      'Diseñar la red con requisitos de seguridad: segmentación, gestión fuera de banda, dispositivos endurecidos (8.9), filtrado.',
      'Gestionar el ciclo: cambios (8.32), monitorización (8.16), documentación al día.',
    ],
    auditoria: [
      '¿Qué partes de la red son planas y cuáles están segmentadas?',
    ],
  },
  '8.21': {
    como: [
      'Definir requisitos de seguridad y niveles de servicio para cada servicio de red (incluidos de terceros).',
      'Monitorizar el cumplimiento del SLA de seguridad.',
    ],
    auditoria: [
      '¿Qué seguridad exige a su operador o proveedor de conectividad?',
    ],
  },
  '8.22': {
    como: [
      'Segregar por confianza: usuarios, servicios, proveedores, invitados, gestión; y por criticidad.',
      'La red de gestión no comparte camino con la de producción; los invitados no ven nada interno.',
    ],
    auditoria: [
      '¿Desde la wifi de invitados puede alcanzarse algún recurso corporativo?',
    ],
  },
  '8.23': {
    como: [
      'Filtrar categorías y reputación de URL en navegación y correos; aplicar también a dispositivos móviles fuera de oficina.',
      'Gestionar excepciones con justificación y revisión periódica.',
    ],
    auditoria: [
      '¿Qué ocurre si un usuario visita un sitio de malware conocido?',
    ],
  },
  '8.24': {
    como: [
      'Definir cuándo y qué cifrar: tránsito (TLS), reposo (discos, bases, backups), extremo a extremo para lo crítico.',
      'Gestión de claves: quién genera, custodia, reparte, revoca, destruye; algoritmos vigentes y tamaños.',
      'Cuidar la propiedad de las claves en servicios cifrados por el proveedor.',
    ],
    auditoria: [
      '¿Dónde están las claves de cifrado de backups y quién puede usarlas?',
    ],
  },
  '8.25': {
    como: [
      'Adoptar ciclo de vida de desarrollo seguro con puertas de seguridad (modelado de amenazas en nuevos desarrollos, pruebas, release checklist).',
      'Aplicar también a software comprado: requisitos y validación (8.26, 8.30).',
    ],
    auditoria: [
      '¿En qué fase del ciclo entra el equipo de seguridad y con qué entregable?',
    ],
  },
  '8.26': {
    como: [
      'Mantener catálogo de requisitos de seguridad de aplicaciones (autenticación, sesiones, validación de entrada, logs, datos personales).',
      'Revisar y aprobar los requisitos antes de desarrollar o adquirir.',
    ],
    auditoria: [
      '¿Puede mostrarme la especificación de seguridad de una aplicación reciente?',
    ],
  },
  '8.27': {
    como: [
      'Adoptar principios: mínimo privilegio, defensa en profundidad, segmentación, diseño para fallos seguros.',
      'Revisar arquitecturas críticas contra el catálogo de principios.',
    ],
    auditoria: [
      '¿Qué principio de diseño seguro se aplicó en la última arquitectura aprobada?',
    ],
  },
  '8.28': {
    como: [
      'Formar a desarrolladores (OWASP) y aplicar guías de codificación segura por lenguaje.',
      'Herramientas SAST/escáneres de dependencias en el pipeline; eliminar secretos del código.',
      'Revisar código con pares para lógicas sensibles.',
    ],
    auditoria: [
      '¿Qué comprobación de secure coding pasa un commit antes de merging?',
    ],
  },
  '8.29': {
    como: [
      'Definir qué, cuándo y cómo se prueba (unitarias con datos de prueba, SAST/DAST, pentest antes de release mayor).',
      'Criterios de aceptación de seguridad explícitos.',
    ],
    auditoria: [
      '¿Qué hallazgos de seguridad impidieron un despliegue?',
    ],
  },
  '8.30': {
    como: [
      'Requisitos contractuales de seguridad del desarrollo externo y propiedad del código entregado.',
      'Supervisión y revisión de hitos; pruebas independientes de lo entregado.',
    ],
    auditoria: [
      '¿Usted revisa el código que le entrega el contratista de desarrollo?',
    ],
  },
  '8.31': {
    como: [
      'Separar desarrollo, pruebas y producción con controles de acceso y datos distintos.',
      'Despliegues gestionados (CI/CD) sin puertas traseras; datos de producción en pruebas solo ofuscados (8.11, 8.33).',
    ],
    auditoria: [
      '¿Tiene un desarrollador acceso directo a producción?',
    ],
  },
  '8.32': {
    como: [
      'Procedimiento de cambios: registro, clasificación, evaluación de impacto en seguridad, aprobación, pruebas, reversión.',
      'Cambios urgentes con aprobación posterior documentada.',
    ],
    auditoria: [
      '¿Qué cambió el último mes sin pasar por el proceso de cambios?',
    ],
  },
  '8.33': {
    como: [
      'Usar datos de prueba representativos pero no reales; si son reales, ofuscarlos y tratarlos con el nivel original.',
      'Borrar datos de prueba después de cada ciclo.',
    ],
    auditoria: [
      '¿Los datos de sus entornos de prueba contienen información de clientes?',
    ],
  },
  '8.34': {
    como: [
      'Acordar alcance y ventanas de las pruebas de auditoría con la dirección del sistema; medir impacto operativo.',
      'Herramientas no invasivas cuando el sistema es sensible; plan de reversión.',
    ],
    auditoria: [
      '¿Las pruebas de auditoría pueden tumbar un servicio productivo? ¿Quién lo autoriza?',
    ],
  },
};

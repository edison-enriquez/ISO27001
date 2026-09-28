import { TextoMultilinea } from './svgUtils';

/** Familia ISO/IEC 27000: vocabulario común alrededor de las normas de apoyo. */
export function DiagramaFamilia27000() {
  const satelites = [
    { id: '27001', txt: 'Requisitos del SGSI (certificable)', ang: -100, destacada: true },
    { id: '27002', txt: 'Guía de implementación de controles', ang: -60 },
    { id: '27003', txt: 'Guía de implantación del SGSI', ang: -20 },
    { id: '27004', txt: 'Métricas y medición del SGSI', ang: 20 },
    { id: '27005', txt: 'Gestión del riesgo S.I.', ang: 60 },
    { id: '27006', txt: 'Requisitos de organismos de auditoría', ang: 100 },
  ];
  const cx = 220;
  const cy = 210;
  const R = 185;

  return (
    <svg viewBox="0 0 980 420" role="img"
      aria-label="Familia ISO 27000: la ISO/IEC 27000 de términos y vocabulario en el centro, rodeada de las normas 27001 requisitos del SGSI, certificable; 27002 guía de controles; 27003 guía de implantación; 27004 métricas; 27005 gestión del riesgo; y 27006 requisitos de los organismos de auditoría.">
      <title>Familia ISO/IEC 27000</title>
      <circle cx={cx} cy={cy} r={130} fill="var(--uao-vino)" opacity={0.12} stroke="var(--uao-vino)" strokeWidth={2} />
      <text x={cx} y={cy - 14} textAnchor="middle" fontSize="27" fontWeight="800" fill="var(--uao-vino)">ISO/IEC</text>
      <text x={cx} y={cy + 16} textAnchor="middle" fontSize="27" fontWeight="800" fill="var(--uao-vino)">27000</text>
      <text x={cx} y={cy + 42} textAnchor="middle" fontSize="13" fill="var(--texto-suave)">términos y vocabulario</text>

      {satelites.map((s) => {
        const rad = (s.ang * Math.PI) / 180;
        const x = cx + R * Math.cos(rad) + 250;
        const y = cy - R * Math.sin(rad) * 0.92;
        return (
          <g key={s.id}>
            <line x1={cx + 112 * Math.cos(rad) * 1.15} y1={cy - 112 * Math.sin(rad) * 0.92}
              x2={x - 16} y2={y} stroke="var(--borde-fuerte)" strokeWidth={2} />
            <circle cx={x} cy={y} r={27} fill="var(--uao-vino)" opacity={s.destacada ? 1 : 0.55} />
            <text x={x} y={y + 5} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#fff">{s.id}</text>
            <text x={x + 38} y={y - 2} fontSize="14" fontWeight={s.destacada ? 700 : 600} fill="var(--texto)">{s.id}</text>
            <TextoMultilinea x={x + 38} y={y + 15} texto={s.txt} maxAncho={34} maxLineas={2} fontSize={12.5} fill="var(--texto-suave)" />
          </g>
        );
      })}
    </svg>
  );
}

/** Proceso de gestión del riesgo del SGSI, alineado con 6.1.2/6.1.3 e ISO/IEC 27005. */
export function DiagramaProcesoRiesgo() {
  const pasos = [
    { t: '1 · Establecer el contexto', s: 'Criterios de riesgo y de aceptación (6.1.2 a)' },
    { t: '2 · Identificar', s: 'Riesgos sobre la CIA y dueños del riesgo (6.1.2 c)' },
    { t: '3 · Analizar', s: 'Consecuencias y probabilidad (6.1.2 d)' },
    { t: '4 · Evaluar y priorizar', s: 'Contra los criterios aceptados (6.1.2 e)' },
    { t: '5 · Decidir el tratamiento', s: 'Evitar, asumir, compartir o reducir (6.1.3 a)' },
    { t: '6 · Seleccionar controles', s: 'Necesarios y comparados con el Anexo A (6.1.3 b-c)' },
    { t: '7 · SoA y plan de tratamiento', s: 'Declaración de aplicabilidad y plan (6.1.3 d-e)' },
    { t: '8 · Aprobar y aceptar', s: 'El dueño aprueba el plan y acepta el residual (6.1.3 f)' },
  ];
  const w = 940;
  const cols = 4;
  const cw = (w - 40) / cols;
  const ch = 122;
  const h = 40 + 2 * (ch + 44);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img"
      aria-label="Ocho pasos de la gestión del riesgo de seguridad de la información: establecer el contexto, identificar riesgos y dueños, analizar consecuencias y probabilidad, evaluar y priorizar, decidir opciones de tratamiento, seleccionar controles y compararlos con el Anexo A, producir la declaración de aplicabilidad y el plan de tratamiento, y que el dueño del riesgo apruebe y acepte el riesgo residual.">
      <title>Gestión del riesgo del SGSI paso a paso</title>
      <rect x={8} y={8} width={w - 16} height={h - 16} rx={14} fill="none" stroke="var(--borde)" />
      <text x={w / 2} y={36} textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--texto-suave)">
        Comunicación y consulta · seguimiento y revisión durante todo el proceso
      </text>

      {pasos.map((p, i) => {
        const fila = Math.floor(i / cols);
        const col = i % cols;
        const x = 26 + col * cw;
        const y = 58 + fila * (ch + 40);
        return (
          <g key={p.t}>
            <rect x={x} y={y} width={cw - 26} height={ch} rx={10}
              fill="var(--caja-info-fondo)" stroke="var(--caja-info-borde)" strokeWidth={1.5} />
            <text x={x + 14} y={y + 28} fontSize="15" fontWeight="700" fill="var(--uao-vino)">{p.t}</text>
            <TextoMultilinea x={x + 14} y={y + 52} texto={p.s} maxAncho={36} maxLineas={3} fontSize={13} fill="var(--texto-suave)" />
            {i < pasos.length - 1 && (
              <path
                d={col < cols - 1
                  ? `M ${x + cw - 24} ${y + ch / 2} h ${cw - cw + 22}`
                  : `M ${x + (cw - 26) / 2} ${y + ch + 2} v 30`}
                stroke="var(--acento)" strokeWidth={2.5} fill="none" markerEnd="url(#fr-flecha)" />
            )}
          </g>
        );
      })}
      <defs>
        <marker id="fr-flecha" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--acento)" />
        </marker>
      </defs>
    </svg>
  );
}

/** Flujo del programa de auditoría según ISO 19011:2018 (cláusulas 5 y 6). */
export function DiagramaProgramaAuditoria() {
  const columnas = [
    { titulo: 'PLANEAR', color: 'var(--caja-clave-borde)' },
    { titulo: 'HACER', color: 'var(--acento-hover)' },
    { titulo: 'VERIFICAR', color: 'var(--uao-vino)' },
    { titulo: 'ACTUAR', color: 'var(--caja-clave-titulo)' },
  ];
  // x: columna por fase PHVA; y: fila dentro de la franja (PA = programa, AU = auditoría).
  const bloques: { t: string; s: string; fase: number; franja: 'PA' | 'AU'; dx: number }[] = [
    { t: '5.2', s: 'Objetivos del programa', fase: 0, franja: 'PA', dx: 0 },
    { t: '5.3', s: 'Riesgos y oportunidades del programa', fase: 0, franja: 'PA', dx: 0 },
    { t: '5.4', s: 'Establecer el programa', fase: 0, franja: 'PA', dx: 0 },
    { t: '5.5', s: 'Implementar el programa', fase: 1, franja: 'PA', dx: 0 },
    { t: '5.6', s: 'Seguimiento del programa', fase: 2, franja: 'PA', dx: 0 },
    { t: '5.7', s: 'Revisión y mejora', fase: 3, franja: 'PA', dx: 0 },
    { t: '6.2', s: 'Iniciar la auditoría', fase: 0, franja: 'AU', dx: 180 },
    { t: '6.3', s: 'Preparar las actividades', fase: 1, franja: 'AU', dx: 0 },
    { t: '6.4', s: 'Realizar la auditoría', fase: 1, franja: 'AU', dx: 0 },
    { t: '6.5', s: 'Preparar y distribuir el informe', fase: 1, franja: 'AU', dx: 0 },
    { t: '6.6', s: 'Completar la auditoría', fase: 2, franja: 'AU', dx: 150 },
    { t: '6.7', s: 'Seguimiento posterior', fase: 3, franja: 'AU', dx: 0 },
  ];
  const w = 1000;
  const h = 620;
  const yPA = 70;
  const yAU = 330;
  const xcol = (f: number) => 60 + f * 236;

  const posPA = [0, 1, 2, 3, 4, 5];
  const posAU = [0, 1, 2, 3, 4, 5];
  let paUsadas = 0;
  let auUsadas = 0;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img"
      aria-label="Flujo de procesos para gestionar un programa de auditoría según ISO 19011:2018, recreado del material del curso. Franja superior, cláusula 5: objetivos del programa, riesgos del programa, establecimiento, implementación, seguimiento y revisión y mejora. Franja inferior, cláusula 6 para cada auditoría: inicio, preparación de actividades, realización, informe, conclusión de la auditoría y seguimiento posterior. Las columnas siguen el ciclo Planear, Hacer, Verificar y Actuar.">
      <title>Flujo del programa de auditoría (ISO 19011:2018)</title>

      {columnas.map((c, i) => (
        <g key={c.titulo}>
          <rect x={xcol(i)} y={14} width={190} height={38} rx={10} fill={c.color} />
          <text x={xcol(i) + 95} y={39} textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff">{c.titulo}</text>
          <line x1={xcol(i) + 95} y1={52} x2={xcol(i) + 95} y2={h - 14} stroke="var(--borde)" strokeWidth={1.5} strokeDasharray="3 6" />
        </g>
      ))}

      <line x1={20} y1={yAU - 28} x2={w - 20} y2={yAU - 28} stroke="var(--borde-fuerte)" strokeWidth={2.5} />
      <text x={30} y={yPA - 6} fontSize="13" fontWeight="700" fill="var(--texto-suave)">CLÁUSULA 5 · GESTIÓN DEL PROGRAMA DE AUDITORÍA</text>
      <text x={30} y={yAU - 10} fontSize="13" fontWeight="700" fill="var(--texto-suave)">CLÁUSULA 6 · REALIZACIÓN DE CADA AUDITORÍA</text>

      {bloques.map((b) => {
        const esPa = b.franja === 'PA';
        const fila = esPa ? paUsadas++ : auUsadas++;
        const y = (esPa ? yPA : yAU) + fila * 52;
        const x = xcol(b.fase) + b.dx;
        return (
          <g key={b.t}>
            <rect x={x} y={y} width={228} height={44} rx={9}
              fill="var(--fondo-suave)" stroke={columnas[b.fase].color} strokeWidth={2} />
            <text x={x + 10} y={y + 19} fontSize="13" fontWeight="800" fill={columnas[b.fase].color}>{b.t}</text>
            <text x={x + 40} y={y + 19} fontSize="13" fill="var(--texto)">{b.s}</text>
            {fila > 0 && (
              <path d={`M ${x + 20} ${y - 8} v 6`} stroke="var(--borde-fuerte)" strokeWidth={1.5} fill="none" />
            )}
          </g>
        );
      })}
      {posPA.map(() => null)}
      {posAU.map(() => null)}
    </svg>
  );
}

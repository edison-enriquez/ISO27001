/**
 * Recreación en SVG de los diagramas clásicos del curso de estudio
 * (estructura de la norma + ciclo PHVA, familia ISO 27000, proceso de riesgo
 * ISO 27005, ciclo evaluación/control y flujo del programa de auditoría).
 *
 * No son copias de las figuras originales: son recreaciones propias, con la
 * misma información, dibujadas con los tokens de color del sitio.
 */

interface Props {
  className?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1 · Estructura de la norma y ciclo PHVA (Deming)
// ─────────────────────────────────────────────────────────────────────────────

const CLAUSULAS = [
  {
    n: '4', titulo: 'Contexto', fase: 'P', color: 'var(--caja-clave-borde)',
    subs: ['4.1 La organización y su contexto', '4.2 Partes interesadas', '4.3 Alcance del SGSI', '4.4 El SGSI'],
  },
  {
    n: '5', titulo: 'Liderazgo', fase: 'P', color: 'var(--caja-clave-borde)',
    subs: ['5.1 Liderazgo y compromiso', '5.2 Política', '5.3 Roles y autoridades'],
  },
  {
    n: '6', titulo: 'Planificación', fase: 'P', color: 'var(--caja-clave-borde)',
    subs: ['6.1 Riesgos y oportunidades', '6.2 Objetivos', '6.3 Planificación de cambios'],
  },
  {
    n: '7', titulo: 'Soporte', fase: 'P', color: 'var(--caja-clave-borde)',
    subs: ['7.1 Recursos', '7.2 Competencia', '7.3 Concienciación', '7.4 Comunicación', '7.5 Info. documentada'],
  },
  {
    n: '8', titulo: 'Operación', fase: 'H', color: 'var(--acento-hover)',
    subs: ['8.1 Control operacional', '8.2 Evaluación del riesgo', '8.3 Tratamiento del riesgo'],
  },
  {
    n: '9', titulo: 'Evaluación del desempeño', fase: 'V', color: 'var(--uao-vino)',
    subs: ['9.1 Seguimiento y medición', '9.2 Auditoría interna', '9.3 Revisión por la dirección'],
  },
  {
    n: '10', titulo: 'Mejora', fase: 'A', color: 'var(--caja-clave-titulo)',
    subs: ['10.1 Mejora continua', '10.2 No conformidad y acción correctiva'],
  },
];

export function DiagramaNormaPhva({ className }: Props) {
  const ancho = 1080;
  const alto = 560;
  const colAncho = 142;
  const hueco = 10;
  const x0 = (ancho - (CLAUSULAS.length * colAncho + (CLAUSULAS.length - 1) * hueco)) / 2;

  return (
    <svg viewBox={`0 0 ${ancho} ${alto}`} className={className} role="img"
      aria-label="Estructura de ISO/IEC 27001:2022: cláusulas 4 a 10 con sus subrequisitos, agrupadas en las cuatro fases del ciclo PHVA: Planear (4 a 7), Hacer (8), Verificar (9) y Actuar (10).">
      <title>Estructura de la norma y ciclo PHVA</title>
      <desc>Las siete cláusulas de requisitos de la ISO/IEC 27001:2022 con sus subapartados, organizadas según el ciclo de Deming aplicado a los sistemas de gestión.</desc>

      {/* Bandas PHVA */}
      <g fontFamily="inherit" fontSize="17" fontWeight="700" textAnchor="middle">
        <rect x={x0} y={14} width={colAncho * 4 + hueco * 3} height={40} rx={8} fill="var(--caja-clave-fondo)" stroke="var(--caja-clave-borde)" />
        <text x={x0 + (colAncho * 4 + hueco * 3) / 2} y={40} fill="var(--caja-clave-titulo)">PLANEAR (P) · cláusulas 4-7</text>
        <rect x={x0 + colAncho * 4 + hueco * 4} y={14} width={colAncho} height={40} rx={8} fill="var(--caja-error-fondo)" stroke="var(--acento-hover)" />
        <text x={x0 + colAncho * 4.5 + hueco * 4.5} y={40} fill="var(--acento-hover)">HACER (D) · cl. 8</text>
        <rect x={x0 + colAncho * 5 + hueco * 5} y={14} width={colAncho} height={40} rx={8} fill="var(--fondo-alt)" stroke="var(--uao-vino)" />
        <text x={x0 + colAncho * 5.5 + hueco * 5.5} y={40} fill="var(--uao-vino)">VERIFICAR · cl. 9</text>
        <rect x={x0 + colAncho * 6 + hueco * 6} y={14} width={colAncho} height={40} rx={8} fill="var(--caja-clave-fondo)" stroke="var(--caja-clave-titulo)" />
        <text x={x0 + colAncho * 6.5 + hueco * 6.5} y={40} fill="var(--caja-clave-titulo)">ACTUAR (A) · cl. 10</text>
      </g>

      {/* Columnas por cláusula */}
      {CLAUSULAS.map((c, i) => {
        const x = x0 + i * (colAncho + hueco);
        const altoCol = 24 + c.subs.length * 62;
        return (
          <g key={c.n}>
            <rect x={x} y={74} width={colAncho} height={altoCol} rx={10}
              fill="var(--fondo-suave)" stroke="var(--borde)" />
            <text x={x + 10} y={106} fontSize="34" fontWeight="800" fill={c.color}>{c.n}</text>
            <text x={x + 10} y={126} fontSize="13" fontWeight="700" fill="var(--texto)">{c.titulo}</text>
            {c.subs.map((s, j) => (
              <g key={s}>
                <rect x={x + 8} y={136 + j * 62} width={colAncho - 16} height={54} rx={7} fill={c.color} opacity={0.9} />
                <text x={x + 15} y={156 + j * 62} fontSize="11.5" fontWeight="600" fill="#fff">
                  {s.split(' ').slice(0, 2).join(' ')}
                </text>
                <text x={x + 15} y={171 + j * 62} fontSize="11.5" fill="#fff">
                  {s.split(' ').slice(2).join(' ')}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {/* Ciclo central */}
      <g transform="translate(540 468)">
        <circle r={62} fill="none" stroke="var(--uao-vino)" strokeWidth={2} opacity={0.25} />
        {(['P', 'H', 'V', 'A'] as const).map((letra, k) => {
          const colores: Record<string, string> = { P: 'var(--caja-clave-borde)', H: 'var(--acento-hover)', V: 'var(--uao-vino)', A: 'var(--caja-clave-titulo)' };
          return (
            <path key={letra}
              d="M -58 -14 A 60 60 0 0 1 36 -48 L 30 -62 L 58 -40 L 30 -18 L 36 -32 A 46 46 0 0 0 -46 -10 Z"
              transform={`rotate(${k * 90})`} fill={colores[letra]} opacity={0.85} />
          );
        })}
        <text x={0} y={-80} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--caja-clave-borde)">PLANEAR</text>
        <text x={88} y={4} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--acento-hover)">HACER</text>
        <text x={0} y={96} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--uao-vino)">VERIFICAR</text>
        <text x={-88} y={4} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--caja-clave-titulo)">ACTUAR</text>
      </g>
    </svg>
  );
}

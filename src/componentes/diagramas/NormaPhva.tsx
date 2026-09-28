import { TextoMultilinea } from './svgUtils';

interface Props {
  className?: string;
}

const FILA_ALT = 66;
const FILA_ALTO = 58;
const SUBS_Y0 = 136;

const CLAUSULAS = [
  {
    n: '4', titulo: 'Contexto de la organización', color: 'var(--caja-clave-borde)',
    subs: ['4.1 Organización y contexto', '4.2 Partes interesadas', '4.3 Alcance del SGSI', '4.4 El SGSI'],
  },
  {
    n: '5', titulo: 'Liderazgo', color: 'var(--caja-clave-borde)',
    subs: ['5.1 Liderazgo y compromiso', '5.2 Política', '5.3 Roles y autoridades'],
  },
  {
    n: '6', titulo: 'Planificación', color: 'var(--caja-clave-borde)',
    subs: ['6.1 Riesgos y oportunidades', '6.2 Objetivos', '6.3 Planificación de cambios'],
  },
  {
    n: '7', titulo: 'Soporte', color: 'var(--caja-clave-borde)',
    subs: ['7.1 Recursos', '7.2 Competencia', '7.3 Concienciación', '7.4 Comunicación', '7.5 Información documentada'],
  },
  {
    n: '8', titulo: 'Operación', color: 'var(--acento-hover)',
    subs: ['8.1 Control operacional', '8.2 Evaluación del riesgo', '8.3 Tratamiento del riesgo'],
  },
  {
    n: '9', titulo: 'Evaluación del desempeño', color: 'var(--uao-vino)',
    subs: ['9.1 Seguimiento y medición', '9.2 Auditoría interna', '9.3 Revisión por la dirección'],
  },
  {
    n: '10', titulo: 'Mejora', color: 'var(--caja-clave-titulo)',
    subs: ['10.1 Mejora continua', '10.2 No conformidad y correctivas'],
  },
];

const radv = (v: number) => (v * Math.PI) / 180;
const polar = (deg: number, r: number): [number, number] => [r * Math.cos(radv(deg)), r * Math.sin(radv(deg))];

/** Ciclo PHVA como dona de cuatro cuartos con flechas que apuntan a la fase siguiente. */
function CicloFases() {
  const R = 112;
  const r = 46;
  const fases = [
    { nombre: 'PLANEAR', a1: -132, a2: -48, color: 'var(--caja-clave-borde)' },
    { nombre: 'HACER', a1: -42, a2: 42, color: 'var(--acento-hover)' },
    { nombre: 'VERIFICAR', a1: 48, a2: 132, color: 'var(--uao-vino)' },
    { nombre: 'ACTUAR', a1: 138, a2: 222, color: 'var(--caja-clave-titulo)' },
  ];
  return (
    <>
      {fases.map((f) => {
        const [x1, y1] = polar(f.a1, R);
        const [x2, y2] = polar(f.a2, R);
        const [xi2, yi2] = polar(f.a2, r);
        const [xi1, yi1] = polar(f.a1, r);
        const [tipx, tipy] = polar(f.a2 + 9, R + 2);
        const [b1x, b1y] = polar(f.a2 - 7, R + 13);
        const [b2x, b2y] = polar(f.a2 - 7, R - 11);
        const mid = (f.a1 + f.a2) / 2;
        const [lx, ly] = polar(mid, (R + r) / 2 + 4);
        return (
          <g key={f.nombre}>
            <path
              d={`M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} L ${xi2} ${yi2} A ${r} ${r} 0 0 0 ${xi1} ${yi1} Z`}
              fill={f.color} opacity={0.92}
            />
            <path d={`M ${tipx} ${tipy} L ${b1x} ${b1y} L ${b2x} ${b2y} Z`} fill={f.color} />
            <text x={lx} y={ly + 5} textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#fff">{f.nombre}</text>
          </g>
        );
      })}
      <circle r={r - 12} fill="var(--uao-vino)" opacity={0.12} />
      <text textAnchor="middle" y={5} fontSize="14" fontWeight="800" fill="var(--uao-vino)">SGSI</text>
    </>
  );
}

/**
 * Estructura de la norma (cláusulas 4 a 10 con sus subrequisitos) y el ciclo
 * PHVA/Deming en el que se ordenan. Recreación propia de la figura clásica
 * del curso de auditoría.
 */
export function DiagramaNormaPhva({ className }: Props) {
  const ancho = 1080;
  const colAncho = 142;
  const hueco = 10;
  const x0 = (ancho - (CLAUSULAS.length * colAncho + (CLAUSULAS.length - 1) * hueco)) / 2;
  const filasMax = Math.max(...CLAUSULAS.map((c) => c.subs.length));
  const finColumnas = 74 + 68 + filasMax * FILA_ALT;
  const alto = finColumnas + 330;

  return (
    <svg viewBox={`0 0 ${ancho} ${alto}`} className={className} role="img"
      aria-label="Estructura de ISO/IEC 27001:2022: las cláusulas 4 a 10 con sus subrequisitos, agrupadas bajo las cuatro fases del ciclo PHVA: Planear reúne las cláusulas 4 a 7, Hacer la cláusula 8, Verificar la cláusula 9 y Actuar la cláusula 10. Debajo, el ciclo de mejora continua.">
      <title>Estructura de la norma y ciclo PHVA</title>
      <desc>Las siete cláusulas de requisitos de la ISO/IEC 27001:2022, con sus apartados, organizadas según el ciclo de Deming aplicado a los sistemas de gestión.</desc>

      {/* Bandas PHVA */}
      <g fontSize="14" fontWeight="700" textAnchor="middle">
        <rect x={x0} y={12} width={colAncho * 4 + hueco * 3} height={36} rx={8} fill="var(--caja-clave-fondo)" stroke="var(--caja-clave-borde)" />
        <text x={x0 + (colAncho * 4 + hueco * 3) / 2} y={35} fill="var(--caja-clave-titulo)">PLANEAR (P) · cláusulas 4 a 7</text>
        <rect x={x0 + colAncho * 4 + hueco * 4} y={12} width={colAncho} height={36} rx={8} fill="var(--caja-error-fondo)" stroke="var(--acento-hover)" />
        <text x={x0 + colAncho * 4.5 + hueco * 4.5} y={35} fill="var(--acento-hover)">HACER · cl. 8</text>
        <rect x={x0 + colAncho * 5 + hueco * 5} y={12} width={colAncho} height={36} rx={8} fill="var(--fondo-alt)" stroke="var(--uao-vino)" />
        <text x={x0 + colAncho * 5.5 + hueco * 5.5} y={35} fill="var(--uao-vino)">VERIFICAR · 9</text>
        <rect x={x0 + colAncho * 6 + hueco * 6} y={12} width={colAncho} height={36} rx={8} fill="var(--caja-clave-fondo)" stroke="var(--caja-clave-titulo)" />
        <text x={x0 + colAncho * 6.5 + hueco * 6.5} y={35} fill="var(--caja-clave-titulo)">ACTUAR · 10</text>
      </g>

      {/* Columnas por cláusula */}
      {CLAUSULAS.map((c, i) => {
        const x = x0 + i * (colAncho + hueco);
        const altoCol = 68 + c.subs.length * FILA_ALT;
        return (
          <g key={c.n}>
            <rect x={x} y={74} width={colAncho} height={altoCol} rx={10}
              fill="var(--fondo-suave)" stroke="var(--borde)" />
            <text x={x + 10} y={106} fontSize="32" fontWeight="800" fill={c.color}>{c.n}</text>
            <TextoMultilinea x={x + 44} y={95} texto={c.titulo} maxAncho={16} maxLineas={2} fontSize={12} fontWeight={700} />
            {c.subs.map((s, j) => (
              <g key={s}>
                <rect x={x + 8} y={SUBS_Y0 + j * FILA_ALT} width={colAncho - 16} height={FILA_ALTO} rx={7} fill={c.color} opacity={0.92} />
                <TextoMultilinea x={x + 14} y={SUBS_Y0 + j * FILA_ALT + 18} texto={s} maxAncho={18} maxLineas={3} fontSize={11} fill="#fff" fontWeight={600} />
              </g>
            ))}
          </g>
        );
      })}

      {/* Ciclo PHVA: cuatro cuartos de dona con flechas tangenciales */}
      <g transform={`translate(${ancho / 2} ${finColumnas + 182})`}>
        <CicloFases />
      </g>
    </svg>
  );
}

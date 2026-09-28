import { partir, TextoMultilinea } from './svgUtils';

/** Tipos de auditoría según ISO 19011 (primera, segunda y tercera parte). */
export function DiagramaTiposAuditoria() {
  const tipos = [
    { t: 'Primera parte', quien: 'Auditoría interna', detalle: 'Realizada por, o en nombre de, la propia organización. Alimenta el requisito 9.2 de la 27001.', color: 'var(--caja-clave-borde)' },
    { t: 'Segunda parte', quien: 'Auditoría de cliente', detalle: 'La realizan partes con interés directo —clientes u otras en su nombre— sobre proveedores.', color: 'var(--acento-hover)' },
    { t: 'Tercera parte', quien: 'Certificación', detalle: 'Organismos independientes de certificación (acreditados según ISO/IEC 17021-1).', color: 'var(--uao-vino)' },
  ];
  const w = 1000;
  const cw = (w - 80) / 3;

  return (
    <svg viewBox={`0 0 ${w} 250`} role="img"
      aria-label="Tres tipos de auditoría según ISO 19011: primera parte o interna, realizada por la propia organización y que alimenta el requisito 9.2 de la 27001; segunda parte, realizada por partes interesadas como clientes sobre sus proveedores; y tercera parte, realizada por organismos de certificación independientes acreditados conforme a ISO/IEC 17021-1.">
      <title>Tipos de auditoría</title>
      {tipos.map((tp, i) => (
        <g key={tp.t}>
          <rect x={40 + i * (cw + 20)} y={16} width={cw} height={216} rx={12}
            fill="var(--fondo-suave)" stroke={tp.color} strokeWidth={2.5} />
          <rect x={40 + i * (cw + 20)} y={16} width={cw} height={46} rx={12} fill={tp.color} />
          <text x={40 + i * (cw + 20) + cw / 2} y={45} textAnchor="middle" fontSize="19" fontWeight="800" fill="#fff">{i + 1}ª parte</text>
          <text x={40 + i * (cw + 20) + 16} y={86} fontSize="15" fontWeight="700" fill="var(--texto)">{tp.quien}</text>
          <TextoMultilinea x={40 + i * (cw + 20) + 16} y={110} texto={tp.detalle} maxAncho={38} maxLineas={4} fontSize={13} fill="var(--texto-suave)" />
        </g>
      ))}
    </svg>
  );
}

/** Etapas del ciclo de vida de implantación (diseño → implementación → mantenimiento). */
export function DiagramaEtapasSgsi() {
  const etapas = [
    { t: 'Diseño', color: 'var(--caja-clave-borde)', items: ['Análisis de requisitos', 'Gestión del riesgo', 'Gap y plan de acción', 'Alcance y política aprobados'] },
    { t: 'Implementación', color: 'var(--acento-hover)', items: ['Conocimiento del SGSI', 'Documentos y controles', 'Puesta en práctica', 'Medición de controles'] },
    { t: 'Mantenimiento', color: 'var(--uao-vino)', items: ['Auditoría interna (9.2)', 'Acciones correctivas (10.2)', 'Revisión por la dirección (9.3)', 'Mejora continua (10.1)'] },
  ];
  const w = 1000;
  const cw = (w - 110) / 3;

  return (
    <svg viewBox={`0 0 ${w} 260`} role="img"
      aria-label="Las tres etapas de la implantación de un SGSI a lo largo del tiempo: diseño, con análisis de requisitos, gestión del riesgo, análisis de brechas y plan de acción, alcance y política aprobados; implementación, con conocimiento del SGSI, documentos y controles, puesta en práctica y medición de controles; y mantenimiento, con auditoría interna, acciones correctivas, revisión por la dirección y mejora continua.">
      <title>Etapas de implementación de un SGSI</title>
      <text x={30} y={30} fontSize="14" fontWeight="700" fill="var(--texto-suave)">TIEMPO DE IMPLEMENTACIÓN ──────────────────────────────────────────────────────────────────────────▶</text>
      {etapas.map((e, i) => {
        const x = 40 + i * (cw + 20);
        return (
          <g key={e.t}>
            <path d={`M ${x} 56 h ${cw - 36} l 36 58 l -36 58 h ${-(cw - 36)} l -22 -58 Z`}
              fill={e.color} opacity={0.9} />
            <text x={x + (i === 0 ? 44 : 56)} y={120} fontSize="19" fontWeight="800" fill="#fff">{e.t}</text>
            {e.items.map((it, k) => (
              <text key={it} x={x + 44} y={182 + k * 18} fontSize="13" fill="var(--texto)">· {it}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

/** Familia ISO/IEC 27000: vocabulario común alrededor de las normas de apoyo. */
export function DiagramaFamilia27000() {
  const normas = [
    { id: '27001', txt: 'Requisitos del SGSI — la única certificable', destacada: true },
    { id: '27002', txt: 'Guía de implementación de los controles' },
    { id: '27003', txt: 'Guía de implantación del SGSI' },
    { id: '27004', txt: 'Métricas y medición del desempeño' },
    { id: '27005', txt: 'Gestión del riesgo de S.I.' },
    { id: '27006', txt: 'Requisitos de los organismos de auditoría' },
  ];
  const cx = 205;
  const cy = 220;
  const x0 = 470;

  return (
    <svg viewBox="0 0 980 440" role="img"
      aria-label="Familia ISO 27000: la ISO/IEC 27000 de términos y vocabulario en el centro, conectada con las normas 27001 requisitos del SGSI, certificable; 27002 guía de implementación de controles; 27003 guía de implantación; 27004 métricas; 27005 gestión del riesgo; y 27006 requisitos de los organismos de auditoría.">
      <title>Familia ISO/IEC 27000</title>
      <circle cx={cx} cy={cy} r={150} fill="var(--uao-vino)" opacity={0.12} stroke="var(--uao-vino)" strokeWidth={2} />
      <text x={cx} y={cy - 16} textAnchor="middle" fontSize="30" fontWeight="800" fill="var(--uao-vino)">ISO/IEC</text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontSize="30" fontWeight="800" fill="var(--uao-vino)">27000</text>
      <text x={cx} y={cy + 46} textAnchor="middle" fontSize="14" fill="var(--texto-suave)">términos y vocabulario</text>

      {normas.map((n, i) => {
        const y = 40 + i * 72;
        // La línea nace en el borde del círculo grande apuntando al nodo.
        const dx = x0 - 30 - cx;
        const dy = y - cy;
        const d = Math.hypot(dx, dy);
        const px = cx + (dx / d) * 150;
        const py = cy + (dy / d) * 150;
        return (
          <g key={n.id}>
            <line x1={px} y1={py} x2={x0 - 28} y2={y} stroke="var(--borde-fuerte)" strokeWidth={2} />
            <circle cx={x0 - 14} cy={y} r={27} fill="var(--uao-vino)" opacity={n.destacada ? 1 : 0.55} />
            <text x={x0 - 14} y={y + 5} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#fff">{n.id}</text>
            <text x={x0 + 24} y={y + 6} fontSize={n.destacada ? 15.5 : 14.5} fontWeight={n.destacada ? 800 : 500} fill="var(--texto)">{n.txt}</text>
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
            <TextoMultilinea x={x + 14} y={y + 28} texto={p.t} maxAncho={22} maxLineas={2} fontSize={14.5} fontWeight={700} fill="var(--uao-vino)" />
            <TextoMultilinea x={x + 14} y={y + (partir(p.t, 22).length > 1 ? 78 : 58)} texto={p.s} maxAncho={27} maxLineas={2} fontSize={12} fill="var(--texto-suave)" />
            {i < pasos.length - 1 && (
              <path
                d={col < cols - 1
                  ? `M ${x + cw - 24} ${y + ch / 2} h 20`
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
  const bloques: { t: string; s: string; fase: number; franja: 'PA' | 'AU' }[] = [
    { t: '5.2', s: 'Objetivos del programa', fase: 0, franja: 'PA' },
    { t: '5.3', s: 'Riesgos del programa', fase: 0, franja: 'PA' },
    { t: '5.4', s: 'Establecer el programa', fase: 0, franja: 'PA' },
    { t: '5.5', s: 'Implementar el programa', fase: 1, franja: 'PA' },
    { t: '5.6', s: 'Seguimiento del programa', fase: 2, franja: 'PA' },
    { t: '5.7', s: 'Revisión y mejora', fase: 3, franja: 'PA' },
    { t: '6.2', s: 'Iniciar la auditoría', fase: 0, franja: 'AU' },
    { t: '6.3', s: 'Preparar las actividades', fase: 1, franja: 'AU' },
    { t: '6.4', s: 'Realizar la auditoría', fase: 1, franja: 'AU' },
    { t: '6.5', s: 'Informe de auditoría', fase: 1, franja: 'AU' },
    { t: '6.6', s: 'Completar la auditoría', fase: 2, franja: 'AU' },
    { t: '6.7', s: 'Seguimiento posterior', fase: 3, franja: 'AU' },
  ];
  const w = 1000;
  const altoFila = 46;
  const filasPA = 3;
  const filasAU = 3;
  const yPA = 72;
  const yAU = yPA + filasPA * altoFila + 66;
  const h = yAU + filasAU * altoFila + 16;
  const xcol = (f: number) => 60 + f * 236;

  // Contador de filas por franja y columna: los bloques se apilan dentro de su PHVA.
  const usadas: Record<string, number> = {};

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img"
      aria-label="Flujo de procesos para gestionar un programa de auditoría según ISO 19011:2018, recreado del material del curso. Franja superior, cláusula 5: 5.2 objetivos del programa, 5.3 riesgos y oportunidades, 5.4 establecimiento, 5.5 implementación, 5.6 seguimiento y 5.7 revisión y mejora del programa. Franja inferior, cláusula 6 para cada auditoría individual: 6.2 inicio, 6.3 preparación de las actividades, 6.4 realización, 6.5 preparación y distribución del informe, 6.6 conclusión y 6.7 seguimiento posterior. Las columnas siguen el ciclo Planear, Hacer, Verificar y Actuar.">
      <title>Flujo del programa de auditoría (ISO 19011:2018)</title>

      <line x1={20} y1={yAU - 36} x2={w - 20} y2={yAU - 36} stroke="var(--borde-fuerte)" strokeWidth={2.5} />
      <text x={30} y={yPA - 10} fontSize="13" fontWeight="700" fill="var(--texto-suave)">CLÁUSULA 5 · GESTIÓN DEL PROGRAMA DE AUDITORÍA</text>
      <text x={30} y={yAU - 12} fontSize="13" fontWeight="700" fill="var(--texto-suave)">CLÁUSULA 6 · REALIZACIÓN DE CADA AUDITORÍA INDIVIDUAL</text>

      {bloques.map((b) => {
        const clave = `${b.franja}-${b.fase}`;
        const fila = usadas[clave] ?? 0;
        usadas[clave] = fila + 1;
        const y = (b.franja === 'PA' ? yPA : yAU) + fila * altoFila;
        const x = xcol(b.fase);
        return (
          <g key={b.t}>
            <rect x={x} y={y} width={228} height={42} rx={9}
              fill="var(--fondo-suave)" stroke={columnas[b.fase].color} strokeWidth={2} />
            <text x={x + 10} y={y + 26} fontSize="13" fontWeight="800" fill={columnas[b.fase].color}>{b.t}</text>
            <text x={x + 44} y={y + 26} fontSize="12.5" fill="var(--texto)">{b.s}</text>
            {fila > 0 && (
              <path d={`M ${x + 22} ${y - 4} v 4`} stroke="var(--borde-fuerte)" strokeWidth={1.5} fill="none" />
            )}
          </g>
        );
      })}

      {columnas.map((c, i) => (
        <g key={c.titulo}>
          <rect x={xcol(i)} y={10} width={190} height={36} rx={10} fill={c.color} />
          <text x={xcol(i) + 95} y={34} textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff">{c.titulo}</text>
        </g>
      ))}
    </svg>
  );
}

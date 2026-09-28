/** Utilidades para partir texto en líneas dentro de los SVG. */
export function partir(texto: string, max: number): string[] {
  const lineas: string[] = [];
  let cur = '';
  for (const palabra of texto.split(' ')) {
    if ((cur + ' ' + palabra).trim().length > max) {
      if (cur) lineas.push(cur.trim());
      cur = palabra;
    } else {
      cur = (cur + ' ' + palabra).trim();
    }
  }
  if (cur) lineas.push(cur.trim());
  return lineas;
}

/** Escribe hasta `maxLineas` líneas en el SVG, recortando con elipsis. */
export function TextoMultilinea({
  x, y, texto, maxAncho, maxLineas, fontSize = 13, fill = 'var(--texto)', fontWeight,
}: {
  x: number; y: number; texto: string; maxAncho: number; maxLineas: number;
  fontSize?: number; fill?: string; fontWeight?: number;
}) {
  const lineas = partir(texto, maxAncho);
  const visibles = lineas.slice(0, maxLineas);
  if (lineas.length > maxLineas) {
    visibles[maxLineas - 1] = visibles[maxLineas - 1].replace(/.{1,2}$/, '') + '…';
  }
  return (
    <>
      {visibles.map((l, k) => (
        <text key={k} x={x} y={y + k * (fontSize + 5)} fontSize={fontSize} fill={fill} fontWeight={fontWeight}>
          {l}
        </text>
      ))}
    </>
  );
}

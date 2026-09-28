import { CONTROLES, CONTROLES_POR_TEMA, ROTULOS_TEMA } from '../datos/controles';

/** Tabla de los controles de un tema (5, 6, 7 u 8), generada desde src/datos/controles.ts. */
export function TablaTema({ tema }: { tema: number }) {
  const controles = CONTROLES_POR_TEMA[tema];
  const rotulos = ROTULOS_TEMA[tema];

  return (
    <>
      <p className="entradilla">
        {rotulos.plural}: <strong>{controles.length} controles</strong> del Anexo A de
        ISO/IEC 27001:2022, desarrollados con guía de implementación en ISO/IEC 27002:2022,
        capítulo {tema}. Los marcados como <span className="chip-nuevo">NUEVO</span> no existían en
        la edición de 2013.
      </p>

      <div className="tabla-scroll">
        <table className="tabla">
          <thead>
            <tr>
              <th style={{ width: '6%' }}>N.º</th>
              <th style={{ width: '30%' }}>Control</th>
              <th>Qué exige, en una frase</th>
              <th style={{ width: '14%' }}>Viene de (2013)</th>
            </tr>
          </thead>
          <tbody>
            {controles.map((c) => (
              <tr key={c.id}>
                <td>
                  <strong>A.{c.id}</strong>
                </td>
                <td>
                  {c.nombre} {c.nuevo && <span className="chip-nuevo">NUEVO</span>}
                </td>
                <td>{c.resumen}</td>
                <td>{c.nuevo ? '—' : c.origen2013}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** Tabla completa de correspondencia 2013 → 2022 (Anexo B de ISO/IEC 27002:2022). */
export function TablaCorrespondencia() {
  const nuevos = CONTROLES.filter((c) => c.nuevo);
  const fusionados = CONTROLES.filter(
    (c) => !c.nuevo && (c.origen2013 ?? '').split(',').length > 1,
  );

  return (
    <>
      <p className="entradilla">
        La edición 2022 reorganizó los 114 controles de 2013 en <strong>93 controles</strong>, sin
        eliminar ninguno: <strong>11 son nuevos</strong>, <strong>24 son resultado de fusiones</strong>{' '}
        (aquí se listan {fusionados.length} controles que absorben a dos o más de 2013) y el resto
        se mantiene o actualiza. Los datos proceden de la Tabla B.1 del Anexo B de ISO/IEC
        27002:2022.
      </p>

      <div className="caja caja-clave">
        <span className="titulo-caja">Los 11 controles nuevos</span>
        <ul>
          {nuevos.map((c) => (
            <li key={c.id}>
              <strong>A.{c.id}</strong> — {c.nombre}
            </li>
          ))}
        </ul>
      </div>

      <div className="tabla-scroll">
        <table className="tabla">
          <caption>Tabla B.1 adaptada: cada control 2022 y sus predecesores 2013</caption>
          <thead>
            <tr>
              <th style={{ width: '8%' }}>2022</th>
              <th style={{ width: '40%' }}>Nombre del control (2022)</th>
              <th style={{ width: '22%' }}>Controles ISO/IEC 27002:2013</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {CONTROLES.map((c) => (
              <tr key={c.id}>
                <td>
                  <strong>A.{c.id}</strong>
                </td>
                <td>{c.nombre}</td>
                <td>{c.nuevo ? '—' : c.origen2013}</td>
                <td>
                  {c.nuevo ? (
                    <span className="chip-nuevo">NUEVO</span>
                  ) : (c.origen2013 ?? '').split(',').length > 1 ? (
                    'Fusionado'
                  ) : (
                    'Actualizado'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

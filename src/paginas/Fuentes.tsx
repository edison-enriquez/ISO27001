import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Fuentes() {
  useEffect(() => {
    document.title = 'Fuentes y verificación';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>Fuentes y verificación</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor">
          <article className="contenido" style={{ maxWidth: '820px' }}>
            <h1 className="sin-margen-sup">Fuentes y verificación</h1>
            <p className="entradilla">
              No todo el contenido de este sitio tiene el mismo respaldo documental. Esta página
              dice exactamente qué se verificó, contra qué, y qué es elaboración propia.
            </p>

            <h2>Documentos de referencia</h2>
            <div className="tabla-scroll">
              <table className="tabla">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Contenido</th>
                    <th>Fuente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>ISO/IEC 27001:2022</strong>, cláusulas 1 a 10 y Anexo A
                    </td>
                    <td>
                      Texto oficial en inglés, 3.ª edición (2022-10), que incorpora las erratas y la
                      estructura armonizada (Anexo SL). Los requisitos de las cláusulas 4 a 10 están
                      citados y contrastados uno a uno; los resúmenes en español son elaboración
                      didáctica fiel al texto inglés.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ISO/IEC 27002:2022</strong>, capítulos 5 a 8 y Anexo B
                    </td>
                    <td>
                      Texto oficial en inglés, 2.ª edición (2022-02, con corrección de 2022-03). La
                      lista, numeración y correspondencia de los 93 controles procede de la Tabla
                      B.1 del Anexo B de la propia norma.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Nombres en español de los controles</strong></td>
                    <td>
                      Traducción oficial al español de ISO (idéntica a la adoptada como
                      NTC-ISO/IEC 27001:2022 por ICONTEC, Colombia).
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Enmienda 1:2024 (cambio climático)</strong></td>
                    <td>
                      ISO/IEC 27001:2022/Amd 1:2024: textos nuevos en 4.1 y 4.2 sobre si el cambio
                      climático es una cuestión relevante.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Guía de estudio (ruta en 5 fases y diagramas)</strong></td>
                    <td>
                      Estructura temática del material docente «ISO 27001 Internal Auditor / Lead
                      Auditor I217001 IA/LA» de CertiProf®, versión V112022 (alineada con la edición
                      2022). Sus figuras (ciclo PHVA del SGSI, familia 27000, proceso de riesgo,
                      etapas de implantación, tipos de auditoría y flujo del programa de auditoría)
                      están <strong>recreadas en SVG</strong> en este sitio: no se reproducen las
                      imágenes originales.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Elaboración propia</h2>
            <p>
              Las páginas de <Link to="/iso-27001/implantacion">implantación paso a paso</Link>,{' '}
              <Link to="/iso-27001/preguntas-frecuentes">preguntas frecuentes</Link> y{' '}
              <Link to="/iso-27001/cambios-2022">cambios de la edición 2022</Link>, junto con los
              resúmenes, las tablas de sinopsis y las cajas de «idea clave» repartidas por el sitio,
              son elaboración propia con fines didácticos. Ordenan y aplican la norma, pero{' '}
              <strong>no son texto normativo</strong> y no deben citarse como tal.
            </p>

            <h2>Sobre la organización del sitio</h2>
            <p>
              La arquitectura de navegación (la norma punto por punto, la guía de implantación por
              fases y los controles de la 27002 por áreas) toma como referencia la estructura del
              sitio divulgativo normaiso27001.es, que estaba basada en la edición 2013 y ha sido{' '}
              <strong>actualizada aquí a la edición 2022</strong>: los 14 dominios A5 a A18 dan paso
              a los 4 temas, y las cláusulas se reescriben sobre el texto vigente.
            </p>

            <h2>Sobre las normas y su adquisición</h2>
            <p>
              Las normas ISO/IEC son documentos con derechos de autor. Este sitio las explica y
              resume; no las reproduce ni las sustituye. El texto oficial debe adquirirse en ISO o
              en el organismo nacional de normalización correspondiente — en Colombia,{' '}
              <strong>ICONTEC</strong>.
            </p>

            <div className="caja caja-info">
              <span className="titulo-caja">Independencia</span>
              <p>
                Este sitio no está afiliado a ISO, a IEC, a ICONTEC ni a ninguna institución
                académica. No utiliza logotipos, escudos ni marcas institucionales.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

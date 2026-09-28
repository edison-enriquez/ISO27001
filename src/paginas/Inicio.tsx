import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTENIDO, ISO_27001, ISO_27002 } from '../datos/normas';
import { ContenidoHtml } from '../componentes/ContenidoHtml';

export function Inicio() {
  useEffect(() => {
    document.title =
      'ISO/IEC 27001:2022 — Sistemas de gestión de la seguridad de la información';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="contenedor hero-grid">
          <div>
            <span className="etiqueta">Tercera edición · Octubre 2022</span>
            <h1>
              ISO/IEC 27001:2022 — el SGSI punto por punto, actualizado a la edición de 2022
            </h1>
            <p>
              La única norma certificable de la familia 27000: los requisitos para establecer,
              implementar, mantener y mejorar un sistema de gestión de la seguridad de la
              información — y los 93 controles del nuevo Anexo A, explicados con su guía en
              ISO/IEC 27002:2022.
            </p>
            <div className="hero-acciones">
              <Link className="boton boton-principal" to="/iso-27001/planificacion">
                La gestión del riesgo (cl. 6)
              </Link>
              <Link className="boton boton-claro" to="/iso-27002/tema-5">
                Los 93 controles
              </Link>
            </div>
          </div>

          <aside className="tarjeta-ficha">
            <h2>Ficha de la norma</h2>
            <dl>
              <div className="fila">
                <dt>Referencia</dt>
                <dd>ISO/IEC 27001:2022</dd>
              </div>
              <div className="fila">
                <dt>Edición</dt>
                <dd>Tercera (2022-10)</dd>
              </div>
              <div className="fila">
                <dt>Sustituye a</dt>
                <dd>ISO/IEC 27001:2013 (transición cerrada el 31-10-2025)</dd>
              </div>
              <div className="fila">
                <dt>Comité</dt>
                <dd>ISO/IEC JTC 1 / SC 27</dd>
              </div>
              <div className="fila">
                <dt>Naturaleza</dt>
                <dd>Requisitos, certificable</dd>
              </div>
              <div className="fila">
                <dt>Estructura</dt>
                <dd>Cláusulas 4 a 10 (Anexo SL) + Anexo A normativo</dd>
              </div>
              <div className="fila">
                <dt>Controles</dt>
                <dd>93, en 4 temas</dd>
              </div>
              <div className="fila">
                <dt>ICS</dt>
                <dd>03.100.70; 35.030</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="franja">
        <div className="contenedor franja-grid">
          <div className="dato">
            <strong>93</strong>
            <span>controles del Anexo A</span>
          </div>
          <div className="dato">
            <strong>4</strong>
            <span>temas de controles</span>
          </div>
          <div className="dato">
            <strong>11</strong>
            <span>controles nuevos en 2022</span>
          </div>
          <div className="dato">
            <strong>7</strong>
            <span>cláusulas de requisitos (4 a 10)</span>
          </div>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <ContenidoHtml html={CONTENIDO['index']} />
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>ISO/IEC 27001:2022 punto por punto</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_27001.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-27001/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget">
              <h2>ISO/IEC 27002:2022 (Anexo A)</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_27002.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-27002/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>¿Vienes de la edición 2013?</h2>
              <p>
                114 controles → 93, 14 dominios → 4 temas, 5 cláusulas → ninguna: esto es lo que
                cambió y cómo se migró.
              </p>
              <Link className="boton boton-claro" to="/iso-27001/cambios-2022">
                Ver los cambios
              </Link>
            </div>

            <div className="widget">
              <h2>Sobre las fuentes</h2>
              <div className="texto">
                <p>
                  Los resúmenes están elaborados en español a partir del texto oficial en inglés de
                  ambas normas; los nombres de los controles siguen la traducción oficial.
                </p>
                <p>
                  <Link to="/fuentes">Ver el detalle</Link>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="cta">
        <div className="contenedor">
          <h2>La seguridad de la información no es tecnología: es gestión del riesgo</h2>
          <p>
            ISO/IEC 27001 no exige productos ni marcas: exige un sistema —contexto, liderazgo,
            planificación, soporte, operación, evaluación y mejora— sobre el que se sostienen los
            controles.
          </p>
          <Link className="boton boton-principal" to="/iso-27001/implantacion">
            Guía de implantación en 10 fases
          </Link>
        </div>
      </section>
    </>
  );
}

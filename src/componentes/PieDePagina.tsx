import { Link } from 'react-router-dom';
import { ISO_27001, ISO_27002 } from '../datos/normas';

export function PieDePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <h3>Norma ISO 27001</h3>
            <p>
              Guía divulgativa e independiente sobre ISO/IEC 27001:2022 e ISO/IEC 27002:2022: el
              sistema de gestión de la seguridad de la información y sus 93 controles.
            </p>
            <p className="texto-menor">
              Sitio sin afiliación con ISO, con IEC, con ICONTEC ni con ninguna institución. No se
              utilizan logotipos ni marcas institucionales.
            </p>
          </div>

          <div>
            <h3>ISO/IEC 27001:2022</h3>
            <ul>
              {ISO_27001.secciones.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/iso-27001/${s.slug}`}>{s.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>ISO/IEC 27002:2022</h3>
            <ul>
              {ISO_27002.secciones.map((s) => (
                <li key={s.slug}>
                  <Link to={`/iso-27002/${s.slug}`}>{s.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Recursos</h3>
            <ul>
              <li>
                <Link to="/iso-27001/implantacion">Implantación paso a paso</Link>
              </li>
              <li>
                <Link to="/iso-27001/cambios-2022">Cambios de la edición 2022</Link>
              </li>
              <li>
                <Link to="/iso-27001/referencias-vocabulario">Vocabulario del SGSI</Link>
              </li>
              <li>
                <Link to="/iso-27001/preguntas-frecuentes">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to="/fuentes">Fuentes y verificación</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {anio} · Contenido divulgativo sobre ISO/IEC 27001:2022 e ISO/IEC 27002:2022</span>
          <span>
            Las normas ISO/IEC 27001 y 27002 son propiedad de la Organización Internacional de
            Normalización y de la CEI.
          </span>
        </div>
      </div>
    </footer>
  );
}

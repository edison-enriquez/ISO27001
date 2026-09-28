import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CONTENIDO, buscarNorma, buscarSeccion } from '../datos/normas';
import { ContenidoHtml } from '../componentes/ContenidoHtml';
import { AvisoFuente } from '../componentes/AvisoFuente';
import { TablaCorrespondencia, TablaTema } from '../componentes/TablasControles';

const INTRO_TEMAS: Record<number, string> = {
  5: 'Los controles organizacionales dan el marco: políticas, roles, clasificación de la información, gestión de acceso a nivel de reglas, proveedores y nube, gestión de incidentes, continuidad, requisitos legales y cumplimiento. Es el tema más grande: aquí viven las decisiones que luego ejecutan los otros tres.',
  6: 'Las personas son a la vez la primera línea de defensa y el principal vector de ataque. Este tema cubre el ciclo completo: antes de contratar (cribado), durante el empleo (formación, disciplina, teletrabajo) y al salir (responsabilidades persistentes, devolución de activos).',
  7: 'Todo sistema de información vive en un lugar físico. Este tema protege perímetros, entradas, salas, equipo, soportes de almacenamiento y los servicios que los sostienen (energía, cableado, climatización), incluida la eliminación segura de equipos.',
  8: 'El tema tecnológico —el más numeroso tras la reorganización de 2022— cubre dispositivos, accesos, criptografía, redes, monitorización, copias de seguridad y todo el ciclo de desarrollo seguro de software y sistemas.',
};

interface Props {
  normaId: string;
}

export function Seccion({ normaId }: Props) {
  const { slug = '' } = useParams();
  const norma = buscarNorma(normaId);
  const seccion = buscarSeccion(normaId, slug);

  useEffect(() => {
    if (!seccion) return;
    document.title = `${seccion.titulo} — ${norma?.designacion ?? ''}`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', seccion.descripcion);
    // Sin ancla en la URL, arranca arriba: al cambiar de capítulo, el
    // navegador conservaría el scroll anterior.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [seccion, norma]);

  if (!norma || !seccion) return <Navigate to="/" replace />;

  const indice = norma.secciones.findIndex((s) => s.slug === slug);
  const anterior = norma.secciones[indice - 1];
  const siguiente = norma.secciones[indice + 1];

  const esTema = seccion.contenido.startsWith('@tema-');
  const esCorrespondencia = seccion.contenido === '@correspondencia';

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to={`/${norma.id}/${norma.secciones[0].slug}`}>{norma.designacion}</Link>
            </li>
            <li>{seccion.rotulo}</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <AvisoFuente fuente={seccion.fuente} />

            {esTema ? (
              <>
                <h1 className="sin-margen-sup">{seccion.titulo}</h1>
                <p>{INTRO_TEMAS[Number(seccion.contenido.slice(6))]}</p>
                <TablaTema tema={Number(seccion.contenido.slice(6))} />
              </>
            ) : esCorrespondencia ? (
              <>
                <h1 className="sin-margen-sup">{seccion.titulo}</h1>
                <TablaCorrespondencia />
              </>
            ) : (
              <ContenidoHtml html={CONTENIDO[seccion.contenido]} />
            )}

            <nav className="nav-clausulas" aria-label="Navegación entre capítulos">
              {anterior ? (
                <Link to={`/${norma.id}/${anterior.slug}`}>
                  <span>Anterior</span>
                  <strong>{anterior.rotulo}</strong>
                </Link>
              ) : (
                <Link to="/">
                  <span>Anterior</span>
                  <strong>Inicio</strong>
                </Link>
              )}
              {siguiente ? (
                <Link className="siguiente" to={`/${norma.id}/${siguiente.slug}`}>
                  <span>Siguiente</span>
                  <strong>{siguiente.rotulo}</strong>
                </Link>
              ) : (
                <Link className="siguiente" to="/fuentes">
                  <span>Siguiente</span>
                  <strong>Fuentes y verificación</strong>
                </Link>
              )}
            </nav>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>{norma.designacion}</h2>
              <div className="cuerpo">
                <ul>
                  {norma.secciones.map((s) => (
                    <li key={s.slug} className={s.slug === slug ? 'activo' : undefined}>
                      <Link to={`/${norma.id}/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>¿Busca un control concreto?</h2>
              <p>
                Los 93 controles están ordenados por tema: organizacionales, personas, físicos y
                tecnológicos.
              </p>
              <Link className="boton boton-claro" to="/iso-27002/tema-5">
                Ir al listado de controles
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

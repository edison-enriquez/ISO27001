import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CONTROLES, ROTULOS_TEMA } from '../datos/controles';
import { DETALLE } from '../datos/detalle';
import { ATRIBUTOS, ENUNCIADO_EN } from '../datos/atributos';
import { ISO_27002 } from '../datos/normas';

const TRAD_TIPO: Record<string, string> = {
  Preventive: 'Preventivo', Detective: 'Detectivo', Corrective: 'Correctivo',
};
const TRAD_CIA: Record<string, string> = {
  Confidentiality: 'Confidencialidad', Integrity: 'Integridad', Availability: 'Disponibilidad',
};
const TRAD_CIBER: Record<string, string> = {
  Identify: 'Identificar', Protect: 'Proteger', Detect: 'Detectar', Respond: 'Responder', Recover: 'Recuperar',
};
const TRAD_CAP: Record<string, string> = {
  Governance: 'Gobernanza',
  Asset_management: 'Gestión de activos',
  Information_protection: 'Protección de la información',
  Human_resource_security: 'Seguridad del personal',
  Physical_security: 'Seguridad física',
  System_and_network_security: 'Sistemas y redes',
  Application_security: 'Seguridad de aplicaciones',
  Secure_configuration: 'Configuración segura',
  Identity_and_access_management: 'Identidad y accesos',
  Threat_and_vulnerability_management: 'Amenazas y vulnerabilidades',
  Continuity: 'Continuidad',
  Supplier_relationships_security: 'Relaciones con proveedores',
  Legal_and_compliance: 'Legal y cumplimiento',
  Information_security_event_management: 'Gestión de eventos de seguridad',
  Information_security_assurance: 'Aseguramiento de la seguridad',
};
const TRAD_DOM: Record<string, string> = {
  Governance_and_Ecosystem: 'Gobernanza y ecosistema',
  Protection: 'Protección',
  Defence: 'Defensa',
  Resilience: 'Resiliencia',
};

function Fila({ titulo, valores }: { titulo: string; valores?: string[] }) {
  if (!valores || valores.length === 0) return null;
  return (
    <div className="fila">
      <dt>{titulo}</dt>
      <dd>{valores.join(' · ')}</dd>
    </div>
  );
}

export function ControlDetalle() {
  const { id = '' } = useParams();
  const indice = CONTROLES.findIndex((c) => c.id === id);
  const control = indice >= 0 ? CONTROLES[indice] : undefined;

  useEffect(() => {
    if (!control) return;
    document.title = `A.${control.id} ${control.nombre} — ISO/IEC 27002:2022`;
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [control]);

  if (!control) return <Navigate to="/iso-27002/tema-5" replace />;

  const tema = Number(control.id.split('.')[0]);
  const slugTema = `tema-${tema}`;
  const seccionTema = ISO_27002.secciones.find((s) => s.slug === slugTema);
  const detalle = DETALLE[control.id];
  const attrs = ATRIBUTOS[control.id];
  const enunciado = ENUNCIADO_EN[control.id];

  // Anterior / siguiente dentro del mismo tema.
  const delTema = CONTROLES.filter((c) => c.id.startsWith(`${tema}.`));
  const i = delTema.findIndex((c) => c.id === control.id);
  const anterior = delTema[i - 1];
  const siguiente = delTema[i + 1];

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/iso-27002/estructura">ISO/IEC 27002:2022</Link></li>
            <li><Link to={`/iso-27002/${slugTema}`}>{seccionTema?.rotulo ?? `Tema ${tema}`}</Link></li>
            <li>A.{control.id}</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <aside className="aviso-fuente" role="note">
              <strong>Elaboración propia.</strong> El enunciado oficial (en inglés, citado del texto de
              ISO/IEC 27002:2022) y los atributos son datos de la norma; las claves de implementación y
              las preguntas de auditoría son material didáctico para preparar la auditoría de un SGSI
              conforme a ISO 19011.
            </aside>

            <h1 className="sin-margen-sup">
              A.{control.id} — {control.nombre}{' '}
              {control.nuevo && <span className="chip-nuevo">NUEVO EN 2022</span>}
            </h1>
            <p className="entradilla">{control.resumen}</p>

            {enunciado && (
              <blockquote className="cita-norma">
                «{enunciado}»
                <cite>ISO/IEC 27002:2022, texto oficial en inglés</cite>
              </blockquote>
            )}

            {attrs && (
              <section className="bloque-ficha">
                <h2 id="atributos">Atributos oficiales del control</h2>
                <dl className="ficha-atributos">
                  <Fila titulo="Tipo" valores={attrs.tipo.map((v) => TRAD_TIPO[v] ?? v)} />
                  <Fila titulo="Propiedades CIA" valores={attrs.cia.map((v) => TRAD_CIA[v] ?? v)} />
                  <Fila titulo="Conceptos de ciberseguridad" valores={attrs.ciber.map((v) => TRAD_CIBER[v] ?? v)} />
                  <Fila titulo="Capacidades operativas" valores={attrs.cap.map((v) => TRAD_CAP[v] ?? v)} />
                  <Fila titulo="Dominios de seguridad" valores={attrs.dom.map((v) => TRAD_DOM[v] ?? v)} />
                </dl>
              </section>
            )}

            {detalle && (
              <>
                <section>
                  <h2 id="implementacion">Cómo se implementa</h2>
                  <ul>
                    {detalle.como.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </section>

                <section>
                  <h2 id="auditoria">Qué pregunta el auditor</h2>
                  <ul>
                    {detalle.auditoria.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </section>
              </>
            )}

            <section>
              <h2 id="procedencia">Procedencia (edición 2013)</h2>
              <p>
                {control.nuevo ? (
                  <>Control <strong>nuevo</strong> en la edición 2022: no existía como control
                  diferenciado en ISO/IEC 27002:2013. Ver{' '}
                  <Link to="/iso-27001/cambios-2022">qué cambió</Link>.</>
                ) : (
                  <>Proviene del control {control.origen2013} de ISO/IEC 27002:2013 — ver la{' '}
                  <Link to="/iso-27002/correspondencia">correspondencia completa</Link>.</>
                )}
              </p>
              <p>
                Requisito de la 27001 que lo activa: <Link to="/iso-27001/planificacion">6.1.3</Link>{' '}
                (determinación de controles y SoA). Enlace general:{' '}
                <Link to="/iso-27001/anexo-a">Anexo A</Link>.
              </p>
            </section>

            <nav className="nav-clausulas" aria-label="Navegación entre controles">
              {anterior ? (
                <Link to={`/iso-27002/control/${anterior.id}`}>
                  <span>Anterior</span>
                  <strong>A.{anterior.id} {anterior.nombre}</strong>
                </Link>
              ) : (
                <Link to={`/iso-27002/${slugTema}`}>
                  <span>Volver</span>
                  <strong>{ROTULOS_TEMA[tema].plural}</strong>
                </Link>
              )}
              {siguiente ? (
                <Link className="siguiente" to={`/iso-27002/control/${siguiente.id}`}>
                  <span>Siguiente</span>
                  <strong>A.{siguiente.id} {siguiente.nombre}</strong>
                </Link>
              ) : (
                <Link className="siguiente" to={`/iso-27002/${slugTema}`}>
                  <span>Terminado</span>
                  <strong>Volver al listado del tema {tema}</strong>
                </Link>
              )}
            </nav>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>{ROTULOS_TEMA[tema].plural}</h2>
              <div className="cuerpo">
                <ul>
                  {delTema.map((c) => (
                    <li key={c.id} className={c.id === control.id ? 'activo' : undefined}>
                      <Link to={`/iso-27002/control/${c.id}`}>
                        A.{c.id} · {c.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="widget">
              <h2>Otros temas</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_27002.secciones
                    .filter((s) => s.slug.startsWith('tema-') && s.slug !== slugTema)
                    .map((s) => (
                      <li key={s.slug}><Link to={`/iso-27002/${s.slug}`}>{s.rotulo}</Link></li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

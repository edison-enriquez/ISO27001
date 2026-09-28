import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DiagramaNormaPhva } from '../componentes/diagramas/NormaPhva';
import {
  DiagramaEtapasSgsi,
  DiagramaFamilia27000,
  DiagramaProgramaAuditoria,
  DiagramaProcesoRiesgo,
  DiagramaTiposAuditoria,
} from '../componentes/diagramas/Curso';
import { BancoPreguntas } from '../componentes/Quiz';
import { TALLERES } from '../datos/practica';

export function GuiaEstudio() {
  useEffect(() => {
    document.title = 'Guía de estudio — ISO 27001 auditor interno / auditor líder';
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
            <li>Guía de estudio</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article className="contenido">
            <aside className="aviso-fuente" role="note">
              <strong>Elaboración propia.</strong> La ruta de estudio, el orden de temas y los
              diagramas siguen la estructura del material docente «ISO 27001 Internal Auditor / Lead
              Auditor I217001 IA/LA» de CertiProf® (versión V112022, alineada con la edición 2022).
              Las figuras están <em>recreadas en SVG</em> a partir de sus conceptos: no se
              reproducen las originales. El contenido explicativo es propio y enlaza con las páginas
              de la norma de este sitio.
            </aside>

            <h1 className="sin-margen-sup">Guía de estudio: de cero a auditar un SGSI</h1>
            <p className="entradilla">
              Un recorrido de cinco fases por el ISO 27001:2022 en la lógica del curso de{' '}
              <strong>auditor interno / auditor líder</strong>: entender el sistema, aprender a
              diseñarlo e implantarlo, dominar la gestión del riesgo (ISO/IEC 27005) y llegar a la
              auditoría con el método de la ISO 19011. Cada fase enlaza con la parte correspondiente
              de la norma punto por punto.
            </p>

            <div className="rejilla">
              <a className="tarjeta" href="#fase-1">
                <span className="num">1</span>
                <h3>Fundamentos de un SGSI</h3>
                <p>Qué es la seguridad de la información, la familia 27000, historia y vocabulario.</p>
              </a>
              <a className="tarjeta" href="#fase-2">
                <span className="num">2</span>
                <h3>Diseño e implementación</h3>
                <p>Estructura de las cláusulas 4 a 10, ciclo PHVA y etapas del proyecto SGSI.</p>
              </a>
              <a className="tarjeta" href="#fase-3">
                <span className="num">3</span>
                <h3>Gestión del riesgo (27005)</h3>
                <p>Activos, amenazas, vulnerabilidades y el proceso completo de valoración y tratamiento.</p>
              </a>
              <a className="tarjeta" href="#fase-4">
                <span className="num">4</span>
                <h3>Auditoría (ISO 19011)</h3>
                <p>Principios, tipos, programa de auditoría y actividades de cada auditoría.</p>
              </a>
              <a className="tarjeta" href="#fase-5">
                <span className="num">5</span>
                <h3>Evaluación y práctica</h3>
                <p>No conformidades, su redacción, informe de auditoría y checklist de repaso.</p>
              </a>
            </div>

            {/* ─────────────────────────── FASE 1 ─────────────────────────── */}
            <h2 id="fase-1">Fase 1 · Fundamentos de un SGSI</h2>
            <p>
              Antes de auditar hay que entender qué se audita. El SGSI es, según el vocabulario de la
              ISO/IEC 27000, la <strong>parte del sistema de gestión global</strong>, basada en un
              <strong> enfoque de riesgo</strong>, para establecer, implementar, operar, hacer
              seguimiento, revisar, mantener y mejorar la seguridad de la información.
            </p>
            <ul>
              <li><strong>Objetivo triplo (la tríada CIA):</strong> preservar confidencialidad, integridad y disponibilidad de la información.</li>
              <li><strong>Origen:</strong> la norma nace de la británica BS 7799-2; ISO la adopta en 2005; las ediciones se suceden en 2013 y <strong>2022</strong>.</li>
              <li><strong>La 27001:2022</strong> especifica los requisitos; la 27002:2022 da la guía de los 93 controles del Anexo A; el resto de la familia apoya.</li>
            </ul>

            <figure className="figura">
              <DiagramaFamilia27000 />
              <figcaption>
                La familia ISO/IEC 27000: la 27000 como base común de vocabulario, y las normas de
                apoyo alrededor. La única certificable, destacada, es la 27001.
              </figcaption>
            </figure>

            <p>
              Para profundizar: <Link to="/iso-27001/referencias-vocabulario">términos y
              definiciones</Link>, <Link to="/iso-27001/alcance">alcance de la norma</Link> y{' '}
              <Link to="/">qué es ISO/IEC 27001</Link>.
            </p>

            {/* ─────────────────────────── FASE 2 ─────────────────────────── */}
            <h2 id="fase-2">Fase 2 · Diseño e implementación del SGSI</h2>
            <p>
              Aquí se estudia la norma <em>por dentro</em>: la estructura armonizada de alto nivel
              (Anexo SL) convierte las cláusulas 4 a 10 en un ciclo de Deming completo — Planear
              (contexto, liderazgo, planificación, soporte), Hacer (operación), Verificar (evaluación
              del desempeño) y Actuar (mejora)— rematado por el Anexo A normativo.
            </p>

            <figure className="figura">
              <DiagramaNormaPhva />
              <figcaption>
                Las siete cláusulas de requisitos con sus subapartados, agrupadas en el ciclo
                PHVA/Deming del sistema de gestión.
              </figcaption>
            </figure>

            <p>
              El proyecto de implantación recorre tres etapas reconocibles: primero se <strong>diseña</strong>
              (requisitos, riesgo, brechas, alcance y política), después se <strong>implementa</strong>
              (documentos, controles, práctica, medición) y el sistema se <strong>mantiene</strong> con
              auditoría interna, acciones correctivas y revisión por la dirección.
            </p>

            <figure className="figura">
              <DiagramaEtapasSgsi />
              <figcaption>
                Etapas del ciclo de vida de la implantación: diseño, implementación y mantenimiento,
                con las actividades típicas de cada una.
              </figcaption>
            </figure>

            <div className="tabla-scroll">
              <table className="tabla">
                <caption>Dónde estudiar cada cláusula en este sitio</caption>
                <thead>
                  <tr><th>Cláusula</th><th>Requisito esencial</th><th>Lección</th></tr>
                </thead>
                <tbody>
                  <tr><td>4</td><td>Contexto, partes interesadas y alcance</td><td><Link to="/iso-27001/contexto">Contexto de la organización</Link></td></tr>
                  <tr><td>5</td><td>Liderazgo, política y roles</td><td><Link to="/iso-27001/liderazgo">Liderazgo</Link></td></tr>
                  <tr><td>6</td><td>Riesgo, SoA, objetivos y cambios</td><td><Link to="/iso-27001/planificacion">Planificación</Link></td></tr>
                  <tr><td>7</td><td>Recursos, competencia, documentación</td><td><Link to="/iso-27001/soporte">Soporte</Link></td></tr>
                  <tr><td>8</td><td>Operar el plan de tratamiento y reevaluar</td><td><Link to="/iso-27001/operacion">Operación</Link></td></tr>
                  <tr><td>9</td><td>Medir, auditar internamente y revisar</td><td><Link to="/iso-27001/evaluacion">Evaluación del desempeño</Link></td></tr>
                  <tr><td>10</td><td>Corregir y mejorar</td><td><Link to="/iso-27001/mejora">Mejora</Link></td></tr>
                  <tr><td>A</td><td>93 controles en 4 temas</td><td><Link to="/iso-27001/anexo-a">Anexo A</Link></td></tr>
                </tbody>
              </table>
            </div>

            {/* ─────────────────────────── FASE 3 ─────────────────────────── */}
            <h2 id="fase-3">Fase 3 · Gestión del riesgo según ISO/IEC 27005</h2>
            <p>
              El corazón de la 27001 late en 6.1. La fase 3 del curso lo trabaja con el proceso de la
              ISO/IEC 27005: <strong>establecer el contexto → identificación → análisis (estimación) →
              valoración (evaluación) → decisión → tratamiento → aceptación</strong>, con comunicación
              y monitoreo transversales. Conceptos que hay que dominar sin titubear:
            </p>
            <ul>
              <li><strong>Activo</strong> (y su clasificación e inventario, A.5.9), <strong>amenaza</strong>, <strong>vulnerabilidad</strong>: la vulnerabilidad de un activo explotada por una amenaza produce un impacto.</li>
              <li><strong>Riesgo = efecto de la incertidumbre sobre los objetivos</strong>: se analiza con consecuencia × probabilidad y se valora contra los <em>criterios de aceptación</em>.</li>
              <li>Cuatro opciones de tratamiento: <strong>evitar, asumir (retener), compartir/transferir o reducir</strong>.</li>
              <li>El resultado documental: <strong>registro de riesgos, SoA y plan de tratamiento</strong>, aprobado por el dueño del riesgo.</li>
            </ul>

            <figure className="figura">
              <DiagramaProcesoRiesgo />
              <figcaption>
                El proceso de valoración y tratamiento del riesgo del SGSI, con la referencia a los
                apartados exactos de la cláusula 6 en cada paso.
              </figcaption>
            </figure>

            <p>
              En la norma: <Link to="/iso-27001/planificacion">6.1.2 evaluación y 6.1.3
              tratamiento</Link> y <Link to="/iso-27001/operacion">8.2 y 8.3 (el ciclo repetido)</Link>.
              Controles de apoyo directos:{' '}
              <Link to="/iso-27002/tema-5">A.5.7 inteligencia de amenazas</Link> y la familia de
              incidentes (A.5.24 a A.5.28).
            </p>

            {/* ─────────────────────────── FASE 4 ─────────────────────────── */}
            <h2 id="fase-4">Fase 4 · Auditoría del SGSI con ISO 19011</h2>
            <p>
              La parte de auditor líder se apoya en la ISO 19011:2018. Hay que distinguir de memoria
              los tres papeles de la auditoría: <strong>primera parte</strong> (interna, la que exige
              el requisito 9.2), <strong>segunda parte</strong> (cliente a proveedor) y{' '}
              <strong>tercera parte</strong> (certificación por organismo independiente).
            </p>

            <figure className="figura">
              <DiagramaTiposAuditoria />
              <figcaption>Los tres tipos de auditoría según la ISO 19011.</figcaption>
            </figure>

            <p>
              La ISO 19011 separa dos niveles que conviene no mezclar: el <strong>programa de
              auditoría</strong> (cláusula 5: objetivos, riesgos del programa, establecimiento,
              implementación, seguimiento y mejora) y la <strong>auditoría individual</strong>
              (cláusula 6: inicio, preparación, realización, informe, conclusión y seguimiento). Todo
              ello, gobernado por los siete principios de la cláusula 4 — integridad, presentación
              imparcial, debido profesional, confidencialidad, independencia, enfoque basado en
              evidencia y enfoque basado en riesgos.
            </p>

            <figure className="figura">
              <DiagramaProgramaAuditoria />
              <figcaption>
                Flujo de procesos del programa de auditoría (figura 1 de la ISO 19011): dos franjas —
                cláusula 5 y cláusula 6 — sobre las cuatro fases del PHVA.
              </figcaption>
            </figure>

            <p>
              En la norma: el requisito que obliga a auditar es{' '}
              <Link to="/iso-27001/evaluacion">9.2 (general) y 9.2.2 (programa de auditoría)</Link>.
            </p>

            {/* ─────────────────────────── FASE 5 ─────────────────────────── */}
            <h2 id="fase-5">Fase 5 · Evaluación: hallazgos, no conformidades e informe</h2>
            <p>
              El examen y la práctica se juegan en el terreno del vocabulario de hallazgos y de la
              redacción de no conformidades. Tres niveles que el auditor no debe confundir:
            </p>
            <ul>
              <li><strong>No conformidad:</strong> incumplimiento de un requisito de la norma auditada.</li>
              <li><strong>Observación:</strong> hallazgo que podría convertirse en no conformidad si no se trata.</li>
              <li><strong>Oportunidad de mejora:</strong> situación conforme que, aun así, puede revisarse para ganar eficacia.</li>
            </ul>

            <div className="caja caja-clave">
              <span className="titulo-caja">Fórmula de redacción de una no conformidad</span>
              <p>
                <strong>Evidencia</strong> (lo observado, con ejemplos verificables) +{' '}
                <strong>Referencia</strong> (el requisito incumplido: un requisito a la vez, la
                cláusula que mejor aplique) + <strong>Conclusión</strong> (breve, precisa y aceptada
                por el auditado). La discrepancia se atribuye a una sola cláusula.
              </p>
            </div>

            <p>Los incumplimientos más comunes que encuentra el auditor de un SGSI:</p>
            <ul>
              <li>Documentación requerida que no aparece (7.5).</li>
              <li>Competencias del personal no evaluadas ni evidenciadas (7.2).</li>
              <li>Controles implementados de forma inadecuada frente a lo declarado en la SoA (6.1.3).</li>
              <li>No conformidades de auditorías internas sin cierre eficaz (10.2).</li>
              <li>Acciones correctivas que no llegan a la revisión por la dirección (9.3.2 a).</li>
              <li>Deficiencias en la metodología de análisis de riesgo (6.1.2 b: resultados no comparables).</li>
              <li>Procedimientos escritos que no se cumplen en la operación (8.1).</li>
            </ul>

            <p>
              El informe de auditoría debe contener como mínimo: objetivos, alcance (unidades,
              procesos y período), persona de contacto y equipo auditor, fechas y lugares, criterios
              de auditoría, declaraciones y <strong>conclusiones</strong>. Estas últimas valoran el
              grado de cumplimiento, la eficacia de la implementación y la capacidad de la revisión
              por la dirección para sostener la mejora.
            </p>

            <h2 id="practica">Práctica: talleres del curso</h2>
            <p>
              El material docente desarrolla cada fase con talleres presenciales. Están
              reformados aquí como ejercicios autónomos: toma una organización real o
              inventada y recorrelos en orden. Despliega cada uno para ver el objetivo, la entrega
              esperada y las pistas.
            </p>
            {TALLERES.map((tl) => (
              <details key={tl.id} className="taller">
                <summary>
                  <span className="taller-fase">Fase {tl.fase}</span>
                  {tl.titulo}
                </summary>
                <p><strong>Objetivo.</strong> {tl.objetivo}</p>
                <p><strong>Entrega.</strong> {tl.entrega}</p>
                <p><strong>Pistas.</strong></p>
                <ul>
                  {tl.pistas.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </details>
            ))}

            <h2 id="autoevaluacion">Autoevaluación por fases</h2>
            <p>
              Banco de preguntas de elaboración propia, en el espíritu del examen de
              certificación del curso. Elige opción y obtén la explicación al momento;
              cada fase cierra con su marcador.
            </p>
            {[1, 2, 3, 4, 5].map((f) => (
              <section key={f} className="quiz-fase">
                <h3>Fase {f}</h3>
                <BancoPreguntas fase={f} />
              </section>
            ))}


            <div className="tabla-scroll">
              <table className="tabla">
                <thead>
                  <tr><th style={{ width: '34%' }}>Debe poder explicarse…</th><th>Sección del sitio</th></tr>
                </thead>
                <tbody>
                  <tr><td>Qué es un SGSI y la tríada CIA</td><td><Link to="/">Inicio de la norma</Link></td></tr>
                  <tr><td>Qué es certificable (27001) y qué no (27002)</td><td><Link to="/iso-27002/estructura">Estructura de la 27002</Link></td></tr>
                  <tr><td>Las cláusulas 4 a 10 y su ciclo PHVA</td><td><Link to="/iso-27001/contexto">del contexto</Link> a <Link to="/iso-27001/mejora">la mejora</Link></td></tr>
                  <tr><td>6.1.2: criterios, identificación, análisis y valoración</td><td><Link to="/iso-27001/planificacion">Planificación</Link></td></tr>
                  <tr><td>6.1.3: opciones, controles, SoA, plan y residual</td><td><Link to="/iso-27001/planificacion">Planificación</Link></td></tr>
                  <tr><td>Anexo A: 4 temas y 93 controles; los 11 nuevos</td><td><Link to="/iso-27001/anexo-a">Anexo A</Link> · <Link to="/iso-27001/cambios-2022">Cambios 2022</Link></td></tr>
                  <tr><td>9.2: programa de auditoría interna e imparcialidad</td><td><Link to="/iso-27001/evaluacion">Evaluación del desempeño</Link></td></tr>
                  <tr><td>Tipos de auditoría y principios (19011)</td><td><a href="#fase-4">Fase 4 de esta guía</a></td></tr>
                  <tr><td>Redacción de no conformidades e informe</td><td><a href="#fase-5">Fase 5 de esta guía</a></td></tr>
                  <tr><td>Plazos: fin de la 2013 el 31-10-2025</td><td><Link to="/iso-27001/cambios-2022">Qué cambió en 2022</Link></td></tr>
                  <tr><td>Talleres del curso y examen final</td><td><a href="#practica">Práctica</a> y <a href="#autoevaluacion">autoevaluación</a></td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>Las cinco fases</h2>
              <div className="cuerpo">
                <ul>
                  <li><a href="#fase-1">1 · Fundamentos de un SGSI</a></li>
                  <li><a href="#fase-2">2 · Diseño e implementación</a></li>
                  <li><a href="#fase-3">3 · Gestión del riesgo (27005)</a></li>
                  <li><a href="#fase-4">4 · Auditoría (ISO 19011)</a></li>
                  <li><a href="#fase-5">5 · Evaluación y práctica</a></li>
                  <li><a href="#practica">Práctica: talleres</a></li>
                  <li><a href="#autoevaluacion">Autoevaluación por fases</a></li>
                  <li><a href="#checklist">Checklist de repaso</a></li>
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>Diagramas del curso</h2>
              <p>
                Cinco diagramas clásicos del material docente, recreados en SVG y enlazados con la
                norma punto por punto.
              </p>
              <a className="boton boton-claro" href="#fase-2">Ver el ciclo PHVA</a>
            </div>

            <div className="widget">
              <h2>Estudia la norma primero</h2>
              <div className="cuerpo">
                <ul>
                  <li><Link to="/iso-27001/alcance">1. Alcance</Link></li>
                  <li><Link to="/iso-27001/referencias-vocabulario">2·3. Vocabulario</Link></li>
                  <li><Link to="/iso-27001/contexto">4. Contexto</Link></li>
                  <li><Link to="/iso-27001/liderazgo">5. Liderazgo</Link></li>
                  <li><Link to="/iso-27001/planificacion">6. Planificación</Link></li>
                  <li><Link to="/iso-27001/soporte">7. Soporte</Link></li>
                  <li><Link to="/iso-27001/operacion">8. Operación</Link></li>
                  <li><Link to="/iso-27001/evaluacion">9. Evaluación</Link></li>
                  <li><Link to="/iso-27001/mejora">10. Mejora</Link></li>
                  <li><Link to="/iso-27001/anexo-a">Anexo A</Link></li>
                  <li><Link to="/iso-27002/estructura">ISO/IEC 27002:2022</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

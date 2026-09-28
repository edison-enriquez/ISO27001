import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ISO_27001, ISO_27002 } from '../datos/normas';

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const { pathname } = useLocation();
  const cabecera = useRef<HTMLElement>(null);

  const cerrarTodo = () => {
    setAbierto(false);
    setSubmenu(null);
  };

  // Al navegar, cierra el menú móvil y el desplegable.
  useEffect(cerrarTodo, [pathname]);

  // Escape cierra; un clic fuera de la cabecera también.
  useEffect(() => {
    if (!abierto && !submenu) return;

    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrarTodo();
    };
    const alClicarFuera = (e: PointerEvent) => {
      if (!cabecera.current?.contains(e.target as Node)) cerrarTodo();
    };

    document.addEventListener('keydown', alPulsar);
    document.addEventListener('pointerdown', alClicarFuera);
    return () => {
      document.removeEventListener('keydown', alPulsar);
      document.removeEventListener('pointerdown', alClicarFuera);
    };
  }, [abierto, submenu]);

  const alternarSubmenu = (id: string) => setSubmenu((v) => (v === id ? null : id));

  return (
    <>
      <div className="barra-superior">
        <div className="contenedor">
          <span className="lema">Guía de referencia sobre el SGSI conforme a ISO/IEC 27001:2022</span>
          <nav className="enlaces" aria-label="Enlaces rápidos">
            <Link to="/iso-27001/referencias-vocabulario">Vocabulario</Link>
            <Link to="/iso-27001/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/iso-27001/implantacion">Implantación paso a paso</Link>
          </nav>
        </div>
      </div>

      <header className="cabecera" ref={cabecera}>
        <div className="contenedor">
          <Link className="logo" to="/">
            <span className="marca" aria-hidden="true">
              27001
            </span>
            <span className="texto">
              <strong>Norma ISO 27001</strong>
              <span>SGSI · Edición 2022</span>
            </span>
          </Link>

          <button
            className="nav-boton"
            type="button"
            aria-expanded={abierto}
            aria-controls="menu-principal"
            onClick={() => setAbierto((v) => !v)}
          >
            ☰ Menú
          </button>

          <nav
            className={`nav${abierto ? ' abierto' : ''}`}
            id="menu-principal"
            aria-label="Navegación principal"
          >
            <ul>
              <li className={pathname === '/' ? 'activo' : undefined}>
                <NavLink to="/">Inicio</NavLink>
              </li>

              <li className={`tiene-hijos${pathname.startsWith('/iso-27001') ? ' activo' : ''}`}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={submenu === '27001'}
                  aria-controls="submenu-iso-27001"
                  onClick={() => alternarSubmenu('27001')}
                >
                  ISO/IEC 27001:2022
                </button>
                <ul
                  className={`submenu${submenu === '27001' ? ' abierto' : ''}`}
                  id="submenu-iso-27001"
                >
                  {ISO_27001.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-27001/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`tiene-hijos${pathname.startsWith('/iso-27002') ? ' activo' : ''}`}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={submenu === '27002'}
                  aria-controls="submenu-iso-27002"
                  onClick={() => alternarSubmenu('27002')}
                >
                  ISO/IEC 27002:2022
                </button>
                <ul
                  className={`submenu${submenu === '27002' ? ' abierto' : ''}`}
                  id="submenu-iso-27002"
                >
                  {ISO_27002.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-27002/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={pathname === '/guia-estudio' ? 'activo' : undefined}>
                <NavLink to="/guia-estudio">Guía de estudio</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

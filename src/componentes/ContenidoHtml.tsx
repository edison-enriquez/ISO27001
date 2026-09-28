import { useMemo, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/** Rutas de la SPA por archivo de contenido, para reescribir los href internos. */
const RUTA_POR_ARCHIVO: Record<string, string> = {
  'index.html': '/',
  'alcance.html': '/iso-27001/alcance',
  'referencias-vocabulario.html': '/iso-27001/referencias-vocabulario',
  'contexto.html': '/iso-27001/contexto',
  'liderazgo.html': '/iso-27001/liderazgo',
  'planificacion.html': '/iso-27001/planificacion',
  'soporte.html': '/iso-27001/soporte',
  'operacion.html': '/iso-27001/operacion',
  'evaluacion.html': '/iso-27001/evaluacion',
  'mejora.html': '/iso-27001/mejora',
  'anexo-a.html': '/iso-27001/anexo-a',
  'cambios-2022.html': '/iso-27001/cambios-2022',
  'implantacion.html': '/iso-27001/implantacion',
  'preguntas-frecuentes.html': '/iso-27001/preguntas-frecuentes',
  'estructura-27002.html': '/iso-27002/estructura',
  'tema-5.html': '/iso-27002/tema-5',
  'tema-6.html': '/iso-27002/tema-6',
  'tema-7.html': '/iso-27002/tema-7',
  'tema-8.html': '/iso-27002/tema-8',
  'correspondencia.html': '/iso-27002/correspondencia',
};

/**
 * Reescribe los href relativos del contenido a rutas de la SPA,
 * conservando el fragmento (#ancla) cuando lo hay.
 */
function reescribirEnlaces(html: string): string {
  return html.replace(/href="([^"]+)"/g, (original, destino: string) => {
    if (/^(https?:|mailto:|#|\/)/.test(destino)) return original;
    const [archivo, ancla] = destino.split('#');
    const ruta = RUTA_POR_ARCHIVO[archivo];
    if (!ruta) return original;
    return `href="${ruta}${ancla ? `#${ancla}` : ''}"`;
  });
}

interface Props {
  html: string;
}

/**
 * Renderiza los fragmentos de contenido del sitio.
 *
 * Sobre dangerouslySetInnerHTML: el HTML procede exclusivamente de
 * src/contenido, son archivos propios incluidos en el bundle en tiempo de
 * compilación. No hay entrada de usuario ni contenido remoto en este camino,
 * por lo que no existe superficie de XSS.
 */
export function ContenidoHtml({ html }: Props) {
  const navigate = useNavigate();
  const procesado = useMemo(() => reescribirEnlaces(html), [html]);

  // Delegación: intercepta los enlaces internos para no recargar la página.
  const alHacerClic = (e: MouseEvent<HTMLDivElement>) => {
    const destino = (e.target as HTMLElement).closest('a');
    if (!destino) return;

    const href = destino.getAttribute('href');
    if (!href || !href.startsWith('/')) return;

    // Respeta las intenciones de abrir en pestaña nueva.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (destino.target === '_blank') return;

    e.preventDefault();
    navigate(href);
  };

  return (
    <div
      className="contenido"
      onClick={alHacerClic}
      dangerouslySetInnerHTML={{ __html: procesado }}
    />
  );
}

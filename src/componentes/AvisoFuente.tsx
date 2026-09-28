import { Link } from 'react-router-dom';
import type { Fuente } from '../datos/tipos';

const ETIQUETA: Record<Fuente['procedencia'], string> = {
  oficial: 'Verificado contra el texto oficial de ISO/IEC',
  'elaboracion-propia': 'Elaboración propia',
};

/**
 * Muestra de dónde viene el contenido de la página.
 *
 * Se renderiza cuando hay algo que advertir: las páginas verificadas contra la
 * norma oficial solo muestran el aviso si llevan una advertencia explícita
 * (p. ej. «resumen en español elaborado desde el inglés oficial»).
 */
export function AvisoFuente({ fuente }: { fuente: Fuente }) {
  if (fuente.procedencia === 'oficial' && !fuente.advertencia) return null;

  return (
    <aside className="aviso-fuente" role="note">
      <strong>{ETIQUETA[fuente.procedencia]}.</strong>{' '}
      {fuente.advertencia ??
        'Contraste este contenido con el texto oficial antes de usarlo como criterio de auditoría.'}{' '}
      {fuente.documento && <>Documento de referencia: {fuente.documento}. </>}
      <Link to="/fuentes">Ver todas las fuentes</Link>.
    </aside>
  );
}

import { useState } from 'react';
import { PREGUNTAS } from '../datos/practica';

function Item({
  idx, enunciado, opciones, correcta, explicacion, onAnswer, answered,
}: {
  idx: number; enunciado: string; opciones: string[]; correcta: number;
  explicacion: string; answered: boolean;
  onAnswer: (ok: boolean) => void;
}) {
  const [sel, setSel] = useState<number | null>(null);

  const elegir = (i: number) => {
    if (answered) return;
    setSel(i);
    onAnswer(i === correcta);
  };

  return (
    <div className="quiz-item">
      <p className="quiz-enun">
        <span className="quiz-num">{idx + 1}</span>
        {enunciado}
      </p>
      <ul className="quiz-opciones">
        {opciones.map((op, i) => {
          let clase = 'quiz-op';
          if (answered) {
            if (i === correcta) clase += ' acierto';
            else if (i === sel) clase += ' error';
          }
          return (
            <li key={i}>
              <button type="button" className={clase} onClick={() => elegir(i)} disabled={answered}>
                <span className="quiz-letra">{String.fromCharCode(65 + i)}</span>
                {op}
              </button>
            </li>
          );
        })}
      </ul>
      {answered && (
        <p className="quiz-explicacion" role="status">
          {sel === correcta ? 'Correcto. ' : 'No exactamente. '}
          {explicacion}
        </p>
      )}
    </div>
  );
}

/** Banco de autoevaluación de una fase: preguntas del material ampliado. */
export function BancoPreguntas({ fase }: { fase: number }) {
  const preguntas = PREGUNTAS.filter((p) => p.fase === fase);
  const [respondidas, setRespondidas] = useState<Record<string, boolean>>({});

  const registrar = (id: string, ok: boolean) =>
    setRespondidas((r) => ({ ...r, [id]: ok }));

  const total = preguntas.length;
  const nRespondidas = Object.keys(respondidas).length;
  const aciertos = Object.values(respondidas).filter(Boolean).length;

  return (
    <div className="quiz-bloque">
      {preguntas.map((p, i) => (
        <Item
          key={p.id}
          idx={i}
          enunciado={p.enunciado}
          opciones={p.opciones}
          correcta={p.correcta}
          explicacion={p.explicacion}
          answered={p.id in respondidas}
          onAnswer={(ok) => registrar(p.id, ok)}
        />
      ))}
      <p className="quiz-marca" aria-live="polite">
        {nRespondidas === total
          ? `Marcador de esta fase: ${aciertos} de ${total}. ${
              aciertos === total
                ? 'Perfecto: puedes pasar a la siguiente fase.'
                : 'Repasa arriba las explicaciones de los fallos.'
            }`
          : `Llevas ${nRespondidas} de ${total} preguntas de esta fase.`}
      </p>
    </div>
  );
}

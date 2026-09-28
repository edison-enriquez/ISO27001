# ISO 27001 — Guía del SGSI conforme a ISO/IEC 27001:2022 e ISO/IEC 27002:2022

Sitio divulgativo sobre la norma **ISO/IEC 27001:2022** (requisitos del sistema de gestión de la
seguridad de la información) y **ISO/IEC 27002:2022** (los 93 controles del Anexo A, organizados en
cuatro temas).

La organización del contenido sigue la del sitio clásico *normaiso27001.es* —la norma punto por
punto, la guía de implantación por fases y los controles por áreas—, **actualizada de la edición
2013 a la edición 2022**: los 14 dominios A5–A18 dan paso a los temas A.5–A.8 y las cláusulas se
comentan sobre el texto vigente (incluida la Enmienda 1:2024 sobre cambio climático).

La base técnica es una plantilla Vite + React + TypeScript (React Router, sin backend): el mismo
motor del sitio de ISO 19011, adaptado a las dos normas.

## Estructura

- `src/contenido/` — páginas de contenido en HTML (cláusulas 1 a 10, Anexo A, implantación, FAQ,
  vocabulario, estructura de la 27002).
- `src/datos/` — `normas.ts` (índice de secciones de cada norma), `controles.ts` (los 93 controles
  con su resumen, si son nuevos y su procedencia 2013 según la Tabla B.1) y `tipos.ts`.
- `src/componentes/` y `src/paginas/` — navegación, cabecera, pie y renderizado.
- `src/tema/` — tokens y estilos globales.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint       # tsc --noEmit
npm run build      # salida en dist/
```

## Despliegue

GitHub Pages vía `.github/workflows/deploy.yml`: al hacer push a `main` compila y publica en
`https://<usuario>.github.io/ISO27001/`. El workflow copia `index.html` como `404.html` para que
cualquier ruta profunda cargue la SPA.

En `Settings → Pages` de GitHub debe seleccionarse **Source: GitHub Actions**.

## Fuentes y aviso

El contenido verifica sus datos contra los textos oficiales en inglés de ISO/IEC 27001:2022 e
ISO/IEC 27002:2022; los nombres de los controles siguen la traducción oficial al español. Los
resúmenes, tablas de sinopsis y guías (implantación, FAQ, cambios 2022) son **elaboración propia
con fines didácticos** y no sustituyen a la norma, que debe adquirirse en ISO o en el organismo
nacional correspondiente (ICONTEC, AENOR, UNE…). El sitio no está afiliado a ISO, IEC ni a ninguna
institución y no reproduce texto normativo íntegro.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './tema/global.css';

// BrowserRouter y no HashRouter: el contenido usa anclas internas de forma
// intensiva (el índice de cada capítulo, las tablas del Anexo A). Con
// HashRouter el router interpretaría cada ancla como una ruta.
// basename se toma de la base de Vite: '/' en local, '/<repo>/' en GitHub
// Pages.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

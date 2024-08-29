import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@radix-ui/themes/styles.css'; // Asegúrate de importar los estilos base
import { Theme, ThemePanel } from '@radix-ui/themes'; // Importa el Theme
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      {/* <App /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ThemePanel />
    </Theme>
  </StrictMode>
)

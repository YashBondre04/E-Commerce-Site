import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './context/theme-provider.jsx'
import './index.css'
//import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)

//<Provider store={store}>
//</Provider>
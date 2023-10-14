import '/src/styles/css/index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css'

import ReactDOM from 'react-dom/client'
import { AppProvider } from '/src/hooks/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppProvider>
      <App/>
    </AppProvider>
  </>,
)

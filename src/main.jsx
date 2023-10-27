import '/src/styles/css/index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>,
)

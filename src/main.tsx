import '/src/styles/css/index.css'
import App from './App.tsx'
import 'leaflet/dist/leaflet.css'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>,
)

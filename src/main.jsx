import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
import {persistor} from './app/store.js'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider  store={store} >
      <PersistGate  persistor={persistor} >
         <App />
      </PersistGate>
    </Provider>


)

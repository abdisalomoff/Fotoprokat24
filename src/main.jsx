import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistore, store } from './components/redux/store/store.js';

import App from './App.jsx'
import './index.css'

import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/700.css"; // Specify weight


ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistore}>
    <Provider store={store}>
      <App/>
    </Provider>
  </PersistGate>
);

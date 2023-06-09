import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchQuestsAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import { setLevelFilter, setTypeFilter } from './store/quests-data/quests-data';

store.dispatch(fetchQuestsAction());
store.dispatch(checkAuthAction());
store.dispatch(setTypeFilter('all'));
store.dispatch(setLevelFilter('any'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right" />
      <App />
    </Provider>
  </React.StrictMode>,
);

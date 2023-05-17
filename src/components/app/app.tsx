import { Route, Routes } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { AppRoute } from '../../const';
import ContactsScreen from '../../pages/contacts-screen/contacts-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyQuestsScreen from '../../pages/my-quests/my-quests';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import { HistoryRouter } from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';


function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<MainScreen />}
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute>
              <MyQuestsScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route path={AppRoute.Quest}>
          <Route path = ':id' element = {<QuestScreen />} />
        </Route>
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
        <Route
          path={AppRoute.Contacts}
          element = {<ContactsScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

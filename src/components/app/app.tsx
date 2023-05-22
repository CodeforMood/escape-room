import { Route, Routes } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { AppRoute, SPINNER_COLOR } from '../../const';
import { useAppSelector } from '../../hooks';
import BookingScreen from '../../pages/booking-screen/booking-screen';
import ContactsScreen from '../../pages/contacts-screen/contacts-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyQuestsScreen from '../../pages/my-quests/my-quests';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import { getBookingQuestDataLoadingStatus} from '../../store/booking-quest-data/selectors';
import { getCurrentQuestDataLoadingStatus} from '../../store/current-quest-data/selectors';
import { getMyQuestsDataLoadingStatus } from '../../store/my-quests-data/selectors';
import { getQuestsDataLoadingStatus } from '../../store/quests-data/selectors';
import { HistoryRouter } from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';
import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
};


function App(): JSX.Element {
  const isQuestDataLoading = useAppSelector(getQuestsDataLoadingStatus);
  const isBookingQuestDataLoading = useAppSelector(getBookingQuestDataLoadingStatus);
  const isMyQuestsDataLoading = useAppSelector(getMyQuestsDataLoadingStatus);
  const isCurrentQuestDataLoading = useAppSelector(getCurrentQuestDataLoadingStatus);

    if (isQuestDataLoading ||isBookingQuestDataLoading || isMyQuestsDataLoading || isCurrentQuestDataLoading) {
    return (
      <ClipLoader
        color={SPINNER_COLOR}
        loading={isQuestDataLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
    );
  }

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
          path={AppRoute.Booking}
          element = {<BookingScreen />}
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

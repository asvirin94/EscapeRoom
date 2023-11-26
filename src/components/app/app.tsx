import { HelmetProvider } from 'react-helmet-async';
import StartPage from '../../pages/start-page/start-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute } from '../../consts';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import AuthorizationPage from '../../pages/authorization-page/authorization-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import PrivateComponent from '../private-component/private-component';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main}>
            <Route index element={<StartPage />} />
            <Route path={AppRoute.Contacts} element={<ContactsPage />}/>
            <Route path={AppRoute.Quest} element={<QuestPage />} />
            <Route path={AppRoute.Login} element={<AuthorizationPage />} />
            <Route path={AppRoute.Booking} element={<BookingPage />} />
            <Route path={AppRoute.Quests} element={<PrivateComponent><MyQuestsPage /></PrivateComponent>} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

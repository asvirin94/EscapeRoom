import { HelmetProvider } from 'react-helmet-async';
import StartPage from '../../pages/start-page/start-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { AppRoutes } from '../../consts';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import AuthorizationPage from '../../pages/authorization-page/authorization-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main}>
            <Route index element={<StartPage />} />
            <Route path={AppRoutes.Contacts} element={<ContactsPage />}/>
            <Route path={AppRoutes.Quest} element={<QuestPage />} />
            <Route path={AppRoutes.Login} element={<AuthorizationPage />} />
            <Route path={AppRoutes.Booking} element={<BookingPage />} />
            <Route path={AppRoutes.Quests} element={<MyQuestsPage />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

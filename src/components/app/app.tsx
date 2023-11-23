import { HelmetProvider } from 'react-helmet-async';
import StartPage from '../../pages/start-page/start-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found';
import { AppRoutes } from '../../consts';
import QuestPage from '../../pages/quest-page/quest-page';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main}>
            <Route index element={<StartPage />} />
            <Route path={AppRoutes.Login} element={<StartPage />}/>
            <Route path={AppRoutes.Quest} element={<QuestPage />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

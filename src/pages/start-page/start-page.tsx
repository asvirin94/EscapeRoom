import DifficultFilter from '../../components/difficult-filter/difficult-filter';
import Footer from '../../components/footer/footer';
import GenreFilter from '../../components/genre-filter/genre-filter';
import Header from '../../components/header/header';
import QuestsList from '../../components/quests-list/quests-list';
import StartPageTitle from '../../components/start-page-title/start-page-title';

export default function StartPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <StartPageTitle />
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <GenreFilter />
              <DifficultFilter />
            </form>
          </div>
          <QuestsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

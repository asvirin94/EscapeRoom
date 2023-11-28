import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestItem from '../../components/quest-item/quest-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReservationsAction } from '../../store/api-actions';
import { getReservations } from '../../store/data-process/data-process.selectors';

export default function MyQuestsPage() {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector(getReservations);

  useEffect(() => {
    let isMounted = true;
    if(isMounted) {
      dispatch(getReservationsAction());
    }

    return (() => {
      isMounted = false;
    });
  }, []);


  return (
    <div className="wrapper">
      <Header isMyQuestsPage/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="
                img/content/maniac/maniac-bg-size-m.webp,
                img/content/maniac/maniac-bg-size-m@2x.webp 2x
              "
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width="1366"
              height="1959"
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {bookings?.map((booking) => {
              const {quest, peopleCount, date, time, location: {address}, id} = booking;

              return (
                <QuestItem
                  selectedPeopleCount={peopleCount}
                  key={quest.id}
                  title={quest.title}
                  previewImg={quest.previewImg}
                  previewImgWebp={quest.previewImgWebp}
                  level={quest.level}
                  peopleMinMax={quest.peopleMinMax}
                  id={quest.id}
                  date={date}
                  time={time}
                  address={address}
                  reservationId={id}
                  isBooked
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

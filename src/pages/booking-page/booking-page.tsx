import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useRef } from 'react';
import { getBookingInfoAction, loadQuestForPageAction } from '../../store/api-actions';
import BookingForm from '../../components/booking-form/booking-form';
import Map from '../../components/map/map';
import { getBookingInfo, getQuestForPage } from '../../store/data-process/data-process.selectors';
import { getActiveLocationAdress } from '../../store/app-process/app-process.selectors';

export default function BookingPage() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(getQuestForPage);
  const bookInfo = useAppSelector(getBookingInfo);
  const adress = useAppSelector(getActiveLocationAdress);
  const isInitialized = useRef(true);

  useEffect(() => {
    let isMounted = true;
    if(id && isInitialized.current && isMounted) {
      dispatch(getBookingInfoAction({id}));
      isInitialized.current = false;
    }

    if(id && !quest) {
      dispatch(loadQuestForPageAction({id}));
    }

    return (() => {
      isInitialized.current = false;
      isMounted = false;
    });
  }, [id]);

  if(quest && bookInfo) {
    return (
      <div className="wrapper">
        <Header isMainPage/>
        <main className="page-content decorated-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <img
                srcSet={quest.coverImg}
                width="1366"
                height="1959"
                alt=""
              />
            </picture>
          </div>
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">
                Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">
                {quest.title}
              </p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <div className="map__container">
                    <Map isBookingPage/>
                  </div>
                </div>
                <p className="booking-map__address">
                  Вы&nbsp;выбрали: {adress}
                </p>
              </div>
            </div>
            <BookingForm minPeople={quest.peopleMinMax[0]} maxPeople={quest.peopleMinMax[1]} quest={quest}/>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

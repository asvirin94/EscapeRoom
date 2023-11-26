import {Link} from 'react-router-dom';
import { DateTranslation, DifficultLevel } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { removeFromReservationAction } from '../../store/api-actions';

type Props = {
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: keyof typeof DifficultLevel;
  peopleMinMax: number[];
  id: string;
  selectedPeopleCount?: number;
  isBooked?: boolean;
  date?: 'today' | 'tomorrow';
  time?: string;
  address?: string;
  reservationId?: string;
}

export default function QuestItem({title, previewImg, previewImgWebp, level, peopleMinMax, id, selectedPeopleCount, isBooked, date, time, address, reservationId}: Props) {
  const dispatch = useAppDispatch();

  const peopleCountElement = selectedPeopleCount ?
    `${selectedPeopleCount} чел` :
    `${peopleMinMax[0]}-${peopleMinMax[1]} чел`;

  const bookingInfoElement = date && time && address ?
    `[${DateTranslation[date]}, ${time}. ${address}]` :
    null;

  const removeButtonHandler = () => {
    if(reservationId) {
      dispatch(removeFromReservationAction({id: reservationId}));
    }
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg}
            srcSet={previewImg}
            width="344"
            height="232"
            alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`/quest/${id}`}>
            {title}
          </ Link>
          <span className='quest-card__info'>
            {bookingInfoElement}
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {peopleCountElement}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {DifficultLevel[level]}
          </li>
        </ul>
        {isBooked &&
        <button
          onClick={removeButtonHandler}
          className="btn btn--accent btn--secondary quest-card__btn" type="button"
        > Отменить
        </button>}
      </div>
    </div>
  );
}

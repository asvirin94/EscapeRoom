/* eslint-disable no-console */
import { useForm } from 'react-hook-form';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { makeTimeSlotId, separateDayTimeString } from '../../utils';
import { sendBookingDataAction } from '../../store/api-actions';
import { Quest } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { getBookingInfo } from '../../store/data-process/data-process.selectors';
import { getActiveLocationId } from '../../store/app-process/app-process.selectors';

type Props = {
  minPeople: number;
  maxPeople: number;
  quest: Quest;
}

export default function BookingForm({minPeople, maxPeople, quest}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bookingInfo = useAppSelector(getBookingInfo);
  const locationId = useAppSelector(getActiveLocationId);
  const {register, handleSubmit, formState: { errors }, getValues} = useForm();
  const location = bookingInfo?.find((locationToFind) => locationToFind.id === locationId);

  if(location) {
    const checkPeopleCount = (min: number, max: number) => {
      const { peopleCount } = getValues();

      const isValidCount = +peopleCount >= min && +peopleCount <= max;
      return isValidCount || `Количество участников в этом квесте может быть от ${min} до ${max}`;
    };

    const checkUsername = () => {
      const {userName} = getValues();
      if(typeof userName === 'string') {
        const isValidName = /[А-Яа-яЁёA-Za-z' -]{1,}/.test(userName);
        return isValidName || 'Можно использовать только буквы русского и английского алфавита и дефис';
      }
      return 'Можно использовать только буквы русского и английского алфавита и дефис';
    };

    const checkUserTel = () => {
      const {userTel} = getValues();

      if(typeof userTel === 'string') {
        const isValidTel = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(userTel);
        return isValidTel || 'Введите номер в формате +7 (000) 000-00-00';
      }
      return 'Можно использовать только цифры';
    };

    const onSubmit = () => {
      const {userName, userTel, selectedTime, peopleCount, withChildren} = getValues();

      const separate = separateDayTimeString(selectedTime as string);
      const [, day, time] = separate;
      const isWithChildren = withChildren === true;
      dispatch(sendBookingDataAction({
        date: day,
        time,
        contactPerson: userName as string,
        phone: userTel as string,
        withChildren: isWithChildren,
        peopleCount: +peopleCount,
        placeId: location.id,
        id: quest.id
      }))
        .then(() => {
          navigate(AppRoute.Quests);
        });

    };

    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          void handleSubmit(onSubmit)(evt);
        }}
        className="booking-form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Выбор даты и времени</legend>
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Сегодня</legend>
            <div className="booking-form__date-inner-wrapper">
              {location.slots.today.map((slot) => (
                <label className="custom-radio booking-form__date" key={slot.time}>
                  <input
                    type="radio"
                    id={`today${makeTimeSlotId(slot.time)}id`}
                    disabled={!slot.isAvailable}
                    value={`today${slot.time}`}
                    {...register('selectedTime',
                      {
                        required: 'Выберите дату и время'
                      })}
                  /><span className="custom-radio__label">{slot.time}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="booking-form__date-section" aria-invalid={errors.selectedTime ? 'true' : 'false'}>

            <legend className="booking-form__date-title">Завтра</legend>
            <div className="booking-form__date-inner-wrapper">
              {location.slots.tomorrow.map((slot) => (
                <label className="custom-radio booking-form__date" key={slot.time}>
                  <input
                    type="radio"
                    id={`tomorrow${makeTimeSlotId(slot.time)}id`}
                    disabled={!slot.isAvailable}
                    value={`tomorrow${slot.time}`}
                    {...register('selectedTime',
                      {
                        required: 'Выберите дату и время'
                      })}
                  />
                  <span className="custom-radio__label">{slot.time}</span>
                </label>
              ))}
            </div>
            {errors.selectedTime && <><br/><span style={{color: 'red'}} role="alert">{errors.selectedTime?.message as string}</span></>}
          </fieldset>
        </fieldset>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              placeholder="Имя"
              {...register('userName',
                {
                  required: 'Введите имя',
                  validate: checkUsername
                })}
              aria-invalid={errors.userName ? 'true' : 'false'}
            />
            {errors.userName && <><br/><span style={{color: 'red'}} role="alert">{errors.userName?.message as string}</span></>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel">Контактный телефон
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Телефон"
              {...register('userTel',
                {
                  required: 'Введите телефон',
                  validate: checkUserTel
                })}
              aria-invalid={errors.userTel ? 'true' : 'false'}
            />
            {errors.userTel && <><br/><span style={{color: 'red'}} role="alert">{errors.userTel?.message as string}</span></>}
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников
            </label>
            <input
              type="text"
              id="person"
              placeholder="Количество участников"
              {...register('peopleCount',
                {
                  required: 'Укажите количество участников',
                  validate: () => checkPeopleCount(minPeople, maxPeople)
                })}
              aria-invalid={errors.peopleCount ? 'true' : 'false'}
            />
            {errors.peopleCount && <><br/><span style={{color: 'red'}} role="alert">{errors.peopleCount?.message as string}</span></>}
          </div>
          <label
            className="custom-checkbox booking-form__checkbox booking-form__checkbox--children"
          >
            <input
              type="checkbox"
              id="children"
              {...register('withChildren')}
            />
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Со&nbsp;мной будут дети
            </span>
          </label>
        </fieldset>
        <button
          className="btn btn--accent btn--cta booking-form__submit"
          type="submit"
        >
                  Забронировать
        </button>
        <label
          className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement"
        >
          <input
            type="checkbox"
            id="id-order-agreement"
            {...register('userAgreement',
              {
                required: 'Выберите этот пункт'
              })}
            aria-invalid={errors.userAgreement ? 'true' : 'false'}
          />
          {errors.userAgreement && <><br/><span style={{color: 'red'}} role="alert">{errors.userAgreement?.message as string}</span></>}
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных
            </a>&nbsp;и пользовательским соглашением
          </span>
        </label>
      </form>
    );
  } else {
    return null;
  }
}

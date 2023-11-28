import { GenreFilterName } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenreFilter } from '../../store/app-process/app-process.selectors';
import { setGenreFilter } from '../../store/app-process/app-process.slice';

export default function GenreFilter() {
  const dispatch = useAppDispatch();
  const genreFilter = useAppSelector(getGenreFilter);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName.any))}>
          <input type="radio" name="type" id="all" checked={genreFilter === GenreFilterName.any} readOnly/>
          <label className="filter__label" htmlFor="all">
            <svg
              className="filter__icon"
              width="26"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-all-quests"></use>
            </svg>
            <span className="filter__label-text">Все квесты</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName.adventures))}>
          <input type="radio" name="type" id="adventure" checked={genreFilter === GenreFilterName.adventures} readOnly/>
          <label className="filter__label" htmlFor="adventure">
            <svg
              className="filter__icon"
              width="36"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-adventure"></use>
            </svg>
            <span className="filter__label-text">Приключения</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName.horror))}>
          <input type="radio" name="type" id="horror" checked={genreFilter === GenreFilterName.horror} readOnly/>
          <label className="filter__label" htmlFor="horror">
            <svg
              className="filter__icon"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-horror"></use>
            </svg><span className="filter__label-text">Ужасы</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName.mystic))}>
          <input type="radio" name="type" id="mystic" checked={genreFilter === GenreFilterName.mystic} readOnly/>
          <label className="filter__label" htmlFor="mystic">
            <svg
              className="filter__icon"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-mystic"></use>
            </svg><span className="filter__label-text">Мистика</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName.detective))}>
          <input type="radio" name="type" id="detective" checked={genreFilter === GenreFilterName.detective} readOnly/>
          <label className="filter__label" htmlFor="detective">
            <svg
              className="filter__icon"
              width="40"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-detective"></use>
            </svg><span className="filter__label-text">Детектив</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setGenreFilter(GenreFilterName['sci-fi']))}>
          <input type="radio" name="type" id="sciFi" checked={genreFilter === GenreFilterName['sci-fi']} readOnly/>
          <label className="filter__label" htmlFor="sciFi">
            <svg
              className="filter__icon"
              width="28"
              height="30"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-sci-fi"></use>
            </svg><span className="filter__label-text">Sci-fi</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

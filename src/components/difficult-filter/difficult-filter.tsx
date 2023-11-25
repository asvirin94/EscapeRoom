import { LevelFilterName, NameSpace } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLevelFilter } from '../../store/app-process/app-process.slice';

export default function DifficultFilter() {
  const dispatch = useAppDispatch();
  const levelFilter = useAppSelector((state) => state[NameSpace.App].level);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        <li className="filter__item" onChange={() => dispatch(setLevelFilter(LevelFilterName.any))}>
          <input type="radio" name="level" id="any" readOnly checked={levelFilter === LevelFilterName.any}/>
          <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setLevelFilter(LevelFilterName.easy))}>
          <input type="radio" name="level" id="easy" readOnly checked={levelFilter === LevelFilterName.easy}/>
          <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setLevelFilter(LevelFilterName.medium))}>
          <input type="radio" name="level" id="middle" readOnly checked={levelFilter === LevelFilterName.medium}/>
          <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
          </label>
        </li>
        <li className="filter__item" onChange={() => dispatch(setLevelFilter(LevelFilterName.hard))}>
          <input type="radio" name="level" id="hard" readOnly checked={levelFilter === LevelFilterName.hard} />
          <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

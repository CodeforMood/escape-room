import { useAppDispatch } from '../../hooks';
import { filterQuests, setLevelFilter, setTypeFilter } from '../../store/quests-data/quests-data';

export default function FilterForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = evt.target.id;

    if (evt.target.name === 'type') {
      dispatch(setTypeFilter(filterName));
      dispatch(filterQuests());
      return;
    }
    dispatch(setLevelFilter(filterName));
    dispatch(filterQuests());
  };

  return (
    <form className="filter" action="#" method="get" >
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="type" id="all" onChange={fieldChangeHandle}/>
            <label className="filter__label" htmlFor="all">
              <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                <use xlinkHref="#icon-all-quests"></use>
              </svg><span className="filter__label-text">Все квесты</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="adventures" onChange={fieldChangeHandle}/>
            <label className="filter__label" htmlFor="adventures" >
              <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                <use xlinkHref="#icon-adventure"></use>
              </svg><span className="filter__label-text">Приключения</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="horror" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="horror">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-horror"></use>
              </svg><span className="filter__label-text">Ужасы</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="mystic" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="mystic">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-mystic"></use>
              </svg><span className="filter__label-text">Мистика</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="detective" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="detective">
              <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                <use xlinkHref="#icon-detective"></use>
              </svg><span className="filter__label-text">Детектив</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="sci-fi" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="sci-fi">
              <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                <use xlinkHref="#icon-sci-fi"></use>
              </svg><span className="filter__label-text">Sci-fi</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="level" id="any" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="easy" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="medium" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="medium"><span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="level" id="hard" onChange={fieldChangeHandle} />
            <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

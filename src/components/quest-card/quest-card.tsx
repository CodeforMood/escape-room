import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { fetchCurrentQuestDataAction } from '../../store/api-actions';
import { MyQuest } from '../../types/my-quest';
import { Quest } from '../../types/quest';

type QuestCardProps = {
  questData?: Quest;
  myQuestData?: MyQuest;
}

export default function QuestCard({questData, myQuestData}: QuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  if (questData) {
    const {title, id, previewImg, previewImgWebp, level, peopleMinMax, } = questData;

    return (
      <div className="quest-card">
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={`${previewImgWebp}, img/content/crypt/crypt-size-s@2x.webp 2x`} /><img src={previewImg} srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в клетке в подземелье." />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper"><Link className="quest-card__link" onClick={() => {dispatch(fetchCurrentQuestDataAction(id));}} to={`${AppRoute.Quest}/${id}`}>{title}</Link>
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>{`${peopleMinMax[0]}-${peopleMinMax[1]} чел`}
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{level}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  if (myQuestData) {
    const {quest: {id: questId, title, previewImg, previewImgWebp, level}, id, date, time, location: {address}, peopleCount} = myQuestData;
    return (
      <div className="quest-card">
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={`${previewImgWebp}, img/content/crypt/crypt-size-s@2x.webp 2x`} /><img src={previewImg} srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x" width="344" height="232" alt="Мужчина в клетке в подземелье." />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper"><Link className="quest-card__link" onClick={() => {dispatch(fetchCurrentQuestDataAction(questId));}} to={`${AppRoute.Quest}/${questId}`}>{title}</Link>
            <span className="quest-card__info">{`[${date}, ${time}. ${address}]`}</span>
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>{`${peopleCount} чел`}
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{level}
            </li>
          </ul>
          <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
        </div>
      </div>
    );
  }
  return <NotFoundScreen />;
}


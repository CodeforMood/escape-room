import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingQuestDataAction } from '../../store/api-actions';
import { getCurrentQuestData, getCurrentQuestDataLoadingStatus } from '../../store/current-quest-data/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function QuestScreen (): JSX.Element {
  const questData = useAppSelector(getCurrentQuestData);
  const isQuestDataLoadingStatus = useAppSelector(getCurrentQuestDataLoadingStatus);
  const dispatch = useAppDispatch();

  if(questData && !isQuestDataLoadingStatus) {
    const {previewImg, previewImgWebp, description, title, coverImg, coverImgWebp, type, peopleMinMax, level, id} = questData;
    return (
      <div className="wrapper">
        <Header />
        <main className="decorated-page quest-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet={`${coverImgWebp}, ${previewImgWebp}`} /><img src={`${coverImg}`} srcSet={`${previewImg}`} width="1920" height="1080" alt="" />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="quest-page__content">
              <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
              <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{type}
              </p>
              <ul className="tags tags--size-l quest-page__tags">
                <li className="tags__item">
                  <svg width="11" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-person"></use>
                  </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
                </li>
                <li className="tags__item">
                  <svg width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-level"></use>
                  </svg>{level}
                </li>
              </ul>
              <p className="quest-page__description">{description}</p>
              <Link className="btn btn--accent btn--cta quest-page__btn" onClick={() => {dispatch(fetchBookingQuestDataAction(id));}} to={AppRoute.Booking}>Забронировать</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  return <NotFoundScreen />;
}

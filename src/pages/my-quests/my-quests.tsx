import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestList from '../../components/quest-list/quest-list';
import { useAppSelector } from '../../hooks';
import { getMyQuestsData } from '../../store/my-quests-data/selectors';

export default function MyQuestsScreen (): JSX.Element {
  const myQuestsData = useAppSelector(getMyQuestsData);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          {myQuestsData.length ? <QuestList myQuestsData={myQuestsData}/> : 'Пока ничего нет...'}
        </div>
      </main>
      <Footer />
    </div>
  );
}

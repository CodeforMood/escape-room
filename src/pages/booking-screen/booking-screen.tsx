import BookingForm from '../../components/booking-form/booking-form';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { getBookingQuestData, getCurrentBookingQuestId } from '../../store/booking-quest-data/selectors';
import { getCurrentQuestData } from '../../store/current-quest-data/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';

export default function BookingScreen (): JSX.Element {
  const currentQuestData = useAppSelector(getCurrentQuestData);
  const bookingQuestData = useAppSelector(getBookingQuestData);
  const currentBookingQuestId = useAppSelector(getCurrentBookingQuestId);
  const bookingQuest = bookingQuestData.find((bookingQuestElem) => bookingQuestElem.id === currentBookingQuestId);

  if(bookingQuest && currentQuestData) {

    return (
      <div className="wrapper">
        <Header />
        <main className="page-content decorated-page">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
            </picture>
          </div>
          <div className="container container--size-s">
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">{currentQuestData.title}</p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <Map bookingQuestData={bookingQuestData} />
                </div>
                <p className="booking-map__address">{bookingQuest.location.address}</p>
              </div>
            </div>
            <BookingForm />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <NotFoundScreen />;
}

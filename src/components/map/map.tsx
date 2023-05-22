import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE} from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { BookingQuestData } from '../../types/booking-quest-data';
import useMap from '../../hooks/useMap';
import { getCurrentBookingQuestId } from '../../store/booking-quest-data/selectors';
import { setCurrentBookingQuestId } from '../../store/booking-quest-data/booking-quest-data';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


type MapProps = {
   bookingQuestData: BookingQuestData[];
}


export default function Map({bookingQuestData}: MapProps): JSX.Element {
  const currentBookingQuestId = useAppSelector(getCurrentBookingQuestId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, bookingQuestData[0].location.coords);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (map) {
      bookingQuestData.forEach((bookingQuest: BookingQuestData) => {
        const marker = new Marker({
          lat: bookingQuest.location.coords[0],
          lng:bookingQuest.location.coords[1],
        });

        marker.setIcon(
          currentBookingQuestId !== undefined && bookingQuest.id === currentBookingQuestId
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);

        marker.addOneTimeEventListener('click', () => {dispatch(setCurrentBookingQuestId(bookingQuest.id));});
      });
    }
  }, [map, bookingQuestData, currentBookingQuestId, dispatch]);
  
  return (
    <section className="map__container" ref={mapRef}></section>
  );
}

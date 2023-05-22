import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_ACTIVE, DEFAULT_COORDINATES} from '../../const';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';


const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function ContactsMap(): JSX.Element {
  
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_COORDINATES);

  useEffect(() => {
    if (map) {
        const marker = new Marker({
          lat: DEFAULT_COORDINATES[0],
          lng: DEFAULT_COORDINATES[1],
        });

        marker.setIcon(currentCustomIcon).addTo(map);
    }
  }, [map]);
  
  return (
    <section className="map__container" ref={mapRef}></section>
  );
}

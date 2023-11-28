import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector, useMap } from '../../hooks';
import { CENTER_COORDINATES, QUEST_OFFICE_COORDINATES } from '../../consts';
import { setActiveLocationAdress, setActiveLocationId } from '../../store/app-process/app-process.slice';
import { getBookingInfo } from '../../store/data-process/data-process.selectors';
import { getActiveLocationId } from '../../store/app-process/app-process.selectors';

type Props = {
  isBookingPage?: boolean;
}

export default function Map({isBookingPage}: Props) {
  const dispatch = useAppDispatch();
  const bookingInfo = useAppSelector(getBookingInfo);
  const activeLocationId = useAppSelector(getActiveLocationId);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const coordinates = isBookingPage ? CENTER_COORDINATES : QUEST_OFFICE_COORDINATES;
  const mapSize = isBookingPage ? '529px' : '370px';
  const markersRef = useRef<leaflet.Marker[]>([]);
  const map = useMap(mapRef as MutableRefObject<HTMLElement>, coordinates);

  const currentCustomIcon = leaflet.icon({
    iconUrl: '/img/svg/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
  });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '/img/svg/pin-default.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30]
  });

  const handleMarkerClick = (id: string) => {
    dispatch(setActiveLocationId(id));
    const activeLocationAdress = bookingInfo?.find((locationToFind) => locationToFind.id === id)?.location.address;
    if(activeLocationAdress) {
      dispatch(setActiveLocationAdress(activeLocationAdress));
    }
  };


  useEffect(() => {
    let isMounted = true;
    if(bookingInfo && isMounted) {
      const firstActiveLocationId = bookingInfo[0].id;
      const firstActiveLocationAdress = bookingInfo[0].location.address;
      dispatch(setActiveLocationId(firstActiveLocationId));
      dispatch(setActiveLocationAdress(firstActiveLocationAdress));
    }

    return (() => {
      dispatch(setActiveLocationId(null));
      dispatch(setActiveLocationAdress(null));
      isMounted = false;
    });

  }, [bookingInfo]);

  useEffect(() => {
    let isMounted = true;
    if(map && isMounted) {
      if (isBookingPage && bookingInfo) {
        markersRef.current.forEach((marker) => marker.remove());
        bookingInfo.forEach((location) => {
          const marker = leaflet.marker({
            lat: location.location.coords[0],
            lng: location.location.coords[1]
          }, {
            icon: (location.id !== activeLocationId)
              ? defaultCustomIcon
              : currentCustomIcon
          })
            .addTo(map);
          marker.on('click', () => handleMarkerClick(location.id));
          markersRef.current.push(marker);
        });
      } else {
        const marker = leaflet.marker({
          lat: coordinates.lat,
          lng: coordinates.lng
        }, {
          icon: currentCustomIcon,
        })
          .addTo(map);
        markersRef.current.push(marker);
      }
    }

    return (() => {
      isMounted = false;
    });

  }, [map, activeLocationId, bookingInfo]);

  return <div style={{height: mapSize}} ref={mapRef}></div>;
}

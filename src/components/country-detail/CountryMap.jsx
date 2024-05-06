import { useEffect } from 'react'
import { Marker,Popup,useMap} from 'react-leaflet'
import React from 'react'

function CountryMap({lat,lng,capital}) {

    const map = useMap ();

    useEffect(()=>{
        map.setView([lat,lng]);
    },[lat,lng]);

  return (
    <Marker position={[lat, lng]}>
    <Popup>
      {capital.join(',')}
    </Popup>
  </Marker>
  )
}

export default CountryMap

import "leaflet/dist/leaflet.css";
import React from 'react'
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet'
import CountryMap from "./CountryMap";

function CountryDetail({selectedCountry}) {
  const [lat, lng] = selectedCountry?.latlng || [];
  console.log([lat,lng])
  return (
    <section className='detail'>
    <>
      <>
        <div className='detail__text'>
          <div className='detail__text--info'>
            <h1>{selectedCountry?.name.common || ''}</h1>
            <p>
              <span className='detail__text--name'>Region : </span>
              {selectedCountry?.region}
            </p>
            <p>
              <span className='detail__text--name'> Population : </span>
              {new Intl.NumberFormat().format(selectedCountry?.population)}
            </p>
            <p>
              <span className='detail__text--name'> Capital : </span>
              {selectedCountry?.capital.join(',')}
            </p>
            <p>
              <span className='detail__text--name'> Languages : </span>
              {selectedCountry?.languages ?
              Object.values(selectedCountry.languages).join(', ') : ''}
            </p>
            <p>
              <span className='detail__text--name'> Borders : </span>
              {selectedCountry?.borders.join(', ')}
            </p>
            <p>
              <span className='detail__text--name'> Currencies : </span>
              {selectedCountry?.currencies && Object.values(selectedCountry.currencies)
              .map((obj)=> obj.name)
              .join(', ')
              }
            </p>
          </div>

          <form className='detail__form'>
            <label>Add Bucket List</label>
            <input />
            <button>Add </button>
          </form>
        </div>
        <div className='detail__map'>
          {selectedCountry?.latlng && (
              <MapContainer 
              className="detail__map--container"
              center={[lat, lng]} 
              zoom={8} 
              scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <CountryMap lat={lat} lng={lng} capital={selectedCountry.capital}/>
              </MapContainer>
          )
              
          }
   
        </div>
      </>
    </>
  </section>
  )
}

export default CountryDetail

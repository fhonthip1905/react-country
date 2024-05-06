import React from 'react'

function CountryItem({country,setSelectedCountry}) {
    const handleClickCountry  = () => {
        // console.log('clicked',country.name.common)
        setSelectedCountry(country);
    }
  return (
    <div className='country__item' onClick={handleClickCountry}>
    <div className='country__image--container'>
      <img 
      className='country__image '
      src={country.flags.png}
      alt={country.flags.alt} />
    </div>
    <div className='country__detail'>
      <h6>{country.name.common}</h6>
    </div>
    </div>
  )
}

export default CountryItem

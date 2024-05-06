/* eslint-disable react/prop-types */

import './App.scss';
import BucketList from './components/bucket-list/BucketList';
import CountryDetail from './components/country-detail/CountryDetail';
import CounrtList from './components/country-list/CounrtList';
import { useState } from 'react';

function App() {
  const [allCountries,setAllCountries] = useState([]); 
  // Schema Country  : {name: Name,flags: Flags}
  const [selectedCountry,setSelectedCountry] = useState (null); 

  // fetch เสร็จให้เอาประเทศแรกเป็น selectedCountry 

  return (
    <div className='app'>
     <CounrtList 
     allCountries={allCountries} 
     setAllCountries ={setAllCountries}
     setSelectedCountry = {setSelectedCountry}
     />
     <CountryDetail 
     selectedCountry={selectedCountry}/>
     <BucketList/>
    </div>
  );
}

export default App;

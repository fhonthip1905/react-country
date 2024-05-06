/* eslint-disable react/prop-types */

import './App.scss';
import BucketList from './components/bucket-list/BucketList';
import CountryDetail from './components/country-detail/CountryDetail';
import CounrtList from './components/country-list/CounrtList';
import { useState } from 'react';

function App() {
  const [allCountries,setAllCountries] = useState([]); 

  return (
    <div className='app'>
     <CounrtList allCountries={allCountries} setAllCountries = {setAllCountries}/>
     <CountryDetail/>
     <BucketList/>
    </div>
  );
}

export default App;

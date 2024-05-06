/* eslint-disable react/prop-types */

import './App.scss';
import BucketList from './components/bucket-list/BucketList';
import CountryDetail from './components/country-detail/CountryDetail';
import CounrtList from './components/country-list/CounrtList';

function App() {
  return (
    <div className='app'>
     <CounrtList/>
     <CountryDetail/>
     <BucketList/>
    </div>
  );
}

export default App;

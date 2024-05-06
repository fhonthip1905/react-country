import React, { useEffect } from 'react'
import { useState } from 'react'
import axios, { all } from 'axios';
import CountryItem from './CountryItem';

function CounrtList() {
    const [allCountries,setAllCountries] = useState([]);   //#1 Run   , #8th

     //#4  make auto Execute in Frist Render 
     //useEffect เป็นตัวกำหนดการ Render (first render, Every render)
     useEffect(()=>{
        fetchAllCountries();

        return () => {
            // #11 : Clean up 
        };
    },[]);

    const fetchAllCountries = async () => {   //#2 Declare , #9th
        try{
            //#5
            const response = await axios.get('https://restcountries.com/v3.1/all');
            // #6
            const data =  response.data.map((country) => {
                let obj = {};
                obj.name = country.name;
                obj.flags = country.flags;
                return obj;
            });
            // # 7 triggle Rerender
            setAllCountries(data);  
        }catch(error){
            console.log(error);
        }
    }
   
//#3  ,#10
   return (
    <main className='main'>
    <header className='header'>
      <h1 className='header__text'>Find Your Destination</h1>
    </header>
    <div className='search'>
      <input 
      className='search__input' 
 
      />
      <button className='search__btn'>search</button>
    </div>
    <div className='country'>
      {allCountries.length > 0 && allCountries.map((country)=> (
       <CountryItem  country={country}/>
      )) }
    </div>
  </main>
  )
}

export default CounrtList

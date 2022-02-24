// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';
//import Countries from './countries.json';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Get the country from API
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          //line below is used when it is cirectly from json file
          // element={ <CountriesList countries={Countries} /> }
          element={<CountriesList countries={countries} />}
        />

        <Route
          path="/:countryId"
          //line below is used when it is cirectly from json file
          // element={ <CountryDetails countries={Countries}/> }
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;

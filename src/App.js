import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //const [countries, setCountries] = useState(countriesData);
  const [countries, setCountries] = useState([]);
  const api = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setCountries(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countryList={countries} />
      <Routes>
        {/* <Route path="/" element={<CountriesList countryList={countries} />} /> */}
        <Route
          path="/:id"
          element={<CountryDetails countryDetails={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;

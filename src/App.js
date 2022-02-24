import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countryList={countries} />} />
        <Route
          path="/countries/:id"
          element={<CountryDetails countryDetails={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;

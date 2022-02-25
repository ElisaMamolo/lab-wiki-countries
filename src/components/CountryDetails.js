import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'; // <== IMPORT
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails({ countryDetails }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(countryDetails);
    let selectedCountry = countryDetails.find((item) => item.alpha3Code === id);
    setFoundCountry(selectedCountry);
    console.log(selectedCountry);
  }, [id]);

  if (!foundCountry) {
    return <p className="col-7"> Loading... </p>;
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((item) => {
                  return (
                    <li key={Math.random()}>
                      <Link to={'/'}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

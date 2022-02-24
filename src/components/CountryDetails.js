import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'; // <== IMPORT
import { useState, useEffect } from 'react';

function CountryDetails({ countryDetails }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const country = countryDetails.find((countryItem) => {
      //console.log(countryItem.alpha3Code);
      return countryItem.alpha3Code === id;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [id]);

  return (
    <div className="col-7">
      {/* <h1>{foundCountry.name}</h1> */}
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            {/* <td>{foundCountry.capital}</td> */}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {/* {foundCountry.area} km */}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* {countryDetails.borders.map((item) => {
                  return (
                    <li key={Math.random()}>
                      <Link to={'/'}>{item}</Link>
                    </li>
                  );
                })} */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

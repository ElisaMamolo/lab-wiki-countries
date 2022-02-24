import { Link, NavLink } from 'react-router-dom'; // <== IMPORT

function CountriesList({ countryList }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countryList.map((item) => {
              return (
                <div key={Math.random()}>
                  <Link to={`/countries/${item.alpha3Code}`}>
                    <p>{item.name.common}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

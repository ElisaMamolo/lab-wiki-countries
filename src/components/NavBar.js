import { Link, NavLink } from 'react-router-dom'; // <== IMPORT

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            WikiCountries{' '}
          </Link>
        </div>
      </nav>
      <h2>LAB - WikiCountries</h2>
    </div>
  );
}

export default Navbar;

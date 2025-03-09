import { NavLink, Link } from "react-router";
export default function Header() {

  return (
    <header>
      <nav className="mainNav">
        <div className="logo">
          <NavLink to="/" className={() => ""}>
            #VANLIFE
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/host">Host</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/vans">Vans</NavLink>
          </li>
          <li>
            <Link to="login" className="login-link">
              <img src="/assets/images/Icon.svg" className="login-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router";
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
        </ul>
      </nav>
    </header>
  );
}

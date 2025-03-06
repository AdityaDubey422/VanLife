import { NavLink } from "react-router";
import { Outlet } from "react-router";
export default function HostLayout() {
  return (
    <>
      <main>
        <nav className="hostNavigation">
          <ul>
            <li>
              <NavLink to="." end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="income">Income</NavLink>
            </li>
            <li>
            <NavLink to="vans">Vans</NavLink>
          </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </>
  );
}

import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="notFoundMain">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/">Return to home</Link>
    </main>
  );
}

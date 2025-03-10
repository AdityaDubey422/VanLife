import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <main className="homeMain">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">Find your van</Link>
      </main>
    </>
  );
}

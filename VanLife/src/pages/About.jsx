import {Link} from "react-router"
export default function About() {
  return (
      <main className="aboutMain">
        <img
          src="/assets/images/about-hero.png"
          alt=""
        />
        <div className="aboutMainContent">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <div className="para">
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="cta">
            <h3>Your destination is waiting.
            Your van is ready.</h3>
            <Link to="/vans">Explore our vans</Link>
          </div>
        </div>
      </main>
  );
}

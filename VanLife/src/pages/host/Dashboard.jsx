import React from "react";
import { Link } from "react-router";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../../api";

export default function Dashboard() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
        <div className="hostVans" key={van.id}>
          <img
            src={van.imageUrl}
            alt={`image of ${van.name}`}
            className="hostVansImage"
          />
          <div className="hostVansDetail">
            <div className="hostVansName">{van.name}</div>
            <div className="hostVansPrice">{`$${van.price}/day`}</div>
          </div>
          <Link to={`/host/vans/${van.id}`} className="viewVan">View</Link>
        </div>
    ));

    return <div className="hostVansContainer">{hostVansEls}</div>;
  }

  // if (loading) {
  //     return <h1>Loading...</h1>
  // }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
      </section>
    </>
  );
}

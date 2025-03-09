import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router";
import { getVans } from "../../../api";
export default function Vans() {
  console.log("vans componet rendered");
  const [vansDetail, setVansDetail] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let typeFilter = searchParams.get("type");
  // console.log(typeFilter);
  useEffect(() => {
    console.log("useEffect ran");
    async function loadVans() {
      try {
        setLoading(true);
        const data = await getVans();
        setVansDetail(data);
        console.log("Fetched vans:", data); // Log fetched data
      } catch (err) {
        console.error("Fetch error:", err); // Debugging
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (error) {
    console.log("Rendering error:", error); // Debugging
    return <h1 aria-live="assertive">There was an error: {error.message || "Something went wrong."}</h1>;
  }

  const vanComponent = loading ? (
    <p aria-live="polite">Loading vans...</p>
  ) : (
    (vansDetail || [])
      .filter((vanData) => {
        return typeFilter ? vanData.type === typeFilter : true;
      })
      .map((vanData) => (
        <Link
          to={`${vanData.id}`}
          key={vanData.id}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
          <div className="van">
            <img
              src={vanData.imageUrl}
              alt={`${vanData.name} image`}
              className="vanImage"
            />
            <div className="vanOverview">
              <p className="vanName">{vanData.name}</p>
              <div className="vanPrice">
                <p>{`$${vanData.price}`}</p>
                <p>/day</p>
              </div>
            </div>
            <p className={`vanType ${vanData.type}`}>
              {vanData.type[0].toUpperCase() + vanData.type.slice(1)}
            </p>
          </div>
        </Link>
      ))
  );
  return (
    <>
      <main className="vansMain">
        <h2>Explore our van options</h2>
        <div className="vansFilterContainer">
          <div className="vansFilter">
            <button
              onClick={() => setSearchParams({ type: "simple" })}
              className={`simpleFilter ${
                typeFilter === "simple" ? "selected" : ""
              }`}
            >
              Simple
            </button>
            <button
              onClick={() => setSearchParams({ type: "luxury" })}
              className={`luxuryFilter ${
                typeFilter === "luxury" ? "selected" : ""
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setSearchParams({ type: "rugged" })}
              className={`ruggedFilter ${
                typeFilter === "rugged" ? "selected" : ""
              }`}
            >
              Rugged
            </button>
          </div>
          {typeFilter !== null && (
            <button className="clearFilter" onClick={() => setSearchParams({})}>
              Clear filters
            </button>
          )}
        </div>
        <section className="vansContainer">{vanComponent}</section>
      </main>
    </>
  );
}

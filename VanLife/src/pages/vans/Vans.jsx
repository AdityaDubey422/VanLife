import { useEffect, useState } from "react";
import { Link } from "react-router";
export default function Vans() {
  const [vansDetail, setVansDetail] = useState(null);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansDetail(data.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const vanComponent = !vansDetail ? (
    <p>Loading vans...</p>
  ) : (
    vansDetail.map((vanData) => {
      let vanTypeBackgroundColor;
      if (vanData.type === "simple") {
        vanTypeBackgroundColor = "#E17654";
      } else if (vanData.type === "luxury") {
        vanTypeBackgroundColor = "#161616";
      } else if (vanData.type === "rugged") {
        vanTypeBackgroundColor = "#115E59";
      }
      return (
          <Link to={`/vans/${vanData.id}`} key={vanData.id}>
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
              <p
                className="vanType"
                style={{
                  backgroundColor: vanTypeBackgroundColor,
                }}
              >
                {vanData.type[0].toUpperCase() + vanData.type.slice(1)}
              </p>
            </div>
          </Link>
      );
    })
  );
  return (
    <>
      <main className="vansMain">
        <h2>Explore our van options</h2>
        <div className="vansFilterContainer">
          <div className="vansFilter">
            <p>Simple</p>
            <p>Luxury</p>
            <p>Rugged</p>
          </div>
          <div className="clearFilter">Clear filters</div>
        </div>
        <section className="vansContainer">
          {vanComponent}
        </section>
      </main>
    </>
  );
}
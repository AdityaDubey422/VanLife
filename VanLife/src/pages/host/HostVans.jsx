import { useEffect, useState } from "react";
import { Link } from "react-router";
export default function HostVans() {
  const [hostVansDetail, setHostVansDetail] = useState(null);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVansDetail(data.vans))
      .catch((error) => console.log(error));
  }, []);
  const hostVansComponent = !hostVansDetail ? (
    <p>Loading...</p>
  ) : (
    hostVansDetail.map((hostVan) => (
      <Link to={`/host/vans/${hostVan.id}`} key={hostVan.id}>
        <div className="hostVans">
          <img
            src={hostVan.imageUrl}
            alt={`image of ${hostVan.name}`}
            className="hostVansImage"
          />
          <div className="hostVansDetail">
            <div className="hostVansName">{hostVan.name}</div>
            <div className="hostVansPrice">{`$${hostVan.price}/day`}</div>
          </div>
        </div>
      </Link>
    ))
  );
  return (
    <>
      <div className="hostVansMain">
        <h2>Your listed vans</h2>
        <div className="hostVansContainer">{hostVansComponent}</div>
      </div>
    </>
  );
}

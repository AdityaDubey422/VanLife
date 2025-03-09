import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router";
export default function VanDetail() {
  const [vanDetail, setVanDetail] = useState(null);
  const params = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  console.log(location);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <main className="van-detail-main">
      <Link to={`..${search}`} relative="path">
        <span className="back-link">
          <img src="/assets/images/arrow.svg" alt="" />
          Back to {location.state?.type || "all"} vans
        </span>
      </Link>
      <div className="van-detail-container">
        {vanDetail ? (
          <div className="van-detail">
            <img src={vanDetail.imageUrl} />
            <p className={`vanType ${vanDetail.type}`}>
              {vanDetail.type[0].toUpperCase() + vanDetail.type.slice(1)}
            </p>
            <h2>{vanDetail.name}</h2>
            <p className="van-price">
              <span>${vanDetail.price}</span>/day
            </p>
            <p className="van-description">{vanDetail.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}

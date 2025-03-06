import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
export default function VanDetail() {
  const [vanDetail, setVanDetail] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans))
      .catch((error) => console.log(error));
  }, [params.id]);
  let vanTypeBackgroundColor;
  if(vanDetail) {
    if (vanDetail.type === "simple") {
        vanTypeBackgroundColor = "#E17654";
      } else if (vanDetail.type === "luxury") {
        vanTypeBackgroundColor = "#161616";
      } else if (vanDetail.type === "rugged") {
        vanTypeBackgroundColor = "#115E59";
      }
  }
 
  return (
    <main className="van-detail-main">
        <Link to="/vans"><span className="back-link"><img src="../public/assets/images/arrow.svg" alt="" />Back to all vans</span></Link>
      <div className="van-detail-container">
        {vanDetail ? (
          <div className="van-detail">
            <img src={vanDetail.imageUrl} />
            <p
                className="vanType"
                style={{
                  backgroundColor: vanTypeBackgroundColor,
                }}
              >
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

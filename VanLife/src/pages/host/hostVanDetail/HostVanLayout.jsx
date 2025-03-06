import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router";
export default function HostVanLayout() {
  const [hostVanDetail, setHostVanDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetail(data.vans[0]))
      .catch((error) => console.log(error));
  }, [id]);
  let vanTypeBackgroundColor;
  if (hostVanDetail) {
    if (hostVanDetail.type === "simple") {
      vanTypeBackgroundColor = "#E17654";
    } else if (hostVanDetail.type === "luxury") {
      vanTypeBackgroundColor = "#161616";
    } else if (hostVanDetail.type === "rugged") {
      vanTypeBackgroundColor = "#115E59";
    }
  }
  return !hostVanDetail ? (
    <p>Loading...</p>
  ) : (
    <div className="hostVanLayoutMain">
      <NavLink to=".." relative="path">
        <span className="back-link">
          <img src="/public/assets/images/arrow.svg" alt="" />
          Back to all vans
        </span>
      </NavLink>
      <div className="hostVanDetailContainer">
        <div className="hostVanDetail">
          <img src={hostVanDetail.imageUrl} alt="" className="hostVanImage" />
          <div className="hostVanRight">
            <p
              className="vanType hostVanType"
              style={{
                backgroundColor: vanTypeBackgroundColor,
              }}
            >
              {hostVanDetail.type[0].toUpperCase() +
                hostVanDetail.type.slice(1)}
            </p>
            <p className="hostVanName">{hostVanDetail.name}</p>
            <p className="hostVanPrice">
              ${hostVanDetail.price}
              <span className="perDay">/day</span>
            </p>
          </div>
        </div>
        <nav className="hostVanFeatures">
          <ul>
            <li>
              <NavLink to="." end>Details</NavLink>
            </li>
            <li>
              <NavLink to="pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="photos">Photos</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet context={hostVanDetail} />
      </div>
    </div>
  );
}

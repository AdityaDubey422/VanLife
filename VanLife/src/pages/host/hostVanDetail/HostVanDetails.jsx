import { useOutletContext } from "react-router";
export default function HostVanDetails() {
  const hostVanDetail = useOutletContext();
  return (
    <div className="hostVanDescription">
      <p>
        Name: <span>{hostVanDetail.name}</span>
      </p>
      <p>
        Category: <span>{hostVanDetail.type}</span>
      </p>
      <p>
        Description: <span>{hostVanDetail.description}</span>
      </p>
      <p>
        Visibility: <span>Public</span>
      </p>
    </div>
  );
}

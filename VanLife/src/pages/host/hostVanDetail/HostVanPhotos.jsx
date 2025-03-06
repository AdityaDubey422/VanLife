import { useOutletContext } from "react-router";
export default function HostVanPhotos() {
  const hostVanDetail = useOutletContext();
  return (
    <img
      src={hostVanDetail.imageUrl}
      alt=""
      style={{
        width: "102px",
        height: "102px",
        borderRadius: "5px"
      }}
    />
  );
}

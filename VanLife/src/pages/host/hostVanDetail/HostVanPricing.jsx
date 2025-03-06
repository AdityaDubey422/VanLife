import { useOutletContext } from "react-router";
export default function HostVanPricing() {
  const hostVanDetail = useOutletContext();
  return (
    <p className="van-price">
      <span>${hostVanDetail.price}</span>/day
    </p>
  );
}

import { Link } from "react-router";
export default function Vans() {
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
            </main>
        </>
    );
}

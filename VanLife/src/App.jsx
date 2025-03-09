import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanLayout from "./pages/host/hostVanDetail/HostVanLayout";
import HostLayout from "./pages/host/HostLayout";
import HostVanDetails from "./pages/host/hostVanDetail/HostVanDetails";
import HostVanPricing from "./pages/host/hostVanDetail/HostVanPricing";
import HostVanPhotos from "./pages/host/hostVanDetail/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthRequired from "./components/AuthRequired";
import "../server";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<VanDetail />}></Route>
          <Route path="login" element={<Login />}></Route>


          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="income" element={<Income />}></Route>
              <Route path="vans" element={<HostVans />}></Route>
              <Route path="vans/:id" element={<HostVanLayout />}>
                <Route index element={<HostVanDetails />}></Route>
                <Route path="pricing" element={<HostVanPricing />}></Route>
                <Route path="photos" element={<HostVanPhotos />}></Route>
              </Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>


          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

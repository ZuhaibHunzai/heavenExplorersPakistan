import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/Contact";
import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import HeaderCon from "../Components/HeaderConditional";
import SpecialOffersPage from "../Pages/SpecialOffersPage";
import ExpeditionsPage from "../Pages/ExpeditionPage";
import JeepSafariPage from "../Pages/JeepSafariPage";
import TrekkingPage from "../Pages/TrekkingPage";
import HikingPage from "../Pages/HikingPage";
import AirlinePage from "../Pages/AirlinePage";
import HotelBookingPage from "../Pages/HotelBookingPage";
import TourGuidePage from "../Pages/TourGuidePage";
import RentaCarPage from "../Pages/RentACarPage";

const Routers = () => {
  return (
    <>
      <Router>
        <HeaderCon />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/offers" element={<SpecialOffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/services/expedition-services"
            element={<ExpeditionsPage />}
          />
          <Route
            path="/services/jeep-safari-services"
            element={<JeepSafariPage />}
          />
          <Route
            path="/services/trekking-services"
            element={<TrekkingPage />}
          />
          <Route path="/services/hiking-services" element={<HikingPage />} />
          <Route path="/services/airline-services" element={<AirlinePage />} />
          <Route
            path="/services/hotel-booking-services"
            element={<HotelBookingPage />}
          />
          <Route
            path="/services/tour-guide-services"
            element={<TourGuidePage />}
          />
          <Route
            path="/services/rent-a-car-services"
            element={<RentaCarPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;

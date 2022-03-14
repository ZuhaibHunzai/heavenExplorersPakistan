import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/Contact";
import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import TeamPage from "../Pages/Team";
import HeaderCon from "../Components/HeaderConditional";
import LegalCasesPage from "../Pages/LegalCases";
import FormRegPage from "../Pages/FormRegistration";
import CompanyRegPage from "../Pages/CompanyRegistration";
import NtnGstRegPage from "../Pages/NtnGstRegistration";
import TradeMarkPage from "../Pages/TradeMarkRegistration";
import IncomeSalesPage from "../Pages/IncomeSaleTaxReturns";
import NgoSocietyTrustRegPage from "../Pages/NgoSocietyTrustRegistration";
import ChamberPage from "../Pages/ChamberOfCommerceRegistration";

import UpdatesPage from "../Pages/Updates";
import GeneralServicesPage from "../Pages/GeneralServices";

const Routers = () => {
  return (
    <>
      <Router>
        <HeaderCon />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-updates" element={<UpdatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal-cases-matters" element={<LegalCasesPage />} />
          <Route path="/company-registration" element={<CompanyRegPage />} />
          <Route path="/form-registration" element={<FormRegPage />} />
          <Route path="/ntn-gst-registration" element={<NtnGstRegPage />} />
          <Route path="/trade-mark-registration" element={<TradeMarkPage />} />
          <Route path="general-services" element={<GeneralServicesPage />} />
          <Route
            path="/income-sales-tax-returns"
            element={<IncomeSalesPage />}
          />
          <Route
            path="/ngo-society-trust-registration"
            element={<NgoSocietyTrustRegPage />}
          />
          <Route
            path="/chamber-of-commerce-registration"
            element={<ChamberPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Routers;

import Counts from "../../Components/Counts";
import Hero from "../../Components/Hero";
import Services from "../../Components/ServicesComp";
import Location from "../../Components/Location";
import SpecialOffers from "../../Components/SpecialOffers";

const HomePage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <>
      <Hero />
      <Services />
      <SpecialOffers />
      <Counts />
      <Location />
    </>
  );
};
export default HomePage;

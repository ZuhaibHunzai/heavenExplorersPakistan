import Gallary from "../../Components/Carousal";
import SpecialOffersPage from "../SpecialOffersPage";

const GallaryPage = () => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  return (
    <>
      <Gallary />
      <SpecialOffersPage />
    </>
  );
};

export default GallaryPage;

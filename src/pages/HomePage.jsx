import BannerCarousel from "../components/BannerCarousel";
import CustomerCarousel from "../components/CustomerCarousel";
import SecondSection from "../components/SecondSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import { bannerCarouselData, customerBannerData } from "../data";

const HomePage = () => {
  return (
    <>
      <BannerCarousel slides={bannerCarouselData} />
      <SecondSection />
      <CustomerCarousel slides={customerBannerData} />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;

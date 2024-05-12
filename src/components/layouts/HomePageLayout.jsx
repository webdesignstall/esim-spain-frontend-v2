import Image from "next/image";
import Banner from "../home/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import bgImage from "../../assets/bannerImage1.jpg";

const HomePageLayout = ({ children }) => {
  return (
    <div>
      <div style={{ position: "relative", height: "800px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <Navbar />
          <Banner />
        </div>
        <img
          src={"https://i.ibb.co/pzrKSpJ/banner-Image4.jpg"}
          alt="background image"
          objectFit="cover"
          style={{ width: "100%", height: "600px" }}
        />
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;

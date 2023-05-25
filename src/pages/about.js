import AboutJesper from "../../components/AboutJesper";
import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Gdpr from "../../components/Gdpr";
import HeroAbout from "../../components/HeroAbout";
import OurPartners from "../../components/OurPartners";

export default function About() {
  return (
    <>
      <HeroAbout className="col-12"></HeroAbout>
      <AboutUs className="col-12"></AboutUs>
      <OurPartners className="col-12"></OurPartners>
      <AboutJesper className="col-12"></AboutJesper>
      <Gdpr className="col-12"></Gdpr>
      <ContactUs className="col-12"></ContactUs>
    </>
  );
}

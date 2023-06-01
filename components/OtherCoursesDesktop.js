import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Video from "./Video";
import Link from "next/link";
import Card from "./Card";
import VideoOne from "./VideoOne";
import VideoTwo from "./VideoTwo";
import VideoThree from "./VideoThree";

export default function OtherCoursesDesktop() {
  return (
    <>
      <div id="other-courses-desktop" className="grid-center">
        {/* <div id="quotes" className=""> */}
        <AwesomeSlider className="col-12">
          <div className="other-courses-container">
            {/* <Card></Card> */}
            <VideoOne></VideoOne>
            <VideoTwo></VideoTwo>
            <VideoThree></VideoThree>
          </div>
        </AwesomeSlider>
        {/* </div> */}
      </div>
    </>
  );
}

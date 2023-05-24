import Link from "next/link";
import Video from "../../../components/Video";
import OtherCourses from "../../../components/OtherCourses";
import OtherCoursesDesktop from "../../../components/OtherCoursesDesktop";
import OurCoursesTitle from "../../../components/OurCoursesTitle";

export default function Courses() {
  return (
    <>
      {/* <div id="courses" className="grid"> */}

      <Video className="col-12"></Video>
      <OurCoursesTitle className="col-12"></OurCoursesTitle>
      <OtherCourses className="col-12"></OtherCourses>
      <OtherCoursesDesktop className="col-12"></OtherCoursesDesktop>
      {/* </div> */}
    </>
  );
}

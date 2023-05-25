import CourseVideoOpen from "../../../components/CourseVideoOpen";
import OtherCourses from "../../../components/OtherCourses";
import OtherCoursesDesktop from "../../../components/OtherCoursesDesktop";
import OtherCoursesTitle from "../../../components/OtherCoursesTitle";

export default function Course() {
  return (
    <>
      <CourseVideoOpen className="col-12"></CourseVideoOpen>
      <OtherCoursesTitle className="col-12"></OtherCoursesTitle>
      <OtherCourses className="col-12"></OtherCourses>
      <OtherCoursesDesktop className="col-12"></OtherCoursesDesktop>
    </>
  );
}

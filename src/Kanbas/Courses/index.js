import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";
import {MdKeyboardArrowRight} from "react-icons/md";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules/index.js";
import Home from "./Home/index.js";
import Assignments from "./Assignments/index.js";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({}) {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

   useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  // const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const subPage = pathname.split("/").pop().replace("%20", " ");
  return (
    <div>
        <div class="row m-2">
            <div class="col d-flex align-items-stretch p-2 flex-wrap">
                <RxHamburgerMenu class="wd-color-red p-0 align-self-center me-2"/>
                <nav aria-label="breadcrumb d-flex align-items-center" >
                    <ol class="breadcrumb m-0 d-flex align-items-center">
                        <li class="breadcrumb-item wd-color-red">{course.name}</li>
                        <MdKeyboardArrowRight/>
                        <li class="breadcrumb-item">{subPage}</li>
                    
                    </ol>
                </nav>
                <hr class="my-3 w-100"/>
            </div>
        </div>

        <CourseNavigation />
      <div>
        <div
          className=" position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;
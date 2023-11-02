import KanbasNavigation from "./KanbasNavigation";
import KanbasNavigationSmall from "./KanbasNavigationSmall";
import './Styles/KanbasNavigation.css'
import './Styles/GlobalStyles.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
        <KanbasNavigation/>
      <div class="w-100">
        {/* <div class="d-lg-none d-xl-none d-md-block w-100">
          <KanbasNavigationSmall class="w-100"/>
        </div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1 class="wd-title-large m-3">Account</h1>} />
          <Route path="Dashboard" element={
             <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses" element={<Navigate to="../Dashboard" />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          <Route path="Calendar" element={<Navigate to="../Dashboard" />} />
          <Route path="Inbox" element={<Navigate to="../Dashboard" />} />
          <Route path="History" element={<Navigate to="../Dashboard" />} />
          <Route path="Studio" element={<Navigate to="../Dashboard" />} />
          <Route path="Commons" element={<Navigate to="../Dashboard" />} />
          <Route path="Help" element={<Navigate to="../Dashboard" />} />
        </Routes>

      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
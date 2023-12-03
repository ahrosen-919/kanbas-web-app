import KanbasNavigation from "./KanbasNavigation";
import KanbasNavigationSmall from "./KanbasNavigationSmall";
import './Styles/KanbasNavigation.css'
import './Styles/GlobalStyles.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]);
  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_BASE_API_URL;
  const URL = `${API_BASE}/api/courses`;
const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    // setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    console.log(course);
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([ ...courses,
      response.data
    ]);
    // setCourse({ name: "" });
  };

//   const findAllCourses = async () => {
//     const response = await axios.get(URL);
//     setCourses(response.data);
//   };
//   useEffect(() => {
//     findAllCourses();
//   }, []);

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } 
  //       else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  //  const updateCourse = async (course) => {
  //     const response = await axios.put(
  //       `${URL}/${course._id}`,
  //       course
  //     );
  //     setCourses(
  //       courses.map((c) => {
  //         if (c._id === course._id) {
  //           return course;
  //         } else {
  //           return c;
  //         }
  //       })
  //     );
  //     // setCourse({ name: "" });
  //   };


  return (
    <Provider store={store}>
    <div className="d-flex">
        <KanbasNavigation/>
      <div className="w-100">
        <div className="d-lg-none d-xl-none d-md-block w-100">
          <KanbasNavigationSmall className="w-100"/>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
           <Route path="/users" element={<UserTable />} />
           <Route path="/signin" element={<Signin />} />
           <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="Dashboard" element={
             <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addCourse}
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
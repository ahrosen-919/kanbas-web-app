import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "../Styles/DashboardStyles.css";
import "../Styles/GlobalStyles.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
    
  return (
    <div class="container-fluid p-4">
        <div class="row">
            <div class="col col-12">
                <h1 class="wd-title-large">Dashboard</h1>
                <hr/>
                <h3 class="wd-subheading ms-4">Published Courses ({courses.length})</h3>

                <hr class="ms-4"/>
                
                <div className="ms-4">
                    
                    <h5 className = "wd-subheading">Course</h5>
                    <input value={course.name} className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                    <input value={course.startDate} className="form-control mb-2" type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                    <input value={course.endDate} className="form-control mb-2" type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

                </div>
                
                <div className="mt-3">
                    <button className = "btn btn-light ms-4" onClick={addNewCourse}>+ Add Course</button>
                    <button className = "btn btn-light ms-2" onClick={() => updateCourse(course)} >Update</button>
                </div>
                <hr class="ms-4"/>
            </div>
        </div>

        <div class="row">
            <div class="col col-12">
                <div className="list-group cards flex-row d-flex flex-wrap">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item p-0 card shadow rounded">
                            <div class="wd-card-box rounded-top"></div>
                            <div class="card-body">
                                <h5>{course.name}</h5>
                                <p>{course.number}</p>
                                <p>{course.startDate} - {course.endDate}</p>
                                <div >
                                    {/* <button className = "btn btn-danger" onClick={() =>  dispatch(deleteTodo(todo.id))}> Delete </button> */}
                                    <button className = "btn btn-light mt-2" onClick={(event) => {event.preventDefault(); setCourse(course);}}>Edit</button>

                                    <button className = "btn btn-danger ms-2 mt-2" onClick={(event) => { event.preventDefault(); deleteCourse(course); }}>Delete</button>

                                </div>
                            </div>
                            
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
export default Dashboard;
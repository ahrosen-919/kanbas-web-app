import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {FaEllipsisVertical} from "react-icons/fa6";
import "../../Styles/ModuleStyles.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="me-4 d-flex flex-wrap">
      <h2>Assignments for {courseId}</h2>

       <div class="w-100 align-middle">
        <button type="button" class="btn btn-secondary btn-sm shadow-sm float-end"><FaEllipsisVertical/></button>
        <button type="button" class="btn btn-danger btn-sm shadow-sm float-end me-1"><AiOutlinePlus/> Assignment</button>
        <button type="button" class="btn btn-secondary btn-sm shadow-sm float-end me-1"><AiOutlinePlus/> Group</button>
      </div>
      <ul className="list-group px-0 border wd-module w-100">
          {courseAssignments.map((assignment) => (
            <Link key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} class = "text-decoration-none"><li
            className="list-group-item px-0 border-bottom pb-0 pt-2 rounded-0 wd-border-green d-flex flex-wrap 
                                        align-items-center justify-items-space-between w-100 text-decoration-none">

              <PiDotsSixVerticalBold class="p-0 m-0 ms-2r"/>
              <div class="flex-fill flex-wrap">
                    <span class="wd-module-subhead text-decoration-none">{assignment.title}</span>
              </div>
              <div class="float-end me-2">
                    <FaEllipsisVertical/><AiOutlineCheckCircle class="wd-color-green"/>
              </div>
            </li></Link>
          ))}
      </ul>
    </div>
  );
}
export default Assignments;
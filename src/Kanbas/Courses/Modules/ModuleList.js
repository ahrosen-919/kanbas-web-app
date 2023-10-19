import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {FaEllipsisVertical} from "react-icons/fa6";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group px-0 border wd-module">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item px-0 border-bottom pb-0 pt-2 rounded-0 wd-border-green d-flex flex-wrap 
                                        align-items-center justify-items-space-between w-100">
                <PiDotsSixVerticalBold class="p-0 m-0 ms-2r"/>
                
                <div class="flex-fill flex-wrap">
                    <span class="wd-module-subhead">{module.name}</span>
                    <p class="ps-4">{module.description}</p>
                </div>
                <div class="float-end me-2">
                    <FaEllipsisVertical/><AiOutlineCheckCircle class="wd-color-green"/>
                </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;
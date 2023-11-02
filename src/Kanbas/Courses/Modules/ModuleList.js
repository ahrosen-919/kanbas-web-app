import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {PiDotsSixVerticalBold} from "react-icons/pi";
import {FaEllipsisVertical} from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
                  <button className="btn btn-secondary me-1" onClick={() => dispatch(setModule(module))}>Edit</button>

                  <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>

                    <FaEllipsisVertical/><AiOutlineCheckCircle class="wd-color-green"/>
                </div>
           </li>
      ))
      }
      <li className="list-group-item px-0 border-bottom pb-0 pt-2 rounded-0 d-flex flex-wrap 
                                        align-items-center justify-items-space-between w-100">
        <div class="flex-fill flex-wrap">
          <span class="wd-module-subhead"><input value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/></span>
          <p class="mt-2 mb-2 ps-4 w-100 pe-3"><textarea className = "w-100" value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/></p>
              
        <div className="w-100 ms-3 mb-2">
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-light me-1">+ Add</button>
          <button className = "btn btn-light" onClick={() => dispatch(updateModule(module))}>Update</button>

        </div>
        </div>
        
        
        
      </li>
    </ul>
  );
}
export default ModuleList;
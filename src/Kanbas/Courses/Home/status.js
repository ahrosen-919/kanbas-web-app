import {LiaFileImportSolid} from "react-icons/lia";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {LuLocateFixed} from "react-icons/lu";
import {BsFillBarChartLineFill} from "react-icons/bs";
import {AiOutlineNotification} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";
import "../../Styles/GlobalStyles.css";

function Status() {
    const buttons = ["Import Existing Content", "Import from Commons", "Choose Home Page", "View Course Stream", "New Announcement", 
                     "New Analytics", "View Course Notifications"];
    const buttonSymbols = [<LiaFileImportSolid/>, <FaArrowAltCircleRight/>, <LuLocateFixed/>, <BsFillBarChartLineFill/>,
                           <AiOutlineNotification/>, <BsFillBarChartLineFill/>, <IoMdNotificationsOutline/>];
    return(
        <div class="d-flex flex-wrap">
            {buttons.map((button, index) => (
                <button type="button" class="btn btn-secondary w-100 rounded-0 mt-1 me-2 wd-font-size-small text-start">{buttonSymbols[index]} {button}</button>
            ))}
            <span class="fw-bold mt-3">To Do</span>
            <hr class="w-100 me-2 mt-1"/>
        </div>
    )
};

export default Status;
/**
 * 
 * <div class="d-flex flex-column float-end">
                                Course Status
                                
                                <span class="fw-bold wd-mt-15">To Do</span>
                                <hr class=" wd-color-gray wd-mt-4"/>

                                <div class="d-flex flex-row flex-nowrap w-100 mb-4">
                                    <div class="wd-bg-color-red rounded-circle text-white font-weight-bold wd-size-24 text-center">1</div>
                                    <div class="d-flex flex-column flex-grow-1 ms-2">
                                        <span class="color-red">Grade A1 - ENV + HTML</span>
                                        <span class="wd-font-10">100 points - Sep 18 at 11:59pm</span>

                                    </div>
                                    <div class="flex-shrink-1">
                                        <span class="wd-color-gray float-end"><i class="fas fa-times fa-sm"></i></span>
                                    </div>
                                </div>

                                <div>
                                    <span class="fw-bold wd-mt-15">Coming Up</span>
                                    <span class="float-end"><i class="far fa-calendar-check fa-sm"></i>
                                    <span class="color-red wd-font-10">View Calendar</span></span>
                                </div>

                                <hr class=" wd-color-gray wd-mt-4"/>

                                <div class="d-flex flex-row flex-nowrap w-100 mb-4">
                                    <div class="">
                                        <i class="far fa-calendar-check fa-sm wd-color-gray"></i>
                                    </div>
                                    <div class="d-flex flex-column flex-grow-1 ms-2">
                                        <span class="color-red">Lecture</span>
                                        <span class="wd-font-10">CS4550.12631.202410</span>
                                        <span class="wd-font-10">Sep 11 at 11:45am</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-row flex-nowrap w-100 mb-4">
                                    <div class="">
                                        <i class="far fa-calendar-check fa-sm wd-color-gray"></i>
                                    </div>
                                    <div class="d-flex flex-column flex-grow-1 ms-2">
                                        <span class="color-red">CS5610 06 SP23 Lecture</span>
                                        <span class="wd-font-10">CS4550.12631.202410</span>
                                        <span class="wd-font-10">Sep 11 at 6pm</span>
                                    </div>
                                </div>

                                <div class="d-flex flex-row flex-nowrap w-100 mb-4">
                                    <div class="">
                                        <i class="far fa-calendar-check fa-sm wd-color-gray"></i>
                                    </div>
                                    <div class="d-flex flex-column flex-grow-1 ms-2">
                                        <span class="color-red">CS5610 Web Development Summer 1 2023 - LECTURE</span>
                                        <span class="wd-font-10">CS4550.12631.202410</span>
                                        <span class="wd-font-10">Sep 11 at 7pm</span>
                                    </div>
                                </div>

                                <span class="color-red wd-font-10">12 more in the next week ...</span>

                            </div>
 */
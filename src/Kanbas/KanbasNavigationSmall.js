import { Link, useLocation } from "react-router-dom";
import {MdAccountCircle, MdMediation} from "react-icons/md";
import {TfiDashboard} from "react-icons/tfi";
import {BiBook, BiSolidInbox, BiHelpCircle} from "react-icons/bi";
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx";

function KanbasNavigationSmall() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<MdAccountCircle/>, <TfiDashboard/>, <BiBook/>, <AiOutlineCalendar/>, <BiSolidInbox/>, 
                    <AiOutlineClockCircle/>, <MdMediation/>, <FaArrowAltCircleRight/>, <BiHelpCircle/>];
  const { pathname } = useLocation();
  return (
    <div className="container w-100">
        <div className="row w-100">
            <div className="col p-0 w-100">
                <div className="container-fluid wd-bg-black m-0 d-flex align-items-center justify-content-between">
                    <button className="navbar-toggler border-0 float-start btn" type="button"
                        data-toggle="collapse" data-target="#navbarToggleExternalContent" 
                        // aria-expanded="false" aria-controls="navbarToggleExternalContent"
                        >
                        <RxHamburgerMenu/>
                    </button>

                    <div className="d-flex flex-column justify-content-center wd-mt-4 wd-mb-4">
                        {links.map((link, index) => (
                            <span className="text-center"
                            key={index}>
                            {pathname.includes(link) && links[index]}
                            </span>
                        ))}
                    </div>

                    {/* <div className="float-end">
                        <span type="button" data-bs-toggle="collapse" 
                        data-bs-target="#courseNavToggleExternalContent" 
                        aria-controls="courseNavToggleExternalContent" aria-expanded="false" 
                        aria-label="Toggle course navigation"><i className="fas fa-chevron-down fa-sm"></i></span>
                    </div> */}
                </div>

            </div>
        </div>

        <div className="collapse position-fixed w-100  navbar-nav-scroll"  id="navbarToggleExternalContent">
            <div id="wd-nav-bar-small" className="col list-group m-0 p-0 border-0 rounded-0" style={{ width: 150 }}>
                {/* <div  className="float-end me-4 mt-2">
                        <span type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarToggleExternalContent" 
                        aria-controls="navbarToggleExternalContent" aria-expanded="true" 
                        aria-label="Toggle site navigation"><RxHamburgerMenu/></span>
                </div> */}
                {links.map((link, index) => (
                    <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item wd-nav-item border-0 m-0 p-1 ${pathname.includes(link) && "active"}`}>
                    {icons[index]}
                    <br/>
                    {link}
                    </Link>
                ))}
            </div>
        </div>
    </div>
    
  );
}
export default KanbasNavigationSmall;
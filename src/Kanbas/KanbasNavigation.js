import { Link, useLocation } from "react-router-dom";
import {MdAccountCircle, MdMediation} from "react-icons/md";
import {TfiDashboard} from "react-icons/tfi";
import {BiBook, BiSolidInbox, BiHelpCircle} from "react-icons/bi";
import {AiOutlineCalendar, AiOutlineClockCircle} from "react-icons/ai";
import {FaArrowAltCircleRight} from "react-icons/fa";

function KanbasNavigation() {
  const links = ["Account", "Users", "Signin", "Signup", "Dashboard", "Courses"];
  const icons = [<MdAccountCircle/>, <MdAccountCircle/>, <MdAccountCircle/>, <MdAccountCircle/>, <TfiDashboard/>, <BiBook/>];
  const { pathname } = useLocation();
  return (
    <div>
        <div className="d-flex justify-content-center sticky-top d-none d-sm-none d-md-none d-lg-block">
            <div id="wd-nav-bar" className="col list-group m-0 p-0 border-0 rounded-0" style={{ width: 150 }}>
                 <div className="wd-nav-item my-2">
                    <img src="../images/neu-logo-white-text.png" id="wd-nav-neu-logo"/>
                </div>
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
export default KanbasNavigation;
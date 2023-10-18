import "../../Styles/ModuleStyles.css";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {FaEllipsisVertical} from "react-icons/fa6";
function ButtonBar() {
  return (
    <div class="d-flex justify-content-end w-100 wd-module-button my-4">                     
        <button type="button" class="btn btn-secondary btn-sm shadow-sm">Collapse All</button>
        <button type="button" class="btn btn-secondary btn-sm shadow-sm">View Progress</button>

        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <AiOutlineCheckCircle/> Publish All
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><AiOutlineCheckCircle/> Publish All</a></li>
            </ul>
        </div>

        <button type="button" class="btn btn-danger btn-sm shadow-sm"><FaEllipsisVertical/> Module</button>
        <button type="button" class="btn btn-secondary btn-sm shadow-sm"><FaEllipsisVertical/></button>                     
    </div>
  );
}

export default ButtonBar;


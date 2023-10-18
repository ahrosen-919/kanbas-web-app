import KanbasNavigation from "./KanbasNavigation";
import KanbasNavigationSmall from "./KanbasNavigationSmall";
import './Styles/KanbasNavigation.css'
import './Styles/GlobalStyles.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
        <KanbasNavigation/>
      <div class="w-100">
        {/* <div class="d-lg-none d-xl-none d-md-block w-100">
          <KanbasNavigationSmall class="w-100"/>
        </div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1 class="wd-title-large m-3">Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses" element={<Navigate to="../Dashboard" />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<Navigate to="../Dashboard" />} />
          <Route path="Inbox" element={<Navigate to="../Dashboard" />} />
          <Route path="History" element={<Navigate to="../Dashboard" />} />
          <Route path="Studio" element={<Navigate to="../Dashboard" />} />
          <Route path="Commons" element={<Navigate to="../Dashboard" />} />
          <Route path="Help" element={<Navigate to="../Dashboard" />} />
        </Routes>

      </div>
    </div>
  );
}
export default Kanbas;
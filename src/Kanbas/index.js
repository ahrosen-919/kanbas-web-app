import KanbasNavigation from "./KanbasNavigation";
import './Styles/KanbasNavigation.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation/>
      </div>
      <div class="w-100">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
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
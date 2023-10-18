import { Link } from "react-router-dom";
import db from "../Database";
import "../Styles/DashboardStyles.css";
import "../Styles/GlobalStyles.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="container-fluid p-4">
        <div class="row">
            <div class="col col-12">
                <h1 class="wd-title-large">Dashboard</h1>
                <hr/>
                <h3 class="wd-subheading ms-4">Published Courses ({courses.length})</h3>
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
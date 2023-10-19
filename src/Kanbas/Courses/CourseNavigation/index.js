import { Link, useParams, useLocation } from "react-router-dom";
import '../../Styles/SubNavigation.css'


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", 
                "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
                "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-sub-nav-list border-0 rounded-0 m-3 mt-0" style={{ width: 120 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item border-0 rounded-0 py-0 ps-2 ${pathname.includes(link.replace(" ", "%20")) && "active"}`}>
          <div class="wd-sub-item py-1 my-1">{link}</div>
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;
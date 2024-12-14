import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import PeopleTable from "./People/Table"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../Database";
import { useEffect, useState } from "react";
import { findUsersForCourse } from "./client";
import Quiz from "./Quiz";
import QuizEditor from "./Quiz/DetailsEditor";
import QuizDetails from "./Quiz/QuizDetailsScreen";
import QuizPreviewScreen from "./Quiz/QuizPreviewScreen";
import QuizResultScreen from "./Quiz/QuizResultScreen";
import TakeQuizScreen from "./Quiz/TakeQuizScreen";
import GradesTable from "./Grades/Table";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [assignmentName, setassignmentName] = useState('');
  const [description, setdescription] = useState('');
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [users, setUsers] = useState([]);
  const addAssignment = () => {};
  const deleteAssignment = () => {};

  useEffect(() => {
    if (cid) {
      // Fetch users for the course when `cid` changes
      findUsersForCourse(cid)
        .then((data) => {
          setUsers(data); // Update the users state with data from the backend
        })
        .catch((error) => {
          console.error("Failed to fetch users for course:", error);
        });
    }
  }, [cid]);
  console.log(users)
  const validUsers = users.filter((user) => user !== null);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">

          <CoursesNavigation />
        </div>
        <div className="flex-fill">

          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<GradesTable />} />
            <Route path="People" element={<PeopleTable users={validUsers} />} />
            <Route path="Quizzes" element={<Quiz />} />
            <Route path="Quizzes/edit/:qid" element={<QuizEditor />} />
            <Route
              path="Quizzes/preview/:qid"
              element={<QuizPreviewScreen />}
            />
            <Route path="Quizzes/new" element={<QuizEditor />} />
            <Route path="Quizzes/Details/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/take" element={<TakeQuizScreen />} />
            <Route path="Quizzes/:qid/result" element={<QuizResultScreen />} />
          </Routes>
        </div></div>
    </div>
  );
}

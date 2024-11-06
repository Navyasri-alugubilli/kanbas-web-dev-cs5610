import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import PeopleTable from "./People/Table"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../Database";
import { useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [assignmentName, setassignmentName] = useState('');
  const [description, setdescription] = useState('');
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const addAssignment = () => {};
  const deleteAssignment = () => {};
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
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div></div>
    </div>
  );
}

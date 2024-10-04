import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-module" list-group-item p-0 mb-5 fs-5 border-gray>
          <div className="wd-title p-3 ps-2 bg-secondary ps-1 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <button className="btn btn-lg btn-secondary me-2 float-end"><IoMdArrowDropdown /></button>
              <h3 id="wd-assignments-title">
                ASSIGNMENTS
              </h3>
            </div>
            <div>
              <button className="btn btn-lg btn-secondary me-2 float-end"><IoAddOutline /></button>
              <span className="border border-dark p-1 rounded me-2  float-end"> 40% of Total</span></div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <a className="wd-assignment-link text-success"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <MdOutlineAssignment className="me-2 fs-3" />
                </a>
                <p>
                  <a className="wd-assignment-link text-dark text-decoration-none"
                    href="#/Kanbas/Courses/1234/Assignments/123"><h5>A1</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> Sep 19 at 12am | <br />
                  <b> Due</b> sep 25 at 11:59 pm
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>

              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <a className="wd-assignment-link text-success"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <MdOutlineAssignment className="me-2 fs-3" />
                </a>
                <p><a className="wd-assignment-link text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123"><h5>A2</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> Sep 26 at 12am | <br />
                  <b> Due</b> oct 3 at 11:59 pm
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <a className="wd-assignment-link text-success"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  <MdOutlineAssignment className="me-2 fs-3" />
                </a>
                <p><a className="wd-assignment-link text-dark text-decoration-none"
                  href="#/Kanbas/Courses/1234/Assignments/123"><h5>A3</h5></a>
                  <span className="text-danger">Multiple modules</span> | <b>Not available until</b> oct 4 at 12am | <br />
                  <b> Due</b> sep 11 at 11:59 pm
                </p>
              </div>
              <div>
                <GreenCheckmark />
                <button className="btn btn-lg btn-transparent me-2 float-end"><IoEllipsisVertical className="fs-4" /></button>
              </div>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

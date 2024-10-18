import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const assignment = db.assignments;
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
            {assignment
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-3 wd-assignment-link text-success" />
                    <p>
                      <a
                        className="wd-assignment-link text-dark text-decoration-none"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        <h5>{assignment.title}</h5>
                      </a>
                      <span className="text-danger">Multiple modules</span> | <b>Not available until</b>{" "}
                      {new Date(assignment.available).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" }
                      )}{" "}
                      at {"12:00 AM"} | <br />
                      <b>Due</b>{" "}
                      {new Date(assignment.due).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      at {"11:59 PM"} | {assignment.points}pts
                    </p>
                  </div>
                  <div>
                    <GreenCheckmark />
                    <button className="btn btn-lg btn-transparent me-2 float-end">
                      <IoEllipsisVertical className="fs-4" />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}



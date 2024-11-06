import React, { useState } from "react";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import GreenCheckmark from "./GreenCheckmark";
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { FaTrash } from "react-icons/fa";


export default function Assignments() {
  const { cid } = useParams();
  const assignment = db.assignments;
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { aid } = useParams();
  console.log('Assignment ID for deletion:', aid);
  const [showDialog, setShowDialog] = useState(false);
  const [currentAssignmentId, setCurrentAssignmentId] = useState<string | undefined>(undefined)

  const handleDelete = (aid: string) => {
    console.log("Deleting assignment with ID:", aid);
    dispatch(deleteAssignment(aid));
    setShowDialog(false);
  };
  const confirmDelete = (aid: string) => {
    console.log("Confirming delete for:", aid);
    handleDelete(aid);
  };
  const cancelDelete = () => {
    setShowDialog(false);
  };
  const openDialog = (aid: string) => {
    setCurrentAssignmentId(aid);
    setShowDialog(true);
  };
  return (
    <div id="wd-assignments">
      <AssignmentControls
        assignmentName={assignmentName} setAssignmentName={setAssignmentName}
        addAssignment={() => {
          dispatch(addAssignment({
            _id: new Date().getTime().toString(),
            title: assignmentName,
            description: 'Course description',
            course: cid,
            points: "100"
          }));
          setAssignmentName("");
        }
        } assignments={assignments}
      />
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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-3 wd-assignment-link text-success" />
                    <p>
                      {currentUser.role === "FACULTY" ? (
                        <a
                          className="wd-assignment-link text-dark text-decoration-none"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          <h5>{assignment.title}</h5>
                        </a>
                      ) : (
                        <h5>{assignment.title}</h5>
                      )}

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
                    <button className="btn  btn-transparent me-2 float-end">
                      <FaTrash className="text-danger me-4 mb-1" style={{ fontSize: '25px' }}
                        onClick={() => openDialog(assignment._id)} />
                    </button>
                    {/* Bootstrap Modal dialog */}
                    {showDialog && currentAssignmentId === assignment._id && (
                      <div
                        className="modal fade show"
                        tabIndex={-1}
                        style={{ display: 'block' }} // Ensure the modal is visible
                        aria-labelledby="deleteModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cancelDelete}></button>
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete this assignment?
                            </div>
                            <div className="modal-footer">
                              <button
                                className="btn btn-danger"
                                onClick={() => confirmDelete(assignment._id)} // Confirm the deletion
                              >
                                Yes
                              </button>
                              <button className="btn btn-secondary" onClick={cancelDelete}>No</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}



import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { setassignments, addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client"
import * as coursesClient from "../client";
export default function AssignmentEditor() {
    type assignmentType = {
        _id: string;
        title: string;
        description: string;
        course: string;
        due: string;
        available: string;
        points: number;
    };
    console.log(new Date().toISOString());
    const { cid } = useParams();
    //   const assignments = db.assignments;
    //   const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();
    const { aid } = useParams();
    // const [assignmentName, setAssignmentName] = useState(assignment.title || 'New Assignment');
    // const [description, setDescription] = useState(assignment.description || 'Description');
    // const [points, setPoints] = useState(assignment.points || 100);
    // const [dueDate, setDueDate] = useState(assignment.due ? new Date(assignment.due).toISOString().slice(0, 16) : '');
    // const [availableFrom, setAvailableFrom] = useState(assignment.available ? new Date(assignment.available).toISOString().slice(0, 16) : '');
    const [assignment, setAssignment] = useState<assignmentType>({
        _id: aid?.toString() || "",
        title: "New Assignment",
        description: "New Assignment Description",
        course: cid?.toString() || "",
        due: new Date().toISOString(),
        available: new Date().toISOString(),
        points: 100,
    });
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setassignments(assignments));
      };
      useEffect(() => {
        fetchAssignments();
      }, []);
      const isAssignmentExists = (id: string) => {
        return assignments.some((a: any) => a._id === id);
      };
    const handleSave = () => {
        const updatedAssignment = {
            ...assignment,
        };
        if (isAssignmentExists(updatedAssignment._id)) {
            // If there is an _id, update the existing assignment
            const saveAssignment = async (assignment: any) => {
                try {
                    // Ensure the updateAssignment API is called only for existing assignments
                    await assignmentClient.updateAssignment(assignment);  // Update existing assignment
                    dispatch(updateAssignment(assignment));  // Dispatch the updated assignment
                } catch (error) {
                    console.log(assignment._id)
                    console.error("Error updating assignment:", error);
                }
            };
            saveAssignment(updatedAssignment);

        } else {
            // If no _id exists, create a new assignment
            const createAssignmentForCourse = async () => {
                if (!cid) return;
                const newAssignment = {
                    _id: new Date().getTime().toString(),
                    title: assignments.title || 'New Assignment',
                    description: assignments.description || 'No description',
                    course: assignments.course || 'Course',
                    due: assignments.due ? new Date(assignments.due).toISOString() : new Date().toISOString(),
                    available: assignments.available ? new Date(assignments.available).toISOString() : new Date().toISOString(),
                    points: assignments.points || 0,
                };
                try {
                    // Create a new assignment via the backend
                    const createdAssignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
                    dispatch(addAssignment(createdAssignment));  // Dispatch the created assignment to the store
                } catch (error) {
                    console.error("Error creating assignment:", error);
                }
            };
            createAssignmentForCourse();
        }

    };

    const handleDelete = (aid: string) => {
        removeAssignment(aid);
    };
    const removeAssignment = async (assignmentId: string) => {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    useEffect(() => {
        const selectedAssignment = assignments.find(
            (assignment: any) => assignment._id === aid && assignment.course === cid
        );
        if (selectedAssignment) setAssignment(selectedAssignment);
    }, [cid, aid, assignments]);
    return (
        <div className="wd-css-styling-forms container " id="wd-add-assignment">

            <><div className="row mb-3">
                <label htmlFor="wd-name" className="form-label col-sm-3 col-form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" placeholder={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                <br />
                <div className="row mb-9 pt-1">
                    <textarea className="form-control" id="wd-description"
                        rows={3} value={assignment.description}
                        onChange={(e) => {
                            setAssignment({ ...assignment, description: e.target.value });
                        }} />
                </div>
            </div><div className="d-flex row mb-3 mb-3">
                    <label htmlFor="wd-points" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                        Points</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control"
                            id="wd-points" placeholder="100" value={assignment.points}
                            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })} /></div>
                </div><div className="d-flex row mb-3 mb-3">
                    <label htmlFor="wd-Assigmentgroup" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                        Assigment Group</label>
                    <div className="col-sm-9">
                        <select className="form-select" id="wd-group">
                            <option selected>Assignments</option>
                            <option value="Assignments">Assignments</option>
                            <option value="Quizzes">Quizzes</option>
                            <option value="Exam">Exam</option>
                        </select></div>

                </div><div className="d-flex row mb-3 mb-3">
                    <label htmlFor="wd-diaplay-grade-as" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                        Display Grade</label>
                    <div className="col-sm-9">
                        <select className="form-select" id="wd-display-grade-as">
                            <option selected>Percentage</option>
                            <option value="Points">Points</option>
                            <option value="Letter Grade">Letter Grade</option>
                        </select></div>

                </div><div className="d-flex row mb-3 mb-3 p-3">
                    <label htmlFor="wd-Submission-type" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                        Submission Type</label>
                    <div className="col-sm-9 border border-secondary p-3">

                        <select className="form-select" id="wd-submission-type">
                            <option selected>Online</option>
                            <option value="Online">Online</option>
                            <option value="inpersion">In-person</option>
                        </select><br />
                        <div className="d-flex col-sm-9 mb-3 mb-3">
                            <label>Online Entry Option:</label><br />
                        </div>
                        <div className="d-flex row mb-3 mb-3">
                            <div className="col-sm-9">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="check-option" id="wd-chkbox-text-entry" />
                                    <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br />

                                    <input className="form-check-input" type="checkbox" name="check-option" id="wd-chkbox-Website-url" />
                                    <label htmlFor="wd-chkbox-Website-url">Website URL</label><br />

                                    <input className="form-check-input" type="checkbox" name="check-option" id="wd-chkbox-Media-recordings" />
                                    <label htmlFor="wd-chkbox-Media-recordings">Media Recordings</label><br />

                                    <input className="form-check-input" type="checkbox" name="check-option" id="wd-chkbox-student-annotatio" />
                                    <label htmlFor="wd-chkbox-student-annotatio">Student Annotation</label><br />

                                    <input className="form-check-input" type="checkbox" name="check-option" id="wd-chkbox-file-upload" />
                                    <label htmlFor="wd-chkbox-file-upload">File Uploads</label>
                                </div></div>
                        </div>
                    </div>
                </div><div className="d-flex row mb-3 mb-3 p-3">
                    <label htmlFor="wd-assign-to" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                        Assign</label>
                    <div className="col-sm-9 border border-secondary p-3">
                        <div className="d-flex row mb-3 mb-3 pl-3">
                            <label htmlFor="wd-assign-to" className="form-label col-sm-3 col-form-label">
                                Assign to</label>
                            <input type="text" className="form-control"
                                id="wd-assign-to" value={"Everyone"} />
                        </div>
                        <div className="d-flex row mb-3">
                            <div className="col-sm-9">
                                <div className="d-flex row mb-3">
                                    <label htmlFor="wd-due-date" className="form-label col-sm-3 col-form-label">
                                        Due Date</label>
                                    <input type="datetime-local" className="form-control" id="wd-due-date" value={new Date(assignment.due).toISOString().slice(0, 16)}
                                        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex row mb-3">
                            <div className="col-sm-9">
                                <div className="d-flex">
                                    <div className="col-sm-6">
                                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                        <input type="datetime-local" className="form-control" id="wd-available-from" value={new Date(assignment.available).toISOString().slice(0, 16)}
                                            onChange={(e) => setAssignment({ ...assignment, available: e.target.value })} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="wd-available-from" className="form-label">Until</label>
                                        <input type="datetime-local" className="form-control" id="wd-available-until" value=" " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><hr /><div className="d-flex row mb-3 mb-3 float-end">
                    <div className="float-end">
                        <Link
                            id="wd-assignment-save-link"
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn btn-lg btn-danger me-1 float-end"
                            onClick={handleSave}
                            style={{ textDecoration: 'none' }} >Save</Link>
                        <Link
                            id="wd-assignment-save-link"
                            to={`/Kanbas/Courses/${cid}/Assignments`}
                            className="btn btn-lg btn-secondary me-2 float-end"
                            onClick={() => handleDelete(assignment._id)}
                            style={{ textDecoration: 'none' }}>Cancel</Link>
                    </div>
                </div ></>


        </div >

    );
}
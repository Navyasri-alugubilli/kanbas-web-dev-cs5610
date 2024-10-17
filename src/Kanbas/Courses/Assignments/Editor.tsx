import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    return (
        <div className="wd-css-styling-forms container ">
            {assignments.filter((assignment: any) => assignment._id === aid && assignment.course === cid)
                .map((assignment: any) => (
                    <><div className="row mb-3">
                        <label htmlFor="wd-name" className="form-label col-sm-3 col-form-label">
                            Assignment Name</label>
                        <input type="text" className="form-control"
                            id="wd-name" placeholder={assignment.title} />
                        <br />
                        <div className="row mb-9 pt-1">
                            <textarea className="form-control" id="wd-description"
                                rows={3} value={assignment.description} />
                        </div>
                    </div><div className="d-flex row mb-3 mb-3">
                            <label htmlFor="wd-points" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                                Points</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    id="wd-points" placeholder="100" value={assignment.points} /></div>
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
                                            <input type="datetime-local" className="form-control" id="wd-due-date" value={new Date(assignment.due).toISOString().slice(0, 10) + "T23:59"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex row mb-3">
                                    <div className="col-sm-9">
                                        <div className="d-flex">
                                            <div className="col-sm-6">
                                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                                <input type="datetime-local" className="form-control" id="wd-available-from" value={new Date(assignment.available).toISOString().slice(0, 16)} />
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
                                    style={{ textDecoration: 'none' }} >Save</Link>
                                <Link
                                    id="wd-assignment-save-link"
                                    to={`/Kanbas/Courses/${cid}/Assignments`}
                                    className="btn btn-lg btn-secondary me-2 float-end"
                                    style={{ textDecoration: 'none' }}>Cancel</Link>
                            </div>
                        </div ></>

                ))
            }
        </div >

    );
}
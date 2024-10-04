export default function AssignmentEditor() {
    return (
        <div className="wd-css-styling-forms container ">
            <div className="row mb-3">
                <label htmlFor="wd-name" className="form-label col-sm-3 col-form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" placeholder="A1" />
                <br />
                <div className="row mb-9 pt-1">
                    <textarea className="form-control" id="wd-description"
                        rows={3}> The assignment is available onlineLinks to an external site.

                        Submit a link to the landing page of your Web application running on Netlify.

                        The landing page should include the following:

                        Your full name and section
                        Links to each of the lab assignments
                        Link to the Kanbas application
                        Links to all relevant source code repositories
                        The Kanbas application should include a link to navigate back to the landing page.</textarea>
                </div>
            </div>
            <div className="d-flex row mb-3 mb-3">
                <label htmlFor="wd-points" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                    Points</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control"
                        id="wd-points" placeholder="100" /></div>
            </div>
            <div className="d-flex row mb-3 mb-3">
                <label htmlFor="wd-Assigmentgroup" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                    Assigment Group</label>
                <div className="col-sm-9">
                    <select className="form-select" id="wd-group">
                        <option selected>Assignments</option>
                        <option value="Assignments">Assignments</option>
                        <option value="Quizzes">Quizzes</option>
                        <option value="Exam">Exam</option>
                    </select></div>

            </div>
            <div className="d-flex row mb-3 mb-3">
                <label htmlFor="wd-diaplay-grade-as" className="form-label col-sm-3 col-form-label mb-3 mb-0">
                    Display Grade</label>
                <div className="col-sm-9">
                    <select className="form-select" id="wd-display-grade-as">
                        <option selected>Percentage</option>
                        <option value="Points">Points</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select></div>

            </div>
            <div className="d-flex row mb-3 mb-3 p-3">
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
            </div>
            <div className="d-flex row mb-3 mb-3 p-3">
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
                                <input type="datetime-local" className="form-control" id="wd-due-date" value="2024-05-13T23:59" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex row mb-3">
                        <div className="col-sm-9">
                            <div className="d-flex">
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                    <input type="datetime-local" className="form-control" id="wd-available-from" value="2024-05-06T12:00" />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="wd-available-from" className="form-label">Until</label>
                                    <input type="datetime-local" className="form-control" id="wd-available-until" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex row mb-3 mb-3 float-end">
                <div className="float-end">
                    <button id="wd-collapse-all" className="btn btn-lg btn-danger me-1 float-end"
                        type="button" data-bs-toggle="button">
                        Save</button>
                    <button id="wd-view-progress" className="btn btn-lg btn-secondary me-2 float-end"
                        type="button" data-bs-toggle="button">
                        Cancel</button>
                </div>
            </div>
        </div>

    );
}

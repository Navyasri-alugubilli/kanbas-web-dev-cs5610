export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-Assigmentgroup">Assigment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="Assignments">Assignments</option>
                            <option value="Quizzes">Quizzes</option>
                            <option value="Exam">Exam</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-diaplay-grade-as">Display Grade</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-Submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-Submission-type">
                            <option value="Online">Online</option>
                            <option value="inpersion">In-person</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right"></td>
                    <td align="left" valign="top">
                        <label>Online Entry Option:</label><br />

                        <input type="checkbox" name="check-option" id="wd-chkbox-text-entry" />
                        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-option" id="wd-chkbox-Website-url" />
                        <label htmlFor="wd-chkbox-Website-url">Website URL</label><br />

                        <input type="checkbox" name="check-option" id="wd-chkbox-Media-recordings" />
                        <label htmlFor="wd-chkbox-Media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-option" id="wd-chkbox-student-annotatio" />
                        <label htmlFor="wd-chkbox-student-annotatio">Student Annotation</label><br />
                        <input type="checkbox" name="check-option" id="wd-chkbox-file-upload" />
                        <label htmlFor="wd-chkbox-file-upload">File Uploads</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-Due-date">Due</label>
                    </td>
                    <td>
                        <input type="date"
                            id="wd-Due-date"
                            value="2024-09-19" /><br />
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Availabledates</label><br />
                        <input type="date"
                            id="wd-available-from"
                            value="2024-09-03" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date"
                            id="wd-available-until"
                            value="2024-09-03" />
                    </td>
                </tr>
            </table>
            <hr />
            <button id="wd-editor-buttons" type="button">
                            Cancel
                        </button>
                        <button id="wd-editor-buttons" type="button">
                            Save
                        </button>


        </div>
    );
}

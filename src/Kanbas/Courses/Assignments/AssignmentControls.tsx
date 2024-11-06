import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';
import AssignmentEditor from "./Editor";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function AssignmentControls(
    {assignmentName, setAssignmentName, addAssignment, assignments}:
    { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; assignments: any[]; }
) {
    const { cid, aid } = useParams();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        const newId = new Date().getTime().toString();
        addAssignment()
        console.log("Navigating to:", `${newId}`);
        navigate(`${newId}`);
      };
      console.log("assignments",assignments);
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
                <input id="wd-search-assignment"
                    placeholder=" Search...." />
            <div className="btn btn-danger d-inline me-1 float-end">
                <button id="wd-collapse-all" className="btn btn-lg btn-danger me-1 float-end"
                onClick={handleButtonClick}
                    type="button">
                    <AiOutlinePlus />
                    Assignments</button>
            </div>
            <div className="btn btn-secondary d-inline me-1 float-end">
                <button id="wd-view-progress" className="btn btn-lg btn-secondary me-2 float-end"
                    type="button" data-bs-toggle="button">
                    <AiOutlinePlus />
                    Group</button>
            </div>
        </div>
    )
}
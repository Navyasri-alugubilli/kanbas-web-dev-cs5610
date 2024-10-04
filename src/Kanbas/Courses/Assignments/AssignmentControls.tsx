import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap">
                <input id="wd-search-assignment"
                    placeholder=" Search...." />
            <div className="btn btn-danger d-inline me-1 float-end">
                <button id="wd-collapse-all" className="btn btn-lg btn-danger me-1 float-end"
                    type="button" data-bs-toggle="button">
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
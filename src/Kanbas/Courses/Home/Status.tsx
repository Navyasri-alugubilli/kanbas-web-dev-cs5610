import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHome } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { MdAnnouncement } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
export default function CourseStatus() {
    return (
      <div id="wd-course-status" className="p-2 p-md-4 p-lg-5" style={{ width: "370px" }}>
        <h2>Course Status</h2>
        <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-block btn-secondary w-100">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-block btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div>
      <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <IoHome className="me-2 fs-5" /> Choose Home Page </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <VscGraph className="me-2 fs-5" /> View Course Stream </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <MdAnnouncement className="me-2 fs-5" /> New Announcement </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <GrAnalytics className="me-2 fs-5" /> New Analytics </button>

        <button className="btn btn-block btn-secondary w-100 mt-1 text-start">
        <IoIosNotifications className="me-2 fs-5" /> View Course Notification </button>
      </div>
  );}
  
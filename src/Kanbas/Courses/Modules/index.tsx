import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
    return (
        <div>
            <ModulesControls />
            <br />
            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module" list-group-item p-0 mb-5 fs-5 border-gray>
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />Week 1
                    <ModuleControlButtons /></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES
                            <LessonControlButtons /></span>
                            <ul className="wd-content">
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />Introduction to the course
                                <LessonControlButtons /></li>
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />Learn what is Web Development
                                <LessonControlButtons /></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <br />
                <li className="wd-module">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />Week 2
                    <ModuleControlButtons /></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES
                            <LessonControlButtons /></span>
                            <ul className="wd-content">
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML
                                <LessonControlButtons /></li>
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify
                                <LessonControlButtons /></li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <br />
                <li className="wd-module">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />Week 3
                    <ModuleControlButtons /></div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <span className="wd-title">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES
                            <LessonControlButtons /></span>
                            <ul className="wd-content">
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />Introduction to CSS
                                <LessonControlButtons /></li>
                                <li className="wd-content-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />The box model - styling margins, borders, and paddings
                                <LessonControlButtons /></li>
                            </ul>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

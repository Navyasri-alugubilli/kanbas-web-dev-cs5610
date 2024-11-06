import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import ProtectedButton from "./ProtectedButton";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }
) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);;
    const [showAllCourses, setShowAllCourses] = useState(false); // To toggle between all and enrolled courses
    const [currentEnrollments, setCurrentEnrollments] = useState(
        enrollments
            .filter((enrollment: { user: any; }) => enrollment.user === currentUser._id)
            .map((enrollment: { course: any; }) => enrollment.course)
    );

    // Toggle between viewing all courses or only enrolled ones
    const toggleEnrollments = () => {
        setShowAllCourses(!showAllCourses);
    };
    const handleToggleEnrollment = (courseId: string) => {
        if (currentEnrollments.includes(courseId)) {
            // Unenroll
            setCurrentEnrollments(currentEnrollments.filter((id: string) => id !== courseId));
        } else {
            // Enroll
            setCurrentEnrollments([...currentEnrollments, courseId]);
        }
    };

    // Filter courses based on the view state (all or enrolled only)
    const filteredCourses = showAllCourses
        ? courses
        : courses.filter((course) =>
            enrollments.some(
                (enrollment: { user: any; course: any; }) => enrollment.user === currentUser._id && enrollment.course === course._id
            )
        );

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "FACULTY" && (
                <><h5>New Course
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}> Add </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                    <br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            {currentUser.role === 'STUDENT' && (
                <button className="btn btn-primary float-end"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                    onClick={toggleEnrollments}>
                    Enrollments
                </button>
            )}

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {filteredCourses.map((course) => (
                        <div className="wd-dashboard-course  col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src={`/images/courses/${course.image}`} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <ProtectedButton><button className="btn btn-primary"> Go </button></ProtectedButton>
                                        {currentUser.role == "FACULTY" && (
                                            <><button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button><button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end">
                                                    Edit
                                                </button></>
                                        )}
                                        {currentUser.role === 'STUDENT' && (
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleToggleEnrollment(course._id);
                                                }}
                                                className={`btn ${currentEnrollments.includes(course._id) ? 'btn-danger' : 'btn-success'} float-end`}>
                                                {currentEnrollments.includes(course._id) ? 'Unenroll' : 'Enroll'}
                                            </button>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

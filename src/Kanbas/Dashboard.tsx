import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import ProtectedButton from "./ProtectedButton";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
            updateEnrollment: (courseId: string, enrolled: boolean) => void;
        }
) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);;
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [currentEnrollments, setCurrentEnrollments] = useState(
        enrollments
            .filter((enrollment: { user: any; }) => enrollment.user === currentUser._id)
            .map((enrollment: { course: any; }) => enrollment.course)
    );

    useEffect(() => {
        setCurrentEnrollments(
            enrollments
                .filter((enrollment: { user: any; }) => enrollment.user === currentUser._id)
                .map((enrollment: { course: any; }) => enrollment.course)
        );
    }, [enrollments, currentUser._id]);
    const toggleEnrollments = () => {
        console.log("Toggling enrollments...");
        setShowAllCourses(!showAllCourses);
    };
    const handleToggleEnrollment = (courseId: string) => {
        if (currentEnrollments.includes(courseId)) {
            // Unenroll
            setCurrentEnrollments(currentEnrollments.filter((id: string) => id !== courseId));
            dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
        } else {
            // Enroll
            setCurrentEnrollments([...currentEnrollments, courseId]);
            dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
        }
    };


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
                    <h2 id="wd-dashboard-published">Published Courses ({currentEnrollments.length})</h2> <hr />
                </>
            )}
            {currentUser.role === 'STUDENT' && (
                <><h2 id="wd-dashboard-published">Published Courses ({currentEnrollments.length})</h2><hr />
                    <button className="btn btn-primary float-end"
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                        onClick={toggleEnrollments}>
                        Enrollments
                    </button></>
            )}

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course  col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`}>
                                    <img src={`/images/courses/${course.image}`} width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary"> Go </button>
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
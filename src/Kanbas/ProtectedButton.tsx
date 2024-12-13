import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedButton({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const { cid } = useParams();
    console.log("id", cid)
    console.log(enrollments)
    console.log("currentUser:", currentUser);
    console.log("enrollments:", enrollments);
    console.log("Course ID (cid):", cid);
    type enrollmentType = {
        _id: string;
        user: string;
        course: string;
    };
    const isEnrolled = enrollments.some(
        (enrollment: enrollmentType) =>
            enrollment.user === currentUser._id && enrollment.course === cid
    );
    if (isEnrolled) {
        return children;
    } else {
        return <Navigate to="/Kanbas/Dashboard" />;
    }
}

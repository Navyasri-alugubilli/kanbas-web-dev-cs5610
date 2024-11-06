import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedButton({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const { cid } = useParams();
    console.log("id",cid)
    console.log(enrollments)
    const isEnrolled = enrollments.some(
        (enrollment: { user: string; course: { _id: string } }) =>
            enrollment.user === currentUser._id && enrollment.course._id === cid
    );
    if (isEnrolled) {
        return children;
    } else {
        return <Navigate to="/Kanbas/Dashboard" />;
    }
}

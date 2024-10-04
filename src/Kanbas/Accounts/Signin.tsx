import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Signin</h2>
      <div className="mb-3">
        <div className="p-2">
          <input className="form-control"
            id="wd-username" placeholder="username" /></div>
        <div className="p-2">
          <input className="form-control"
            id="wd-password" placeholder="password" /></div>
        <div className="p-2">
          <Link className="wd-signin-link text-white text-decoration-none btn btn-primary me-1 w-100" to="/Kanbas/Dashboard" type="button">
            Sign in
          </Link>
        </div>
        <div className="p-2">
          <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

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
          <button id="wd-signin-btn" className="btn btn-primary me-1 w-100"
            type="button" data-bs-toggle="button"><Link id="wd-signin-btn" className="text-white text-decoration-none"
              to="/Kanbas/Dashboard"> Sign in </Link></button></div>
        <div className="p-2">
          <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

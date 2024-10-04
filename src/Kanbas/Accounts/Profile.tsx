import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Profile</h2>
      <div className="mb-3">
        <div className="p-2">
          <input className="form-control" id="wd-username" value="alice" placeholder="username" />
        </div>
        <div className="p-2">
          <input className="form-control" id="wd-password form-control" value="123" placeholder="password"
            type="password" />
        </div>
        <div className="p-2">
          <input className="form-control" id="wd-firstname" value="Alice" placeholder="First Name" />
        </div>
        <div className="p-2">
          <input className="form-control" id="wd-lastname" value="Wonderland" placeholder="Last Name" />
        </div>
        <div className="p-2">
          <input className="form-control" id="wd-dob" value="2000-01-01" type="date" />
        </div>
        <div className="p-2">
          <input className="form-control" id="wd-email" value="alice@wonderland" type="email" />
        </div>
        <div className="p-2">
          <select className="form-select" id="wd-role">
            <option selected>User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
        <div className="p-2">
          <button id="wd-signin-btn" className="btn btn-danger me-1 w-100"
            type="button" data-bs-toggle="button"><Link to="/Kanbas/Account/Signin"
              className="text-white text-decoration-none" >Sign out</Link></button>
        </div>
      </div>
    </div>

    /*<div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" /><br/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" /><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" /><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br/>
      <input id="wd-dob" value="2000-01-01" type="date" /><br/>
      <input id="wd-email" value="alice@wonderland" type="email" /><br/>
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" >Sign out</Link>
    </div>*/
  );
}

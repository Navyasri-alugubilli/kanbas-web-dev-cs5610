import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5610 Web Development
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Web Development 
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5800 Algorithms
                            </h5>
                            <p className="wd-dashboard-course-title">
                            Algorithms
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5010 Program design paradigm
                            </h5>
                            <p className="wd-dashboard-course-title">
                                PDP
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5100 Foundations of AI
                            </h5>
                            <p className="wd-dashboard-course-title">
                                FAI
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5110 Introduction to data Management
                            </h5>
                            <p className="wd-dashboard-course-title">
                                IDMP
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/download.png" width={200} />
                        <div>
                            <h5>
                                CS5011 Recitation for PDP
                            </h5>
                            <p className="wd-dashboard-course-title">
                                PDP
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

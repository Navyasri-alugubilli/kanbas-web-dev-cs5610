export default function Modules() {
    return (
        <div>
            <button id="wd-module-buttons" onClick={() => alert("Collapse")} type="button">
                Collapse All
            </button>
            <button id="wd-module-buttons" onClick={() => alert("Progress")} type="button">
                View Progress
            </button>
            <select id="wd-publish">
                <option value="Publish">Publish</option>
                <option value="Unpublish">Publish-All</option>
            </select>
            <button id="wd-module-buttons" onClick={() => alert("Add module")} type="button">
                + Module
            </button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to CSS</li>
                                <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
                            </ul>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

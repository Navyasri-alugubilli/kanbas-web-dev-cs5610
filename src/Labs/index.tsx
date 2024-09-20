import { Route, Routes, Navigate } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Navya Sri Alugubilli</h1>
            <h2>Section 01</h2>
            <h2><a className="wd-github-link"
              href="https://github.com/Navyasri-alugubilli/kanbas-web-dev-cs5610">
              Github repositories
            </a></h2>
            <h1>Labs</h1>
            <TOC />
            <Routes>
            <Route path="/" element={<Navigate to="Lab1" />} />
                <Route  path="Lab1" element={<Lab1 />} />
                <Route  path="Lab2" element={<Lab2 />} />
                <Route  path="Lab3" element={<h2> Lab 3 </h2>} />
            </Routes>
        </div>
    );
}

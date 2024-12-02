import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Module() {
    const [module, setmodule] = useState({
        id: 1, name: "NodeJS",
        description: "Create a NodeJS server with ExpressJS",
        course: "Web Dev",
    });
    const Module_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${Module_API_URL}/name/${module.name}`}>
                Update name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setmodule({ ...module, name: e.target.value })} />
            <hr />

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get module
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get name
            </a><hr />
        </div>
    );
}
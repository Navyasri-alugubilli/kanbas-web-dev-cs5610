import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-success text-white mr-3 p-3" onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">Up</button>
            <button className="btn btn-danger text-white m-3 p-3" onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">Down</button>
            <hr /></div>);
}
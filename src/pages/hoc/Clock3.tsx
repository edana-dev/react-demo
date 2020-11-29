import React from "react";
import withTime from "./withTime";

const Clock3 = (props: any) => {
    return (
        <div>
            <h1>Function component with HOC</h1>
            <h2>It is {props.time.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default withTime(Clock3)
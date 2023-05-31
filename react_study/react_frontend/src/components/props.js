import React from "react";

export default function Props(props, {age}) {
    return (
        <div>
            <h1>Props</h1>
            <h2>{props.name}</h2>
            <h2>{age}</h2>
        </div>
    )
}
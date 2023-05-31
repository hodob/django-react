import React from "react";

export default function Props(props, {age}) {
    return (
        <div>
            <h1>Props</h1>
            <h2>{props.name}</h2>
            <h2>{age}</h2>
            <h2>{props.name2}</h2>
        </div>
    )
    
}
Props.defaultProps = {
    name2 : '추가된이름'
};
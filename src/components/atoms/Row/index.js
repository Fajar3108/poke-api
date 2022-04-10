import React from "react";
import './style.css';

const Row = ({ className, children }) => {
    return (
        <div className={["row", className].join(" ")}>{children}</div>
    )
}

export default Row;
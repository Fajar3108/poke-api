import React from "react";
import './style.css';

const Wrapper = ({ className, children }) => {
    return (
        <div className={["wrapper", className].join(" ")}>{children}</div>
    )
}

export default Wrapper;
import React from "react";
import './style.css';

const Button = ({ variant, size, children }) => {
    return (
        <button className={[ "btn", `btn-${variant} btn-${size}` ].join(" ")}>{children}</button>
    )
}

export default Button;
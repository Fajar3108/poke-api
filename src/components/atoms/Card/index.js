import React from "react";
import './style.css';

const Card = ({ className, children }) => {
    return (
        <div className={["card", className].join(" ")}>
            {children}
        </div>
    )
}

export default Card;
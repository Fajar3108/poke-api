import React from "react";
import './style.css';

const Picture = ({ src, width, height, alt }) => {
    const style = {width, height}
    return (
        <img src={src} style={style} alt={alt ?? ''} />
    )
}

export default Picture;
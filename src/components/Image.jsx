import React from "react";

const Image = ({ src = "", isParagraphImg = false }) => {
    return (
        <div className={`${!isParagraphImg && "p-4 py-2"}`}>
            <img src={src} alt={src.toLocaleUpperCase()} />
        </div>
    );
};

export default Image;

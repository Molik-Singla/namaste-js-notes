import React from "react";

const Heading = ({ children, link = "" }) => {
    return (
        <a href={link} target="_blank">
            <h2 className="font-semibold text-3xl md:text-4xl mb-8 hover:underline underline-offset-8">{children}</h2>
        </a>
    );
};

export default Heading;

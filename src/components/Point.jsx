import React from "react";

const Point = ({ children, subPoint = false, isParagraph = false }) => {
    if (!isParagraph)
        return <li className={` ${subPoint ? "ml-8 md:text-[17px]" : "ml-4 md:text-lg"} list-disc list-outside`}>{children}.</li>;
    else {
        return <p className={`${subPoint ? "ml-4 md:text-[17px]" : "ml-0 md:text-lg mt-2 mb-1"}`}>{children}.</p>;
    }
};

export default Point;

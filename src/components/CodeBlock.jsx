import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children, language = "javascript" }) => {
    return (
        <section className="mb-2">
            <SyntaxHighlighter wrapLongLines language={language} style={dracula}>
                {children}
            </SyntaxHighlighter>
        </section>
    );
};

export default CodeBlock;

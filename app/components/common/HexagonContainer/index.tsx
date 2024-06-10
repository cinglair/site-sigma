import React, { HtmlHTMLAttributes } from "react";

export const HexagonContainer: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    return (
        <div className="hexagon" {...rest}>
            {children}
        </div>
    )
}
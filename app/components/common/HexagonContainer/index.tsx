import React, { HtmlHTMLAttributes } from "react";

export const HexagonContainer: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
    return (
        <div className={`hexagon relative bg-primary ${className}`}>
            <div className="hexagon absolute top-2 left-2" {...rest}>
                {children}
            </div>
        </div>
    )
}
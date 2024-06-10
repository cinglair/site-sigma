import React from "react";
import { RichText } from "../RichText";
import { ISectionTitleProps } from "./types";

export const SectionTitle: React.FC<ISectionTitleProps> = ({ title, subtitle, color }) => {
    return (
        <div className="flex flex-col w-full justify-start">
            <RichText field={title} className={`text-left w-full font-bold ${color ? color : "text-primary"}`} />
            {subtitle && <RichText field={subtitle} className={`text-left w-full ${color ? color : "text-primary"}`} />}
        </div>
    )

}
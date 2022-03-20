import React from "react";
import {IEducation} from "../../payloads/education";

export default function Education({educations}: { educations: IEducation[] }) {
    return (
        <div className={"grid"}>
            <h2>Education</h2>

            {educations.map((education, index) => (
                <div key={index} className={"grid-item"}>
                    <h3>{education.school}</h3>
                    <div className={"date"}>
                        {education.startAt} ~ {education.endAt}
                    </div>
                    <div>{education.description}</div>
                </div>
            ))}

            <style jsx>{`
              h2 {
                grid-row: 1 / ${educations.length + 1};
                font-size: 1.5em;
                font-weight: bold;
    
              }

              h3 {
                display: inline-block;
                margin-right: 10px;
              }

              .date {
                display: inline;
              }
    
            `}</style>
        </div>
    );
}
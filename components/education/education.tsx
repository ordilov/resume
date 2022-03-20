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
              .grid {
                display: grid;
                background-color: #f0f0f0;
                padding: 10px;
                grid-template-columns: 250px 1fr;
                row-gap: 0;
              }

              h2 {
                grid-row: 1 / ${educations.length + 1};
                font-size: 1.5em;
                font-weight: bold;
                margin-top: 1rem;
                margin-left: 1rem;
              }

              h3 {

              }



              @media (max-width: 600px) {
                .grid {
                  grid-template-columns: 1fr;
                }
              }
            `}</style>
        </div>
    );
}
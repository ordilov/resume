import {IExperience} from "../../payloads/experience";
import React from "react";

export default function Experience({experiences}: { experiences: IExperience[] }) {
    return (
        <div className={"grid"}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div className={"exp"} key={index}>
                    <h3>{experience.company}</h3>
                    <div className={"date"}>
                        {experience.startAt} ~ {experience.endAt}
                    </div>
                    <p>{experience.description}</p>
                </div>
            ))}

            <style jsx>{`

              h2 {
                grid-row: 1 / ${experiences.length + 1};
                font-size: 1.5em;
                font-weight: bold;
              }

              h3 {
                margin-top: 1rem;
                margin-right: 10px;
                display: inline;
              }

              p {
                margin-top: 0.75rem;
              }
              
              .exp {
              margin-top: 1.5em;
              }

              .date {
                display: inline-block;
              }
        
            `}</style>
        </div>
    );
}
import {IExperience} from "../../payloads/experience";
import React from "react";

export default function Experience({experiences}: { experiences: IExperience[] }) {
    return (
        <div className={"grid"}>
            <h2>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <h3>{experience.company}</h3>
                    <div className={"date"}>
                        {experience.startAt} ~ {experience.endAt}
                    </div>
                    <p>{experience.description}</p>
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
                grid-row: 1 / ${experiences.length + 1};
                font-size: 1.5em;
                font-weight: bold;
                margin-top: 1rem;
                margin-left: 1rem;
              }

              h3, p {
                margin-top: 1rem;
              }

              .item {
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
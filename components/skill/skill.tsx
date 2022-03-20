import {ISkill} from "../../payloads/skill";
import React from "react";

export default function Skill({skills}: { skills: ISkill[] }) {
    return (
        <div className={"grid"}>
            <h2>Skill</h2>
            {skills.map((skill, index) => (
                <div key={index} className={"skill"}>
                    <h3>{skill.category}</h3>
                    {skill.items.map((item) => (
                        <div className={"skill-item"}>{item.name}</div>
                    ))}
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

              .skill {
                margin-top: 1rem;
              }

              h2 {
                grid-row: 1 / ${skills.length + 1};
              }

              h3 {
                display: inline;
                font-size: 1.2em;
                color: #53a44c;
                font-weight: bold;
                margin-right: 1rem;
              }

              .skill-item {
                display: inline-block;
                padding: 5px;
                border: 1px solid #ccc;
                font-size: 8pt;
                border-radius: 5px;
              }

              @media (max-width: 600px) {
                h3 {
                  display: block;
                }

                .grid {
                  grid-template-columns: 1fr;
                }
              }

            `}</style>
        </div>
    );
}
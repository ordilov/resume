import React from "react";
import {IProject} from "../../payloads/project";

export default function Project({projects}: { projects: IProject[] }) {
    return (
        <div className={"grid"}>
            <h2>Project</h2>
            {projects.map((project, idx) => {
                return (
                    <div className={"grid-item"} key={`project${idx}`}>
                        <h3>{project.title}</h3>
                        <div className={"descriptions"}>
                            {project.description.map(
                                (description, index) =>
                                    <li key={`pro${idx}desc${index}`}>{description}</li>
                            )}
                        </div>
                    </div>)
            })}

            <style jsx>{`
              a {
                color: #53a44c;
                font-size: 1em;
              }

              h3 {
                margin-bottom: 0.5em;
              }

              h2 {
                grid-row: 1 / ${projects.length + 1};
              }
              
              li {
              
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
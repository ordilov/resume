import React from "react";
import {IProject} from "../../payloads/project";

export default function Project({projects}: { projects: IProject[] }) {
    return (
        <div className={"grid"}>
            <h2>Project</h2>
            {projects.map((project) => {
                return (
                    <div className={"grid-item"}>
                        <h3>{project.title}</h3>
                        {project.description.map(
                            (description) => <li>{description}</li>
                        )}
                    </div>)
            })}

            <style jsx>{`
              a {
                color: #53a44c;
                font-size: 1em;
              }

              h2 {
                grid-row: 1 / ${projects.length + 1};
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
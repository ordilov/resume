import {IETC} from "../../payloads/etc";
import React from "react";

export default function Etc({etc}: { etc: IETC[] }) {
    return (
        <div className={"grid"}>
            <h2>Etc</h2>
            {
                etc.map((e) => {
                    return (
                        <div className={'etc-item'}>
                            <h3>{e.title}</h3>
                            <div className={"date"}>{e.startAt}</div>
                        </div>
                    )
                })
            }
            <style jsx>{`
              a {
                color: #53a44c;
                font-size: 1em;
              }

              h2 {
                grid-row: 1 / ${etc.length + 1};
              }

              .etc-item {
                margin-left: 1em;
              }

              .grid {
                display: grid;
                background-color: #f0f0f0;
                padding: 10px;
                grid-column-gap: 1rem;
                grid-template-columns: 220px 1fr;
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
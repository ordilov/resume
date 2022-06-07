import {IETC} from "../../payloads/etc";
import React from "react";

export default function Etc({etc}: { etc: IETC[] }) {
    return (
        <div className={"grid"}>
            <h2>Etc</h2>
            {
                etc.map((e, index) => {
                    return (
                        <div className={'etc-item'} key={`etc${index}`}>
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

              h3 {
                display: inline-block;
                margin-right: 10px;
              }

              .date {
                display: inline-block;
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
import React from "react";

export default function Introduction({content}: { content: string[] }) {
    return (
        <div className={"grid"}>
            <h2>Introduction</h2>
            {content.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <style jsx>{`
              p {
                margin-top: 1.8em;
                margin-bottom: 0;
              }

              h2 {
                grid-row: 1 / ${content.length + 1};
              }
   
            `}</style>
        </div>
    );
}
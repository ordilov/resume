import React from "react";

export default function Introduction({content}: { content: string[] }) {
    return (
        <div className={"grid"}>
            <h2 className={"menu"}>Introduction</h2>
            {content.map((item, index) => (
                <p className={"item"} key={index}>{item}</p>
            ))}

            <style jsx>{`
              .grid {
                display: grid;
                background-color: #f0f0f0;
                padding: 10px;
                grid-template-columns: 250px 1fr;
                row-gap: 0;
              }

              .menu {
                grid-row: 1 / 5;
                font-size: 1.5em;
                font-weight: bold;
                margin-top: 1rem;
                margin-left: 1rem;
              }

              .item {
                margin-top: 1rem;
                margin-bottom: 0;
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
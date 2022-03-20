import {IArticle} from "../../payloads/article";
import React from "react";

export default function Article({articles}: { articles: IArticle[] }) {
    return (
        <div className={"grid"}>
            <h2>Article</h2>
            {articles.map((article, index) => (
                <div key={index} className={"grid-item"}>
                    <a href={article.href}>{article.content}</a>
                </div>
            ))}


            <style jsx>{`
              a {
                color: #53a44c;
                font-size: 1em;
              }

              h2 {
                grid-row: 1/ ${articles.length + 1};
              }

              .grid-item {
                margin-left: 1em;
                margin-top: 2em;
              }

              .grid {
                display: grid;
                background-color: #f0f0f0;
                padding: 10px;
                grid-column-gap: 1rem;
                grid-template-columns: 220px 1fr;
                grid-template-rows: 1fr 30px 30px 30px;
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
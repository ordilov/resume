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
                color: #699de3;
                font-size: 1em;
              }

              h2 {
                grid-row: 1 / ${articles.length + 1};
              }

              .grid-item {
                margin-top: 1.2em;
              }

              @media (max-width: 600px) {
                h2 {
                  margin-bottom: 0;
                }
              }

            `}</style>
        </div>
    );
}
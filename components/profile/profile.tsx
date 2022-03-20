import Face from "./face";
import React from "react";
import {IProfile} from "../../payloads/profile";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFeatherPointed} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Profile({profile}: { profile: IProfile }) {
    const {name, email, blog, github} = profile;
    return (
        <div className={"grid"}>
            <Face/>
            <h2>{name}</h2>
            <a href={email} className={"item"}>
                <FontAwesomeIcon icon={faEnvelope}/> <span> {email} </span>
            </a>
            <a href={blog} className={"item"}>
                <FontAwesomeIcon icon={faFeatherPointed}/> <span> {blog} </span>
            </a>
            <a href={github} className={"item"}>
                <FontAwesomeIcon icon={faGithub}/> <span> {github} </span>
            </a>
            <hr/>
            <style jsx>{`
              a {
                color: #53a44c;
                font-size: 1em;
                margin-left: 1em;
              }

              h2 {
                font-size: 24pt;
                margin-top: 1em;
              }

              span {
                margin-left: 1em;
              }

              .item {
                margin-top: 1em;
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

                h2 {
                  text-align: center;
                }

                a {
                  margin-left: 7em;
                  margin-bottom: 1em;
                }

                .item {
                  margin-top: 0;
                }
              }
            `}</style>
        </div>
    );
}
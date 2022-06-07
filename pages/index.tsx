import type {NextPage} from 'next'
import Head from "next/head";
import Profile from "../components/profile/profile";
import Introduction from "../components/introduction/introduction";
import Skill from "../components/skill/skill";
import Experience from "../components/experience/experience";
import Article from "../components/article/article";
import Education from "../components/education/education";
import Etc from "../components/etc/etc";
import Footer from "../components/footer/footer";
import Project from "../components/project/project";
import {profile} from "../payloads/profile";
import {head} from "../payloads/head";
import {content} from "../payloads/content";
import {experiences} from "../payloads/experience";
import {educations} from "../payloads/education";
import {skills} from "../payloads/skill";
import {projects} from "../payloads/project";
import {articles} from "../payloads/article";
import {etc} from "../payloads/etc";


const Home: NextPage = () => {
    return (
        <div className={"container"}>
            <Head>
                <title>{head.title}</title>
                <link rel={"shortcut icon"} href={''}/>
            </Head>
            <Profile profile={profile}/>
            <Introduction content={content}/>
            <Skill skills={skills}/>
            <Experience experiences={experiences}/>
            <Project projects={projects}/>
            <Article articles={articles}/>
            <Education educations={educations}/>
            <Etc etc={etc}/>
            <Footer/>
            <style jsx>{`
              .container {
                width: 100%;
                padding-left: 15px;
                padding-right: 15px;
                margin-right: auto;
                margin-left: auto;
              }

              @media (min-width: 768px) {
                .container {
                  width: 750px;
                }
              }

            `}</style>
        </div>
    )
}

export default Home

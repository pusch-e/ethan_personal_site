import React from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Navbar from "../components/navbar"
import Layout from "../components/layout"

const Projects = () => {

    const pageInfo = {
        pageName: "Projects"
    }

    const videoGameDatabaseTechStack = [
        { name: "React" }, { name: "Java Spring" }, { name: "MySQL" }
    ]

    return (
        <Layout pageName={pageInfo.pageName}>
            <div className="main-projects">
                
                <div className="header fade-in-top">
                    <h1 className="light-blue">Projects</h1>
                </div>

                <div className="projects-container fade-in">

                    <div className="project-item">
                        <h2> Video Game Database </h2>
                        <p> 2020 </p>

                        <div className="project-item-text">
                            <Image src="/video_game_database_preview.gif" width={580} height={300}/>
                        </div>

                        <p className="project-item-text"> 
                            A front end interface that allows the user to perform CRUD operations 
                            to alter domain objects in a MySQL database. Users have varying roles
                            that restrict which users can CRUD which objects. (Code available from 
                            private repository upon request)
                        </p>
                        <div className="tech-stack-list">
                            {
                                videoGameDatabaseTechStack.map( (tech, i) =>
                                    <div key={i} className="tech-stack-item">
                                        <p className="light-blue">{tech.name}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <Link href="https://github.com/rakovskyp/addicted_valorant_">
                        <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                            <div className="project-item">
                                <h2> Addicted to VALORANT </h2>
                                <p> 2020 </p>

                                <div className="project-item-text">
                                    <Image src="/addicted_to_valorant.png" width={580} height={300}/>
                                </div>

                                <p className="project-item-text"> 
                                    A web application that uses Riot Games' API endpoint in order to display
                                    how much time a user has spent on the multiplayer videogame, VALORANT.
                                </p>

                                <div className="tech-stack-list">
                                    <div className="tech-stack-item">
                                        <p className="light-blue">React</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link href="https://github.com/pusch-e/ethan_personal_site">
                        <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                            <div className="project-item">
                                <h2> Personal Website </h2>
                                <p> 2020 </p>

                                <div className="project-item-text">
                                    <Image src="/personal_site_img.png" width={580} height={305}/>
                                </div>

                                <p className="project-item-text"> 
                                    The website you are on right now!
                                </p>
                                <div className="tech-stack-list">
                                    <div className="tech-stack-item">
                                        <p className="light-blue">React</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
  
export default Projects;
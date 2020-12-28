import React from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/navbar"

const Projects = () => {

    const pageInfo = {
        pageName: "Projects"
    }

    const videoGameDatabaseTechStack = [
        { name: "React" }, { name: "Java Spring" }, { name: "MySQL" }
    ]

    return (
        <div className="main-projects">
            <Navbar pageName={pageInfo.pageName}/>

            <div className="projects-container fade-in">

                <div className="project-item">
                    <h2> Videogame Database </h2>
                    <p> 2020 </p>
                    <p className="project-item-text"> 
                        A front end interface that allows the user to perform CRUD operations 
                        to alter domain objects in a MySQL database. Users have varying roles
                        that restrict which users can CRUD which objects.
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
    );
}
  
export default Projects;
import React from "react"
import Link from "next/link"
import Navbar from "../components/navbar"

const Projects = () => {

    const pageInfo = {
        pageName: "Projects"
    }

    return (
        <div>
            <Navbar pageName={pageInfo.pageName}/>

            <div className="main">
                <h1> Projects </h1>
            </div>
        </div>
    );
}
  
export default Projects;
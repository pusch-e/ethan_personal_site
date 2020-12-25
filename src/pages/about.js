import React from "react"
import Link from "next/link"
import Navbar from "../components/navbar"

const About = () => {
    const pageInfo = {
        pageName: "About"
    }

    return (
        <div>
            <Navbar pageName={pageInfo.pageName}/>

            <div className="main">
                <h1> About </h1>
            </div>
        </div>
    );
}
  
export default About;
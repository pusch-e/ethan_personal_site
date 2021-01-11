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

            <div className="header fade-in-top">
                <h1 className="light-blue">About</h1>
            </div>

            <div className= "experience-container fade-in">
                <h2>
                    Hello! I'm Ethan Pusch, an aspiring software engineer and third-year student at Northeastern University.
                    I'm currently based in Boston, MA, but grew up in the suburbs of Tappan, New York.  
                    I have always been captivated by the endless possibilites presented by from coding and began learning Java,
                    my first programming language, while in middle school. It all started at SummerTech, a sumemr camp that teaches 
                    children basic coding concepts.  
                </h2>
            </div>
        </div>
    );
}
  
export default About;
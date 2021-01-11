import React from "react"
import Link from "next/link"
import Navbar from "../components/navbar"
import Image from "next/image"

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

            <div className= "about-container fade-in">
                <h4>
                    <div className="about-pic fade-in-from-right">
                        <Image className="about-pic" src="/ethan_side_pic.jpeg" width={300} height={467}/>
                    </div>

                    Hello! I'm 
                    <span className="light-blue"> Ethan Pusch</span>,
                    an aspiring software engineer and third-year student at 
                    <span className="light-blue"> Northeastern University</span>.
                    I'm currently based in Boston, MA, but I  grew up in the suburbs of Tappan, New York.  
                    <br/> <br/>
                    I have always been captivated by the endless possibilites presented by coding and began learning Java
                    in middle school. It all started at 
                    <span className="light-blue"> SummerTech</span>
                    , a summer camp that teaches children basic coding concepts. 
                    I would later become a teacher here, and my fascination with coding only accelerated as time went on. 
                    As college approached, majoring in Computer Science seemed like my next logical step. 
                    <br/> <br/>
                    Influenced by the CEO of the 
                    <span className="light-blue"> Xogene Services</span>
                    , a company that I previously interned at, I decided to study 
                    Business Administration as well. I was convinced that the theory and logic that I would obtain from 
                    a Computer Science degree would be paramount to my future career, but that general Business knowledge is 
                    indispensable as well. Therefore, a minor in Business was the perfect addition. 
                    <br/> <br/>
                    Northeastern made me realize that I have so much yet to learn in this ever expanding field. Although it was
                    initially daunting, I dove in head first to the new technologies that I had not yet explored and my passion 
                    for creating through code only continued to grow. When I am not debugging, you can find me at a nearby field
                    practicing with my 
                    <span className="light-blue"> Ultimate Frisbee </span> 
                    teammates or 
                    <span className="light-blue"> blue biking </span> 
                    around the city.
                    <br/> <br/>
                    Feel free to explore this website to see my recent projects and past work experiences, and reach out if you want to chat!
                </h4>

            </div>
        </div>
    );
}
  
export default About;
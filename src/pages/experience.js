import React from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/navbar"

const Experience = () => {

    const pageInfo = {
        pageName: "Experience"
    }

    const lenelS2TechStack = [
        { name: "Python" }, { name: "Bash" }, { name: "C" }, { name: "C++" }, { name: "C#" }, { name: "Ubuntu Linux" }, { name: "SQL" }
    ]

    const xogeneTechStack = [
        { name: "Python" }, { name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Selenium" }, { name: "XSLT" }, { name: "XML" }
    ]

    return (
        <div>
            <Navbar pageName={pageInfo.pageName}/>

            <div className="header fade-in-top">
                <h1 className="light-blue">Work Experience</h1>
            </div>

            <div className="experience-container fade-in">

                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-header-item">
                            <h2> Software Engineer Co-op </h2>
                            <Link href="https://www.lenels2.com/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <h3 className="light-blue"> LenelS2 </h3>
                                </a>
                            </Link>
                            <h4> January - June 2020 </h4>
                        </div>
                        <div className="experience-header-item">
                            <Link href="https://www.lenels2.com/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <Image src="/lenels2_logo.png" width={220} height={40}/>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <p className="experience-item-description"> 
                        While at LenelS2, I worked as a part of their Video Management System (VMS) team. I contributed
                        to their flagship video system product, the VRx. 
                        <br/> <br/>
                        Upon joining, I was eager to contribute to VRx's
                        exciting, in progress feature--its real-time object detection based surveillence software. Although I 
                        have since taken a Computer Systems course (after my time with LenelS2), I was unfamiliar 
                        with their tech stack at the start of my co-op assignment. I had to quickly become familiar with 
                        Ubuntu Linux and working strictly with the command line interface. 
                        <br/> <br/>
                        After self-teaching REST commands
                        to interact with their APIs and daemons, I developed a variety of test platforms in Python, C#, and Bash. 
                        These utilities were used in order to support back-end features of the VRx. Despite the disruption that
                        the Covid-19 virus caused halfway through my co-op experience, I continued to work dilligently even after
                        transitioning to working remotely. While remote, I examined a threading issue that was affecting the performance
                        of a daemon related to camera analytics. I also created a logging function in C++ in order to output 
                        important debugging information from the new data pipeline that LenelS2 was implementing.
                        <br/> <br/>
                        I am grateful 
                        for my experience at LenelS2 and look forward to continuing to grow as a software engineer!
                    </p>

                    <div className="tech-stack-list">
                        {
                            lenelS2TechStack.map( (tech, i) =>
                                <div key={i} className="tech-stack-item">
                                    <p className="light-blue">{tech.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                
                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-header-item">
                            <h2> Front End Intern </h2>
                            <Link href="https://www.xogene.com/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <h3 className="light-blue"> Xogene Services LLC </h3>
                                </a>
                            </Link>
                            <h4> June - August 2017 and 2018 </h4>
                        </div>
                        <div className="experience-header-item">
                            <Link href="https://www.xogene.com/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <Image src="/xogene_logo_cropped.png" width={210} height={40}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <p className="experience-item-description"> 
                        My internships at Xogene allowed me to get my feet wet in the world of software engineering, as this was my first
                        time working in an agile team development environment. I was still in highschool during this experience, so this
                        opportunity was great as I realized how much I had yet to learn. 
                        <br/> <br/>
                        Xogene is a startup company that has a light-weight,
                        but strong software team. Due to the small company size, I was able to directly communicate with higher-ups and gain
                        exposure to our front end features in a much closer way than I would have been able to at another company. While here,
                        I developed cross browser test scripts using Python and Selenium in order to verify their new front end features.
                        I also produced unique and interactive elements that were integrated into their dashboard product using
                        HTML, CSS, and JavaScript. Lastly, I helped develop their Environmental Monitoring platform. This platform allows
                        clients to stay up to date with the most recent regulatory information regarding pharmaceutical laws and requirements.
                    </p>
                    <div className="tech-stack-list">
                        {
                            xogeneTechStack.map( (tech, i) =>
                                <div key={i} className="tech-stack-item">
                                    <p className="light-blue">{tech.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <div className="experience-header-item">
                            <h2> Junior Java Teacher </h2>
                            <Link href="https://www.summertech.net/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <h3 className="light-blue"> SummerTech </h3>
                                </a>
                            </Link>
                            <h4> June - August 2016 </h4>
                        </div>
                        <div className="experience-header-item">
                            <Link href="https://www.summertech.net/">
                                <a className="no-decoration-link" target="_blank" rel="noopener noreferrer">
                                    <Image src="/summertech_logo.png" width={150} height={75}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <p className="experience-item-description"> 
                        This is one of the most fun work experiences that I have had. SummerTech is a summer camp that I used to attend,
                        and it was here where I initally learned how to code. 
                        <br/> <br/>
                        I chose to learn Java as my first language because it was 
                        the most popular course while I was attending. Once I was old enough, I applied to become a teacher.
                        With all of the Java experience that I had under my belt from attending the camp for years, I was offered my first 
                        job as a junior Java teacher. Over the course of 5 weeks, I was given 2-4 students to teach each week. Each 
                        student had varying levels of experience with coding, and I had to assign projects based on their
                        respective proficiencies with Java. 
                        <br/> <br/>
                        Outside of class, I was a counselour who was tasked with other duties
                        related to ensuring entertainment and safety for the students in their extra cirricular activites while at SummerTech.
                    </p>
                    <div className="tech-stack-list">
                        <div className="tech-stack-item">
                            <p className="light-blue">Java</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Experience;
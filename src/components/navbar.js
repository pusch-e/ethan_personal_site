import React, { useState } from "react"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faFileAlt, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"

library.add(faAddressCard, faFileAlt, faBriefcase, faCode, faEnvelope, fab)

const Navbar = ({pageName}) => {

    const [toggleHoverAbout, setToggleHoverAbout] = useState(false);
    const [toggleHoverExp, setToggleHoverExp] = useState(false);
    const [toggleHoverProj, setToggleHoverProj] = useState(false);
    const [toggleHoverRes, setToggleHoverRes] = useState(false);

    const pageNavItems = [
        {
            setHover: setToggleHoverAbout,
            isHover: toggleHoverAbout,
            linkTo: "/about",
            icon: "address-card",
            linkText: "About"
        },
        {
            setHover: setToggleHoverExp,
            isHover: toggleHoverExp,
            linkTo: "/experience",
            icon: "briefcase",
            linkText: "Experience"
        },
        {
            setHover: setToggleHoverProj,
            isHover: toggleHoverProj,
            linkTo: "/projects",
            icon: "code",
            linkText: "Projects"
        },
        {
            setHover: setToggleHoverRes,
            isHover: toggleHoverRes,
            linkTo: "http://localhost:3000/resume.pdf",
            icon: "file-alt",
            linkText: "Resume"
        }
    ]

    const externalNavItems = [
        {
            linkTo: "https://github.com/pusch-e",
            icon: ['fab', 'github']
        },
        {
            linkTo: "https://www.linkedin.com/in/ethanpusch",
            icon: ['fab', 'linkedin']
        },
        {
            linkTo: "mailto:pusch.e@northeastern.edu",
            icon: "envelope"
        }
    ]

    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <div className="nav-link">
                            <Image src="/emanemotemed.png" width={48} height={48} className="self-picture"/>
                        </div>
                    </li>

                    <li className="nav-name-item">
                        <Link href="/">
                            <a className={`nav-link ${pageName === "Home" ? "nav-link-selected" : ""}`} id="nav-name-link">
                                <span className="name-text"> Ethan Pusch </span>
                            </a>
                        </Link>
                    </li>

                    {
                        pageNavItems.map( (pageNavItem, i) =>
                            <li key={i} className="nav-item" 
                             onMouseEnter={() => pageNavItem.setHover(true)}
                             onMouseLeave={() => pageNavItem.setHover(false)}>
                                <Link href={`${pageNavItem.linkTo}`}>
                                    <a className={`nav-link ${pageName === pageNavItem.linkText ? "nav-link-selected" : ""}`} 
                                     target={pageNavItem.linkText === "Resume" ? "_blank" : ""} 
                                     rel={pageNavItem.linkText === "Resume" ? "noopener noreferrer" : ""}>
                                        { pageNavItem.isHover ?
                                        <FontAwesomeIcon className="fa-icon" icon={pageNavItem.icon} fixedWidth/>
                                        :
                                        <span className="link-text"> {pageNavItem.linkText} </span>
                                        }
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                
                    <li className="nav-item" id="nav-item-external-links">
                        <div className="external-links">
                            {
                                externalNavItems.map( (externalNavItem, i) =>
                                    <Link key={i} href={`${externalNavItem.linkTo}`}>
                                        <a className="external-link" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon className="fa-icon-external" icon={externalNavItem.icon} fixedWidth/>
                                        </a>
                                    </Link>
                                )
                            }
                        </div>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
  
export default Navbar;
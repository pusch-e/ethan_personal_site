import React from "react"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faFile, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"

library.add(faAddressCard, faFile, faBriefcase, faCode, faEnvelope, fab)

const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">

            <li className="nav-item">
                <div className="nav-link" id="nav-link-pic">
                    <Image src="/emanemotemed.png" width={55} height={55} className="self-picture"/>
                </div>
            </li>

            <li className="nav-name-item">
                <Link href="/home">
                    <a className="nav-name-link">
                        <span className="name-text"> Ethan Pusch </span>
                    </a>
                </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">
                  <FontAwesomeIcon className="fa-icon" icon="address-card" fixedWidth/>
                  <span className="link-text">About</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/experience">
                <a className="nav-link">
                  <FontAwesomeIcon className="fa-icon" icon="briefcase" fixedWidth/>
                  <span className="link-text">Experience</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link">
                  <FontAwesomeIcon className="fa-icon" icon="code" fixedWidth/>
                  <span className="link-text">Projects</span>
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">
                  <FontAwesomeIcon className="fa-icon" icon="file" fixedWidth/>
                  <span className="link-text">Resume</span>
                </a>
              </Link>
            </li>
            
            <li className="nav-item" id="nav-item-external-links">
              <div className="external-links">
                <Link href="https://github.com/pusch-e">
                  <a className="external-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'github']} fixedWidth/>
                  </a>
                </Link>

                <Link href="https://www.linkedin.com/in/ethanpusch">
                  <a className="external-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-icon" icon={['fab', 'linkedin']} fixedWidth/>
                  </a>
                </Link>

                <Link href="mailto:pusch.e@northeastern.edu">
                  <a className="external-link">
                    <FontAwesomeIcon className="fa-icon" icon="envelope" fixedWidth/>
                  </a>
                </Link>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
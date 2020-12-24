import React, { useState } from "react"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faFile, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"

library.add(faAddressCard, faFile, faBriefcase, faCode, faEnvelope, fab)

const Navbar = () => {

    const [toggleHover, setToggleHover] = useState(false);
    const [toggleHover2, setToggleHover2] = useState(false);
    const [toggleHover3, setToggleHover3] = useState(false);
    const [toggleHover4, setToggleHover4] = useState(false);

    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">

            <li className="nav-item">
                <div className="nav-link">
                    <Image src="/emanemotemed.png" width={55} height={55} className="self-picture"/>
                </div>
            </li>

            <li className="nav-name-item">
                <Link href="/home">
                    <a className="nav-link" id="nav-name-link">
                        <span className="name-text"> Ethan Pusch </span>
                    </a>
                </Link>
            </li>

            <li className="nav-item" onMouseEnter={() => setToggleHover(true)} onMouseLeave={() => setToggleHover(false)}>
              <Link href="/about">
                <a className="nav-link">
                  { toggleHover ?
                  <FontAwesomeIcon className="fa-icon" icon="address-card" fixedWidth/>
                  :
                  <span className="link-text">About</span>
                  }
                </a>
              </Link>
            </li>

            <li className="nav-item" onMouseEnter={() => setToggleHover2(true)} onMouseLeave={() => setToggleHover2(false)}>
              <Link href="/experience">
                <a className="nav-link">
                  { toggleHover2 ?
                  <FontAwesomeIcon className="fa-icon" icon="briefcase" fixedWidth/>
                  :
                  <span className="link-text">Experience</span>
                  }
                </a>
              </Link>
            </li>

            <li className="nav-item" onMouseEnter={() => setToggleHover3(true)} onMouseLeave={() => setToggleHover3(false)}>
              <Link href="/projects">
                <a className="nav-link">
                  { toggleHover3 ?
                  <FontAwesomeIcon className="fa-icon" icon="code" fixedWidth/>
                  :
                  <span className="link-text">Projects</span>
                  }
                </a>
              </Link>
            </li>

            <li className="nav-item" onMouseEnter={() => setToggleHover4(true)} onMouseLeave={() => setToggleHover4(false)}>
              <Link href="/about">
                <a className="nav-link">
                  { toggleHover4 ?
                  <FontAwesomeIcon className="fa-icon" icon="file" fixedWidth/>
                  :
                  <span className="link-text">Resume</span>
                  }
                </a>
              </Link>
            </li>
            
            <li className="nav-item" id="nav-item-external-links">
              <div className="external-links">
                <Link href="https://github.com/pusch-e">
                  <a className="external-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-icon-external" icon={['fab', 'github']} fixedWidth/>
                  </a>
                </Link>

                <Link href="https://www.linkedin.com/in/ethanpusch">
                  <a className="external-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-icon-external" icon={['fab', 'linkedin']} fixedWidth/>
                  </a>
                </Link>

                <Link href="mailto:pusch.e@northeastern.edu">
                  <a className="external-link">
                    <FontAwesomeIcon className="fa-icon-external" icon="envelope" fixedWidth/>
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
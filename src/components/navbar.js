import React from "react"
import Link from "next/link"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faFile, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faAddressCard, faFile, faChevronRight)

const Navbar = () => {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-name">
                <Link href="/home">
                    <a className="nav-link">
                        <span className="link-text name-text"> Ethan </span>
                        <FontAwesomeIcon className="fa-icon fa-icon-chevron" icon="chevron-right" fixedWidth/>
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
              <Link href="/about">
                <a className="nav-link">
                  <FontAwesomeIcon className="fa-icon" icon="file" fixedWidth/>
                  <span className="link-text">Resume</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
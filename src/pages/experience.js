import React from "react"
import Link from "next/link"
import Navbar from "../components/navbar"

const Experience = () => {

    const pageInfo = {
        pageName: "Experience"
    }

    return (
        <div>
            <Navbar pageName={pageInfo.pageName}/>

            <div className="main">
                <h1> Experience </h1>
            </div>
        </div>
    );
}
  
export default Experience;
import React from "react"
import Link from "next/link"

const About = () => {
    return (
      <div>
        <h1> About </h1>
        <Link href="/home">
           <a>Home</a>
        </Link>
      </div>
    );
  }
  
  export default About;
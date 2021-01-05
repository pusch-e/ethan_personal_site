import React from "react"
import Link from "next/link"
import Navbar from "../components/navbar"
//import "../styles/main.css"

const Home = () => {

  const pageInfo = {
    pageName: "Home"
  }

  return (
    <div className="main-home">
      <Navbar pageName={pageInfo.pageName}/>

      <div className="home-container">
        <div className="fade-in-bottom-fast">
          <h1 className="large-text"> Hello! I'm <span className="light-blue">Ethan Pusch</span>. </h1>
        </div>
        
        <div className="fade-in-bottom">
          <h2>
            I am a third year at Northeastern University pursuing a major in Computer Science and a minor in Business.
            I believe that there is a solution for every problem.
          </h2>
        </div>
      </div>

    </div>
  );
}

export default Home;

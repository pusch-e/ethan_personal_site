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
          <h1 className="large-text"> Hello! </h1>
        </div>

        <div className="fade-in-bottom">
          <h1> My name is <span className="highlight">Ethan Pusch</span>.</h1>
        </div>
        
        <div className="fade-in-bottom-slow">
          <h2>
            I am a third year student at Northeastern University majoring in Computer Science,
            and I am looking for internship opportunities. Explore this website and reach out if you want to chat!
          </h2>
        </div>
      </div>

    </div>
  );
}

export default Home;

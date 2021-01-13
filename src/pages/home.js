import React from "react"
import Navbar from "../components/navbar"
import Layout from "../components/layout"

const Landing = () => {

  const pageInfo = {
    pageName: "Home"
  }

  return (
    <Layout pageName={pageInfo.pageName}>
      <div className="main-home">
        
        <div className="home-container">
          <div className="fade-in-bottom-fast">
            <h1 className="large-text"> Hello! I'm <span className="light-blue">Ethan Pusch</span>. </h1>
          </div>
          
          <div className="fade-in-bottom">
            <h2>
              I'm a third-year student at <span className="light-blue">Northeastern University</span> pursuing a major in Computer Science and a minor in Business Administration.
              <br />
              <br />
              <div className="fade-in-bottom-slow">
                I'm passionate about developing <span className="light-blue">creative</span> and <span className="light-blue">impactful</span> solutions.
              </div>
            </h2>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Landing;

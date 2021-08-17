import React from "react";
import About from "./About";
import Contact from "./Contact";
import Feature from "./Feature";
import Footer from "./Footer";
import Home from "./Home";
import Screenshot from "./Screenshot";
import AppleIcon from "@material-ui/icons/Apple";
import AdbIcon from "@material-ui/icons/Adb";
import Testemonial from "./Testemonial";

const Main = () => {
  return (
    <div className="main">
      <div className="home">
        <Home />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="feature">
        <Feature />
      </div>
      <div className="screenshot">
        <Screenshot />
      </div>
      <div className="test">
        <Testemonial/>
      </div>
      <div className="container">
        <div>
          <div className="container1">
            <h1>DOWNLOAD OUR APP</h1>
            <div>
              <button>
                <span>
                  <AppleIcon />
                </span>
                APP STORE
              </button>
              <button>
                <span>
                  <AdbIcon />
                </span>
                PLAY STORE
              </button>
            </div>
          </div>
          <Footer />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Main;

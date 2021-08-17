import React from "react";
import img from '../image/image1.png'
import AppleIcon from '@material-ui/icons/Apple';
import TelegramIcon from '@material-ui/icons/Telegram';

const Home = () => {
  return (
    <div>
      <div className="home-left">
          <h1>Intrigd The Ultimate Reading App.</h1>
          <div>
              <button><AppleIcon/> APPLE STORE</button>
              <button><TelegramIcon/> GOOGLE PLAY</button>
          </div>
      </div>
      <div className="home-right">
          <img src={img} alt="..." />
      </div>
    </div>
  );
};

export default Home;

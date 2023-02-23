import React, { useEffect } from "react";

import './HomePage.scss'

const HomePage: React.FC<{}> = () => {
  return (
    <div className="home-page">
      <div>HomePage</div>
      <div className="icp">
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023003826号</a>
      </div>
    </div>
  );
}

export default HomePage;
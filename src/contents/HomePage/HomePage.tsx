import React from "react";
import Beian from '../../../public/beian.png'

import './HomePage.scss'

const HomePage: React.FC<{}> = () => {
  return (
    <div className="home-page">
      <div className="title">Welcome To My Code</div>
      <div className="icon">
        <img src="https://img.alicdn.com/imgextra/i2/O1CN01TW5oxK1Q5hF0xpl4L_!!6000000001925-0-tps-2000-1500.jpg" alt="" style={{ width: 800 }} />
      </div>
      <div className="icp">
        <a style={{ display: 'flex', marginRight: 12 }} target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016984">
          <img src={Beian} style={{ marginRight: 12 }} />
          <div>浙公网安备 33011002016984号</div>
        </a>
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023003826号</a>
      </div>
    </div >
  );
}

export default HomePage;
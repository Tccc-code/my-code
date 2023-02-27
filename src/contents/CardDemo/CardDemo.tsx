import React, { useState, useEffect, useLocation } from "react";

import './CardDemo.scss';

const CardDemo: React.FC<{}> = () => {
  const [cardType, setCardType] = useState('front');

  return (
    <div className="card-demo">
      <div className="card-box">
        <div className="card-front" style={{ transform: cardType === 'front' ? 'rotateY(0)' : 'rotateY(180deg)' }} onClick={() => { setCardType('back') }}>正面</div>
        <div className="card-back" style={{ transform: cardType === 'front' ? 'rotateY(180deg)' : 'rotateY(0)' }} onClick={() => { setCardType('front') }}>背面</div>
      </div>
      <div className="tips">原理&实现方式：</div>
      <div className="principle">
        <div className="reason-box">
          <div className="reason-title">原理</div>
          <div className="reason">1. 正面&背面为两个元素</div>
          <div className="reason">2. 两个元素相对于父级盒子定位重叠</div>
          <div className="reason">3. 元素背景不透明，防止看到背面元素</div>
          <div className="reason">4. 正面元素开始时transform: rotateY(0)</div>
          <div className="reason">5. 背面元素开始时transform: rotateY(180deg)</div>
          <div className="reason">6. 互换transform的属性值则完成</div>
          <div className="reason">7. 可添加旋转类型为3D</div>
        </div>
        <div className="type-item">
          <div className="item-title">方式1：state判断</div>
          <div className="item-text">1. 设置一个state状态type 初始为Front</div>
          <div className="item-text">2. 点击正面state修改为Back</div>
          <div className="item-text">3. 点击背面state修改为Front</div>
          <div className="item-text">4. 元素的style中transform依据state判断值</div>
        </div>
        <div className="type-item">
          <div className="item-title">方式2：点击修改style</div>
          <div className="item-text">1. 点击元素执行click函数</div>
          <div className="item-text">2. 函数接受type参数 点击正面&背面传入不同type类型</div>
          <div className="item-text">3. 获取元素 根据不同type修改元素style样式</div>
          <div className="item-text">4. 元素的style中transform互换</div>
        </div>
      </div>

    </div>
  );
}

export default CardDemo;
import React from "react";

import './DomeLine.scss';

const DomeLine: React.FC<{}> = () => {

  return (
    <div className="dom-demo">
      <div className="demo-text">
        <span className="text-span">
          渐变下划线移入&移出动画效果<br />
          测试一下:<br />
          鼠标移入的时候从元素底部的位置, 开始到结尾生成的元素线段<br />
          鼠标移入的时候从元素底部的位置, 开始到结尾消失的元素线段
        </span>
      </div>
    </div>
  );
}

export default DomeLine;
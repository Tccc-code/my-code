import React from "react";

import './RubberBand.scss';

const RubberBand: React.FC<{}> = () => {

  return (
    <div className="rubber-demo">
      <div className="title">移入小球查看效果</div>
      <div className="ball" />
    </div>
  );
}

export default RubberBand;
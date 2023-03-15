import React, { useEffect, useRef } from 'react';
import './TestDemo.scss';

const TestDemo: React.FC<{}> = () => {

  const canvasRef = useRef() as any;

  const renderCanvas = () => {
    const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    var ctx = canvasRef?.current?.getContext('2d');
    let startPoint = 0;
    const draw = () => {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      // 0, startPoint 开始的坐标 startPoint - 20结束坐标 要减去本身的高度
      let grd = ctx.createLinearGradient(0, startPoint, 0, startPoint - 20);
      //  添加渐变色
      grd.addColorStop(1, "rgba(30,144,255,0)");
      grd.addColorStop(0.75, "rgba(30,144,255,0.3)");
      grd.addColorStop(0.3, "rgba(30,144,255,75)");
      grd.addColorStop(0, "rgba(30,144,255,1)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.fillRect(0, startPoint, myCanvas.width, -20);
      startPoint += 1;
      // 元素全部展示完成
      if (startPoint >= (myCanvas.height + 20)) {
        startPoint = 0;
      }
      // 请求动画比setTime更优势 
      // 链接https://blog.csdn.net/vhwfr2u02q/article/details/79492303
      requestAnimationFrame(draw);
    }
    if (myCanvas) {
      draw();
    }
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="test-demo">
      {/* <div className="g-container">
        <ul style={{ width: 1800 }}>
          <li>Lorem ipsum 1111111</li>
          <li>Lorem ipsum 2222222</li>
          <li>Lorem ipsum 3333333</li>
          <li>Lorem ipsum 4444444</li>
          <li>Lorem ipsum 5555555</li>
          <li>Lorem ipsum 6666666</li>
          <li>Lorem ipsum 1111111</li>
        </ul>
      </div> */}
      <div className="title">自上而下的检测动画</div>
      <div className='test-img-box'>
        <img src='https://img.alicdn.com/imgextra/i2/O1CN01TW5oxK1Q5hF0xpl4L_!!6000000001925-0-tps-2000-1500.jpg' alt="" style={{ width: 400, height: 300 }} />
        <canvas ref={canvasRef} width="400" height="300" id="myCanvas" />
      </div>
    </div>
  );
}

export default TestDemo;
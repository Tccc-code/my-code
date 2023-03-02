import React, { useEffect } from "react";

import "./LineDemo.scss";

const LineDemo = () => {
  const points = [{
    x: 100,
    y: 100,
    color: 'black',
  }, {
    x: 200,
    y: 200,
    color: 'skyblue',
  }, {
    x: 200,
    y: 400,
    color: 'red',
  }, {
    x: 400,
    y: 400,
    color: 'yellow',
  }, {
    x: 300,
    y: 300,
    color: 'pink',
  }]
  const speed = 3;
  // 线段上点的数据
  const data = [] as any;
  // 每段线段的颜色
  const lineColors = [] as any;

  const draw = (ctxs: any) => {
    const first = data[0];
    ctxs.beginPath();
    ctxs.moveTo(first.x, first.y);
    let index = 1;
    let oldStep = -1;
    const timer = setInterval(() => {
      const { x, y, step } = data[index];
      index++;
      if (step !== oldStep) {
        // 当线段切换时改变颜色
        const prePoint = data[index - 2];
        oldStep = step;
        ctxs.beginPath();
        // 消除转角缺口
        ctxs.lineTo(prePoint.x, prePoint.y);
        ctxs.strokeStyle = lineColors[step];
      }
      ctxs.lineTo(x, y);
      ctxs.stroke();
      if (index === data.length) {
        clearInterval(timer);
      }
    }, 10)
  }

  useEffect(() => {
    const canvasEl = document.getElementById('lineCanvas') as HTMLCanvasElement;
    const ctx = canvasEl && canvasEl?.getContext('2d');
    if (canvasEl && ctx) {
      // 抗锯齿
      let width = canvasEl.width;
      let height = canvasEl.height;
      if (window.devicePixelRatio) {
        canvasEl.style.width = width + "px";
        canvasEl.style.height = height + "px";
        canvasEl.height = height * window.devicePixelRatio;
        canvasEl.width = width * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      ctx.lineWidth = 3;

      // 初始化画线所需点
      for (let i = 1; i < points.length; i++) {
        const { x: sx, y: sy, color: sColor } = points[i - 1];
        const { x: ex, y: ey, color: eColor } = points[i];
        let newX = sx;
        let newY = sy;
        // 生成每段线的颜色
        const gr = ctx.createLinearGradient(sx, sy, ex, ey);
        //添加颜色端点
        gr.addColorStop(0, sColor);
        gr.addColorStop(1, eColor);
        lineColors.push(gr);

        // 生成每段线的点
        data.push({ x: newX, y: newY, step: i - 1 });
        // 竖线
        if (sx === ex) {
          while (Math.abs(newY - ey) >= speed) {
            if (ey > sy) {
              newY += speed;
            } else {
              newY -= speed;
            }
            data.push({ x: newX, y: newY, step: i - 1 });
          }
          // 消除端点缺口
          data.push({ x: newX, y: ey - 0.1, step: i - 1 });
        } else {
          // 非竖线
          while (Math.abs(newX - ex) >= speed) {
            if (ex > sx) {
              newX += speed;
            } else {
              newX -= speed;
            }
            newY = (((newX - sx) / (ex - sx)) * (ey - sy)) + sy;
            data.push({ x: newX, y: newY, step: i - 1 });
          }
          newY = (((ex - 0.1 - sx) / (ex - sx)) * (ey - sy)) + sy;
          // 消除端点缺口
          data.push({ x: ex - 0.1, y: newY, step: i - 1 });
        }
      }
    }
    draw(ctx);
  }, [])
  return (
    <div className="line-demo">
      <div className="title">线性动画</div>
      <canvas width="500" height="500" id="lineCanvas" />
    </div>
  )
}

export default LineDemo;
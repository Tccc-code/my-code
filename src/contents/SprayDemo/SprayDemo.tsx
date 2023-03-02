/**
 * 粒子喷射
 * 粒子沿贝塞尔曲线喷射
 * @param width 画布宽度
 * @param height 画布高度
 * @param extraClass 额外的class名
 * @param data 配置数据
 * data配置数据
 * sx,sy 贝塞尔曲线起始点
 * ex,ey 贝塞尔曲线结束点
 * cx,cy 贝塞尔曲线控制点
 * width 粒子喷射终点宽度
 * total 贝塞尔曲线切割成多少份
 */


interface IPointData {
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  cx: number,
  cy: number,
  width: number,
  total: number,
  dots?: [],
  color: string,
  density: number
}

interface IDotItem {
  t: number,
  speed: number,
  lineX: number,
  lineY: number,
}
import React, { useRef, useEffect, useState } from 'react';
import './SprayDemo.scss';

const mockPointData: Array<IPointData> = [
  {
    sx: 0,
    sy: 25,
    ex: 1350,
    ey: 30,
    cx: 1350,
    cy: 30,
    width: 100,
    total: 500,
    dots: [],
    color: "rgb(82,192,26)",
    density: 7
  },
  {
    sx: 0,
    sy: 25,
    ex: 130,
    ey: 600,
    cx: 130,
    cy: 50,
    width: 100,
    total: 500,
    dots: [],
    color: "rgb(114,46,209)",
    density: 7
  },
  {
    sx: 0,
    sy: 25,
    ex: 400,
    ey: 600,
    cx: 400,
    cy: 50,
    width: 100,
    total: 500,
    dots: [],
    color: "rgb(135,206,235)",
    density: 7
  },
  {
    sx: 0,
    sy: 25,
    ex: 700,
    ey: 600,
    cx: 671,
    cy: 50,
    width: 100,
    total: 500,
    dots: [],
    color: "rgb(255,165,23)",
    density: 7
  },
  {
    sx: 0,
    sy: 25,
    ex: 900,
    ey: 600,
    cx: 927,
    cy: 50,
    width: 100,
    total: 500,
    dots: [],
    color: "rgb(165,50,50)",
    density: 7
  }
]
const SprayDemo: React.FC<{
  domWidth?: number;
  domHeight?: number;
  extraClass?: string;
  pointData?: Array<IPointData>
}> = ({ domWidth, domHeight, pointData, extraClass }) => {
  let data = mockPointData;
  const canvasRef = useRef() as any;

  // 粒子移动
  const dotMove = (item: IPointData, dotItem: IDotItem, ctx: any) => {
    const {
      t, speed, lineX, lineY,
    } = dotItem;
    const {
      sx, sy, ex, ey, cx, cy, total, width, color,
    } = item;
    // 起始点到控制点的x和y每次的增量
    const changeX1 = (cx - sx) / total;
    const changeY1 = (cy - sy) / total;
    // 控制点到结束点的x和y每次的增量
    const changeX2 = (ex - cx) / total;
    const changeY2 = (ey - cy) / total;
    // 计算两个动点的坐标
    const qx1 = sx + (changeX1 * t);
    const qy1 = sy + (changeY1 * t);
    const qx2 = cx + (changeX2 * t);
    const qy2 = cy + (changeY2 * t);
    // 计算得到此时的一个贝塞尔曲线上的点坐标
    const newLineX = qx1 + ((qx2 - qx1) * t / total);
    const newLineY = qy1 + ((qy2 - qy1) * t / total);
    const r = (width * t) / (total * 2);
    const angle = Math.atan2((newLineY - lineY), (newLineX - lineX));

    const rx = r * Math.sin(angle);
    const ry = r * Math.cos(angle);
    let realX = newLineX + (rx * speed);
    let realY = newLineY - (ry * speed);
    if (sx === ex && sx === cx) {
      realX = newLineX + (r * speed);
      realY = newLineY;
    } else if (sy === ey && sy === cy) {
      realX = newLineX;
      realY = newLineY + (r * speed);
    }
    // 真是显示点左边
    // 绘制点
    if (ctx) {
      ctx.fillStyle = color;
      ctx?.fillRect(realX, realY, 1, 1);
      return {
        t: t + 1, speed, lineX: newLineX, lineY: newLineY,
      };
    }
  }

  const dotDraw = () => {
    const canvasCtx = canvasRef?.current?.getContext('2d');
    canvasCtx?.clearRect(0, 0, 1000, 600);
    const newData = data?.map((item) => {
      const {
        dots = [], sy, sx, ex, ey, cx, cy,
      } = item;
      let newDots = [...dots] as any;
      canvasCtx?.beginPath();
      canvasCtx?.moveTo(sx, sy);
      canvasCtx?.quadraticCurveTo(cx, cy, ex, ey);
      // canvasCtx?.stroke();
      newDots = newDots.filter((dotItem: IDotItem) => dotItem?.t < item?.total);
      for (let i = 0; i < 5;) {
        newDots.push({
          t: 1, lineX: 0, lineY: 0, speed: (Math.random() * 2) - 1,
        });
        i += 1;
      }
      newDots = newDots.map((dotItem: IDotItem) => dotMove(item, dotItem, canvasCtx));
      return { ...item, dots: newDots };
    })
    data = newData;
    requestAnimationFrame(dotDraw);
  }
  useEffect(() => {
    setTimeout(() => requestAnimationFrame(dotDraw), 500);
  }, [])
  return (
    <div className='spray-demo'>
      <div className='title'>粒子喷射</div>
      <div className={extraClass} style={{ width: 1000, height: 600 }}>
        <canvas ref={canvasRef} width={1000} height={600} id="myCanvas" />
      </div>
    </div>
  );
}

export default SprayDemo;
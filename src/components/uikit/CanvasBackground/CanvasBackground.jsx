import React, { useRef, useEffect } from "react";
import s from "./CanvasBackground.module.scss";
import cs from "classnames";
export default function CanvasBackground({ className }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef !== null) {
      const cnv = canvasRef.current;
      const ctx = cnv.getContext("2d");

      cnv.width = innerWidth;
      cnv.height = innerHeight + 100;

      const a = (2 * Math.PI) / 6;
      const r = 60;

      function init() {
        drawGrid(cnv.width + 300, cnv.height + 300);
      }
      init();

      function drawGrid(width, height) {
        for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
          for (
            let x = r, j = 0;
            x + r * (1 + Math.cos(a)) < width;
            x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)
          ) {
            drawHexagon(x, y);
          }
        }
      }

      function drawRect(color, x, y, w, h, shadowColor, shadowBlur, gco) {
        ctx.globalCompositeOperation = gco;
        ctx.shadowColor = shadowColor || `black`;
        ctx.shadowBlur = shadowBlur || 1;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
      }

      function drawHexagon(x, y) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
          ctx.strokeStyle = "rgba(255,255,255, 0.2)";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#fff";
        }
        ctx.lineWidth = 0.5;
        ctx.closePath();
        ctx.stroke();
      }

      drawHexagon(r, r);
      drawHexagon(r + r + r * Math.cos(a), r + r * Math.sin(a));
    }
  }, []);

  return (
    <div className={className}>
      <canvas
        className={cs(s.block)}
        width="800"
        height="500"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}

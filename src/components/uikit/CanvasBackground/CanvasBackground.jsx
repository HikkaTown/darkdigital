import React, { useRef, useEffect } from "react";
import s from "./CanvasBackground.module.scss";
import cs from "classnames";
export default function CanvasBackground({ className }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef !== null) {
      const cnv = canvasRef.current;
      const ctx = cnv.getContext("2d");

      const a = (2 * Math.PI) / 6;
      const r = 50;

      function init() {
        drawGrid(425, 611);
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

      function drawHexagon(x, y) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  }, []);

  return <canvas className={cs(s.block, className)} ref={canvasRef}></canvas>;
}

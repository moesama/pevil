import { BLEND_MODES, Color } from "pixi.js";
import { Graphics } from "@pixi/react";
import { useCallback } from "react";
import { Graphics as PixiGraphics } from "@pixi/graphics";

export interface LayerData {
  id: string;
  title: string;
  pixels: { [color: string]: [number, number] };
  blendMode: BLEND_MODES;
}

export function Layer({ pixels, blendMode }: LayerData) {
  const draw = useCallback(
    (g: PixiGraphics) => {
      // 设置混合模式
      g.blendMode = blendMode;
      // 绘制像素
      Object.entries(pixels).forEach(([color, [x, y]]) => {
        g.beginFill(new Color(color));
        g.drawRect(x, y, 10, 10);
        g.endFill();
      });
    },
    [pixels, blendMode],
  );

  return <Graphics draw={draw}></Graphics>;
}

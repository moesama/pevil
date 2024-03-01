import { Color, ColorSource } from "pixi.js";
import { Graphics } from "@pixi/react";
import { Graphics as PixiGraphics } from "@pixi/graphics";
import { useCallback } from "react";

export function Background({
  color,
  width = 0,
  height = 0,
}: {
  color?: ColorSource;
  width?: number;
  height?: number;
}) {
  const draw = useCallback(
    (g: PixiGraphics) => {
      const c = new Color(color ?? 0x000000);
      c.setAlpha(c.alpha > 0 ? 1 : 0);
      if (c.alpha === 0) {
      } else {
        g.beginFill(color);
        g.drawRect(0, 0, width, height);
        g.endFill();
      }
    },
    [color],
  );

  return <Graphics draw={draw}></Graphics>;
}

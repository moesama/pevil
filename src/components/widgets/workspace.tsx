import { HTMLAttributes, useEffect, useRef } from "react";
import { cn } from "@/lib/utils.ts";
import { Container, Stage } from "@pixi/react";
import { Layer } from "@/lib/drawing/layer.tsx";
import { Application, BLEND_MODES } from "pixi.js";
import { useResizeDetector } from "react-resize-detector";

export type WorkspaceProps = HTMLAttributes<HTMLDivElement>;

export function Workspace({ className, ...props }: WorkspaceProps) {
  const app = useRef<Application>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (app.current && container.current) {
      app.current.resizeTo = container.current;
      app.current.queueResize();
    }
  }, []);

  const { width, height } = useResizeDetector({
    targetRef: container,
    onResize: () => {
      app.current?.queueResize();
    },
  });

  return (
    <div
      {...props}
      ref={container}
      className={cn("flex justify-center items-center", className)}
    >
      <Stage
        options={{
          resolution: window.devicePixelRatio || 1,
          backgroundColor: "#d2d6da",
        }}
        onMount={(a) => {
          app.current = a;
        }}
        onUnmount={() => {
          app.current = undefined;
        }}
      >
        <Container x={width! / 2} y={height! / 2}>
          <Layer
            id=""
            title=""
            pixels={{ "#ffffff": [10, 10] }}
            blendMode={BLEND_MODES.NORMAL}
          />
        </Container>
      </Stage>
    </div>
  );
}

import { HTMLAttributes, useEffect, useRef } from "react";
import { cn } from "@/lib/utils.ts";
import { Stage } from "@pixi/react";
import { Application } from "pixi.js";
import { useResizeDetector } from "react-resize-detector";
import { Provider } from "react-redux";
import { useWorkspace } from "@/store";
import { WorkspaceData } from "@/lib/data/data.ts";

export type WorkspaceProps = HTMLAttributes<HTMLDivElement> & {
  data: WorkspaceData;
};

export function Workspace({ data, className, ...props }: WorkspaceProps) {
  const app = useRef<Application>();
  const container = useRef<HTMLDivElement>(null);
  const workspace = useWorkspace();

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
      <Provider store={workspace}>
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
        ></Stage>
      </Provider>
    </div>
  );
}

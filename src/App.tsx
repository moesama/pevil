import "./assets/app.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable.tsx";
import { Menubar } from "@/components/ui/menubar.tsx";
import { UnitTree } from "@/components/widgets/unit-tree.tsx";
import { BLEND_MODES } from "@pixi/constants";
import { Tabs, TabsContent } from "@/components/ui/tabs.tsx";
import { Menu } from "@/components/widgets/menu.tsx";
import { platform } from "@/lib/utils.ts";
import { Toolbar } from "@/components/widgets/toolbar.tsx";

function App() {
  return (
    <div className="relative h-screen flex flex-col items-stretch bg-border overflow-hidden">
      {platform !== "darwin" && (
        <Menubar
          role="titlebar"
          className="relative border-none shadow-none rounded-none"
        >
          <Menu />
        </Menubar>
      )}
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel role="dock-west" className="bg-background">
              <UnitTree
                data={[
                  {
                    id: "1",
                    name: "hehe",
                    type: "artboard",
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    units: [
                      {
                        id: "2",
                        name: "haha",
                        type: "group",
                        x: 0,
                        y: 0,
                        units: [
                          {
                            id: "3",
                            name: "heihei",
                            type: "layer",
                            x: 0,
                            y: 0,
                            pixels: {},
                            blendMode: BLEND_MODES.NORMAL,
                          },
                        ],
                      },
                    ],
                  },
                ]}
                className="relative"
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel role="workspace">
              <Tabs className="w-full h-full" value="1">
                <TabsContent value="1">
                  <Toolbar />
                </TabsContent>
              </Tabs>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel
              role="dock-east"
              className="bg-background"
            ></ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          role="dock-south"
          className="bg-background"
        ></ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;

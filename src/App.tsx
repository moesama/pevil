import "./assets/app.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable.tsx";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar.tsx";
import { Workspace } from "@/components/widgets/workspace.tsx";
import { UnitTree } from "@/components/widgets/unit-tree.tsx";
import { BLEND_MODES } from "@pixi/constants";
import { File, Pencil, PenTool } from "lucide-react";
import { Label } from "@radix-ui/react-menubar";

function App() {
  return (
    <div className="relative h-screen flex flex-col items-stretch bg-border overflow-hidden">
      <Menubar
        role="titlebar"
        className="relative border-none shadow-none rounded-none"
      >
        <MenubarMenu>
          <MenubarTrigger>
            <File className="w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Pencil className="w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={true} className="gap-2">
              <Pencil className="w-4" />
              <Label>铅笔</Label>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem className="gap-2">
              <PenTool className="w-4" />
              <Label>钢笔</Label>
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
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
              <Workspace className="w-full h-full"></Workspace>
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

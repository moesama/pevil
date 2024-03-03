import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar.tsx";
import { File, Pencil, PenTool } from "lucide-react";
import { Label } from "@radix-ui/react-menubar";

export function Menu() {
  return (
    <>
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
    </>
  );
}

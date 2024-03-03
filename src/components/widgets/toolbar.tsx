import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { ReactNode, useCallback, useState } from "react";
import { Toggle } from "@/components/ui/toggle.tsx";
import {
  selectTools,
  setActiveTool,
  setTool,
  ToolGroupType,
  ToolsState,
} from "@/store/slices/tools.ts";
import { useAppDispatch, useAppSelector } from "@/store";
import { BoxSelect, Circle, CircleDashed, Pencil, Square } from "lucide-react";
import { debounce } from "lodash";
import { Card, CardContent } from "@/components/ui/card.tsx";

function ToolGroup<K extends ToolGroupType>({
  type,
  icon,
  options,
}: {
  type: K;
  icon: ReactNode;
  options: Partial<Record<ToolsState[K], ReactNode>>;
}) {
  const dispatch = useAppDispatch();
  const activeType = useAppSelector(selectTools).active;
  const value = useAppSelector(selectTools)[type] as string;
  const [open, setOpen] = useState(false);

  const showGroup = useCallback(
    debounce((show: boolean) => {
      if (show) {
        setOpen(true);
      }
    }, 1000),
    [setOpen],
  );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <Toggle
        // onClick={() => setOpen(true)}
        onMouseDown={() => showGroup(true)}
        onMouseUp={() => showGroup(false)}
        onMouseLeave={() => showGroup(false)}
        onClick={() => {
          dispatch(setActiveTool(type));
        }}
        pressed={activeType === type}
      >
        <DropdownMenuTrigger></DropdownMenuTrigger>
        {icon}
      </Toggle>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(v) => {
            dispatch(setTool([type, v as any]));
            dispatch(setActiveTool(type));
          }}
        >
          {Object.entries<ReactNode>(options).map(([key, node]) => (
            <DropdownMenuRadioItem value={key} key={key}>
              {node}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Toolbar() {
  return (
    <Card className="absolute">
      <CardContent className="flex items-center gap-1 p-1">
        <ToolGroup
          type="select"
          icon={<BoxSelect className="w-4 h-4" />}
          options={{
            rect: <BoxSelect className="w-4 h-4" />,
            oval: <CircleDashed className="w-4 h-4" />,
          }}
        ></ToolGroup>
        <ToolGroup
          type="pencil"
          icon={<Pencil className="w-4 h-4" />}
          options={{
            square: <Square className="w-4 h-4" />,
            circle: <Circle className="w-4 h-4" />,
          }}
        ></ToolGroup>
      </CardContent>
    </Card>
  );
}

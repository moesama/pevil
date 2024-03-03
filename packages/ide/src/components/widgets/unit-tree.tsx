import { HTMLAttributes } from "react";
import { Unit } from "@/lib/data/data.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { BoxSelect, Frame, Layers2 } from "lucide-react";

export type UnitTreeProps = HTMLAttributes<HTMLDivElement> & {
  data: Unit[];
  depth?: number;
};

function UnitItem({ unit, depth }: { unit: Unit; depth: number }) {
  return (
    <AccordionItem value={unit.id} className="border-none">
      <AccordionTrigger
        className="px-2 py-0 h-8 hover:no-underline text-sm hover:bg-accent"
        style={{
          paddingLeft: depth + 0.5 + "rem",
        }}
      >
        <div className="flex items-center gap-2 h-full">
          {unit.type === "layer" && (
            <Layers2 className="w-3 h-3 stroke-primary/50" />
          )}
          {unit.type === "group" && (
            <BoxSelect className="w-3 h-3 stroke-primary/50" />
          )}
          {unit.type === "artboard" && (
            <Frame className="w-3 h-3 stroke-primary/50" />
          )}
          {unit.name}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {unit.type !== "layer" && (
          <UnitTree data={unit.units} depth={depth + 1} />
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export function UnitTree({ data, depth = 0, ...props }: UnitTreeProps) {
  return (
    <div {...props}>
      <Accordion type="multiple">
        {data.map((item) => (
          <UnitItem key={item.id} unit={item} depth={depth} />
        ))}
      </Accordion>
    </div>
  );
}

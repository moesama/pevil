import { Card, CardContent } from "@/components/ui/card.tsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { Icon } from "@/components/widgets/icon.tsx";

export function Toolbar() {
  return (
    <div className="absolute left-1 top-1 flex flex-col gap-2">
      <Card>
        <CardContent className="p-1">
          <ToggleGroup type="single" className="flex-col">
            <ToggleGroupItem value="control">
              <Icon icon="object-intersect" />
            </ToggleGroupItem>
            <ToggleGroupItem value="select">
              <Icon icon="square-dashed" />
            </ToggleGroupItem>
            <ToggleGroupItem value="brush">
              <Icon icon="pencil" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-1"></CardContent>
      </Card>
    </div>
  );
}

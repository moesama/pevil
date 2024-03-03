import { Container } from "@pixi/react";
import { Background } from "@/lib/drawing/background.tsx";
import { ArtBoardData } from "@/lib/data/data.ts";

export function ArtBoard({ width, height, backgroundColor }: ArtBoardData) {
  return (
    <Container>
      <Background width={width} height={height} color={backgroundColor} />
    </Container>
  );
}

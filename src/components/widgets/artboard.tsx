import { _ReactPixi, Container, Stage } from "@pixi/react";
import { Background } from "@/lib/drawing/background.tsx";

export type ArtBoardProps = {};

export function ArtBoard({ ...props }: ArtBoardProps) {
  return (
    <Container>
      <Background />
    </Container>
  );
}

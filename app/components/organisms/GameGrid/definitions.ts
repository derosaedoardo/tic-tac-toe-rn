export type GameGridProps = {
  gameGrid: string[][];
  onCellPress: (row: number, col: number) => void;
};

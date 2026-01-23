export type SelectPlayerFormProps = {
  playerX: string;
  playerO: string;
  onChangePlayerX: (name: string) => void;
  onChangePlayerO: (name: string) => void;
  onSubmit: () => void;
  isButtonDisabled: boolean;
};

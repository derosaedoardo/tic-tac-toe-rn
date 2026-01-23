import { SelectPlayerInput } from '@/components/molecules/SelectPlayerInput';
import { FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';
import { SelectPlayerFormProps } from './definitions';
import useStyles from './styles';

const SelectPlayerForm: FunctionComponent<SelectPlayerFormProps> = ({
  playerX,
  playerO,
  onChangePlayerX,
  onChangePlayerO,
  onSubmit,
  isButtonDisabled,
}) => {
  // i18n
  const { t } = useTranslation();

  // Styles
  const { card, title } = useStyles();

  return (
    <>
      <Text style={title}>{t('selectPlayerTitle')}</Text>
      <View style={card}>
        <SelectPlayerInput
          label={t('playerX')}
          value={playerX}
          onChangeText={onChangePlayerX}
        />
        <SelectPlayerInput
          label={t('playerO')}
          value={playerO}
          onChangeText={onChangePlayerO}
        />
        <Button
          title={t('startGame')}
          onPress={onSubmit}
          disabled={isButtonDisabled}
        />
      </View>
    </>
  );
};
export default memo(SelectPlayerForm);

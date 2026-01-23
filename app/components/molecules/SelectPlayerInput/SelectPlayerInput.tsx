import { FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput } from 'react-native';
import { SelectPlayerInputProps } from './definitions';
import useStyles from './styles';

const SelectPlayerInput: FunctionComponent<SelectPlayerInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  // i18n
  const { t } = useTranslation();

  // Styles
  const { label: labelStyle, input } = useStyles();

  return (
    <>
      <Text style={labelStyle}>{label}:</Text>
      <TextInput
        style={input}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default memo(SelectPlayerInput);

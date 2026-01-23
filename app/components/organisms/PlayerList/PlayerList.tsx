import { FunctionComponent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { PlayerListProps } from './definitions';
import useStyles from './styles';

const PlayerList: FunctionComponent<PlayerListProps> = ({
  playerList,
  isLoadingPlayers,
}) => {
  // i18n
  const { t } = useTranslation();

  // Styles
  const { listCard, listTitle, listRow, listName, listWins, listEmpty } =
    useStyles();

  // Render loading, empty, or player items
  const playerListItems = useMemo(() => {
    if (isLoadingPlayers) {
      return <Text style={listEmpty}>{t('loadingPlayers')}</Text>;
    }
    const topPlayers = [...playerList]
      .sort((a, b) => b.gameWins - a.gameWins)
      .slice(0, 3);
    return topPlayers.map((player, index) => (
      <View key={index} style={listRow}>
        <Text style={listName}>{player.name}</Text>
        <Text style={listWins}>
          {t('wins')}: {player.gameWins}
        </Text>
      </View>
    ));
  }, [isLoadingPlayers, playerList, listRow, listName, listWins, listEmpty, t]);

  // Do not render if no players
  if (playerList.length === 0) {
    return null;
  }

  // Main Render
  return (
    <View style={listCard}>
      <Text style={listTitle}>{t('playersList')}</Text>
      {playerListItems}
    </View>
  );
};

export default memo(PlayerList);

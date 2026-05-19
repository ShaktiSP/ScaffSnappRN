import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import styles from './ItemOnGoingCss';
import { Image } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CARD_WIDTH = SCREEN_WIDTH * 0.44;
const CARD_HEIGHT = SCREEN_WIDTH * 0.36;

interface ItemOnGoingScreenProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

const ItemOnGoingScreen = ({
  title,
  subtitle,
  onPress,
}: ItemOnGoingScreenProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{ width: CARD_WIDTH }}
    >
      <ImageBackground
        source={require('../../resources/assets/foldarframe.png')}
        resizeMode="stretch"
        style={[
          styles.card,
          {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
          },
        ]}
      >
      
        <View>
          <Image>
            source={require('../../resources/assets/projectfolder.svg')}
          </Image>
        </View>

      
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <Text style={styles.subtitle} numberOfLines={2}>
            {subtitle}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemOnGoingScreen;
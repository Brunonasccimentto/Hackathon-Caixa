import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../StyleGuide/ColorExtension';

interface SubtitleProps {
  text: string;
  size?: number;
  onPress?: ()=> void;
}

export const DSCSubtitle: React.FC<SubtitleProps> = ({
  text,
  size = 16,
  onPress,
}) => {
  return (
    <Text
      style={[
        styles.subtitle,
        {
          fontSize: size,
          lineHeight: size * 1.4,
        },
      ]}
      onPress={onPress}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: '600',
    fontFamily: 'CAIXAStd-SemiBold',
    color: Colors.textPrimaryHighlight,
  },
});

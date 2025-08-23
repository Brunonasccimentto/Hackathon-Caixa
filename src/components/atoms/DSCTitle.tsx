import React from 'react';
import { Text } from 'react-native';
import { Colors } from '../StyleGuide/ColorExtension';
import { Size } from '../StyleGuide/SizeGuide';

interface TitleProps {
  text: string;
  size?: number;
  textColor?: string;
}

export const DSCTitle: React.FC<TitleProps> = ({
  text,
  size = Size.FontSize.small,
  textColor = Colors.textPrimaryHighlight,
}) => {
  return (
    <Text
      style={
        {
          fontSize: size,
          color: textColor,
          lineHeight: size * 1.4,
          fontWeight: '600',
        }
      }
    >
      {text}
    </Text>
  );
};

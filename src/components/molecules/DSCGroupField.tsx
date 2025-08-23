import React, {ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Colors} from '../StyleGuide/ColorExtension';
import {Size} from '../StyleGuide/SizeGuide';

interface GroupFieldProps {
  title: string;
  titleColor?: string
  toggleLabel?: string;
  children: ReactNode;
  contentStyle?: ViewStyle;
  onPress: () => void
}

export const DSCGroupField: React.FC<GroupFieldProps> = ({
  title,
  titleColor = Colors.textPrimaryHighlight,
  children,
  contentStyle,
}) => {

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>

      <View>
        <View
        style={[styles.content, contentStyle]}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    gap: Size.Spacing.nano,
    marginBottom: Size.Spacing.tiny,
    paddingVertical: Size.Spacing.micro,
    borderBottomColor: Colors.bgNeutral3,
    borderBottomWidth: 1,
  },
  content: {
    gap: Size.Spacing.nano,
  },
  title: {
    fontSize: Size.FontSize.micro,
    color: Colors.textDarkGraphite,
    fontWeight: '600',
    marginBottom: Size.Spacing.nano,
  },
});

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ButtonProps } from 'react-native';
import { Colors } from '../StyleGuide/ColorExtension';

interface DefaultButtonProps extends ButtonProps {
  isDisabled?: boolean;
  onPress: () => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  isDisabled = false,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: isDisabled ? Colors.bgNeutral3 : Colors.buttonOrange}]}
      onPress={onPress}
      disabled={isDisabled}
      {...props}
    >
      <Text style={[styles.text, {color: isDisabled ? Colors.disabledButton : Colors.textWhite}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Colors.buttonOrange,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    maxHeight: 40,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});

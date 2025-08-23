import { useEffect, useRef } from 'react';
import { View, TextInput, Animated, StyleSheet, TextInputProps } from 'react-native';
import { Colors } from '../StyleGuide/ColorExtension';
import { Size } from '../StyleGuide/SizeGuide';

interface DefaultTextFieldProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  animated?: boolean;
  isEditable?: boolean
}

export const DefaultTextField: React.FC<DefaultTextFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  animated = true,
  isEditable = true,
  ...props
}) => {
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, animatedLabel]);

  const labelStyle = {
    position: "absolute" as const,
    left: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 16],
    }),
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 4],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    color: '#888',
  };

  return (
    <View style={ isEditable ? styles.container : styles.disabled}>
      {animated ? (
        <Animated.Text style={labelStyle}>
          {placeholder}
        </Animated.Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={animated ? '' : placeholder}
        autoCapitalize="none"
        editable={isEditable}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgNeutral1,
    borderRadius: 4,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 0.5,
    paddingTop: 12,
    paddingHorizontal: 16,
    borderBottomColor: Colors.bgNeutral3,
    borderBottomWidth: 1,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: Colors.textDarkGraphite,
    padding: 0,
    margin: 0,
  },
  disabled: {
    backgroundColor: Colors.bgNeutral3,
    borderRadius: 4,
    opacity: 0.62,
    width: '100%',
    height: 50,
    paddingTop: 12,
    borderTopLeftRadius: Size.Spacing.nano,
    borderTopRightRadius: Size.Spacing.nano,
    paddingHorizontal: Size.Spacing.tiny,
  },
});

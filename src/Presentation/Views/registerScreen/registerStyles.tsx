import { StyleSheet } from "react-native";
import { Size } from "../../../components/StyleGuide/SizeGuide";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: Size.Spacing.smaller,
    alignSelf: 'stretch',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    gap: Size.Spacing.micro,
  },
});

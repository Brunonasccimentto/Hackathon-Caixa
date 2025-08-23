import { StyleSheet } from 'react-native';
import { Size } from '../../../components/StyleGuide/SizeGuide';
import { Colors } from '../../../components/StyleGuide/ColorExtension';

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
  dropdown: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.bgNeutral1,
    borderBottomColor: Colors.bgNeutral3,
    borderBottomWidth: 1,
    borderTopLeftRadius: Size.Spacing.nano,
    borderTopRightRadius: Size.Spacing.nano,
    paddingHorizontal: Size.Spacing.tiny,
    color: Colors.textDarkGraphite,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.textDarkGraphite,
  },
  disabled: {
    backgroundColor: Colors.bgNeutral3,
    opacity: 0.62,
    width: '100%',
    height: 50,
    borderTopLeftRadius: Size.Spacing.nano,
    borderTopRightRadius: Size.Spacing.nano,
    paddingHorizontal: Size.Spacing.tiny,
  },
  dropdownContent: {
    paddingHorizontal: Size.Spacing.micro,
    paddingVertical: Size.Spacing.nano,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.bgNeutral3,
    color: Colors.textDarkGraphite,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  message: {
    fontSize: 12,
    color: Colors.textDarkGraphite,
  },
  resultContainer: {
    paddingBottom: Size.Spacing.tiny,
    backgroundColor: Colors.bgNeutral1,
    borderRadius: Size.Spacing.nano,
    marginBottom: Size.Spacing.nano,
  },
  resultText: {
    fontSize: 16,
    color: Colors.textDarkGraphite,
  },
  resultRow: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  content: {
    paddingHorizontal: Size.Spacing.tiny,
    display: 'flex',
    gap: 1.5,
    marginTop: Size.Spacing.nano,
  },
  textDarkGraphite: {
    color: Colors.textDarkGraphite,
  },
});

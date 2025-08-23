import { StyleSheet } from "react-native";
import { Size } from "../../../components/StyleGuide/SizeGuide";
import { Colors } from "../../../components/StyleGuide/ColorExtension";

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        width: '100%',
        display: 'flex',
        gap: Size.Spacing.smaller,
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: Size.Spacing.tiny,
        alignSelf: 'stretch',
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.bgNeutral3,
        borderRadius: Size.Spacing.nano,
        backgroundColor: Colors.bgNeutral1,
        marginBottom: Size.Spacing.nano,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textDarkGraphite,
        marginBottom: Size.Spacing.micro,
    },
    lastItem: {
        marginBottom: Size.Spacing.larger,
    },
});

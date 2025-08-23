import { Dropdown } from "react-native-element-dropdown";
import { styles } from "../simulationStyles";
import { Size } from "../../../../components/StyleGuide/SizeGuide";
import { Suspense } from "react";
import DSCLoading from "../../../../components/molecules/DSCLoading";
import { Text, View } from "react-native";
import MaterialDesignIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Produto } from "../../../../Domain/Models/Products";

interface IPickerField {
  onChange: (item: any) => void;
  value: any;
  items: any[];
  placeholder?: string;
}

export const PickerField: React.FC<IPickerField> = ({
  onChange,
  value,
  items,
  placeholder = 'Selecione uma opção',
}) => {
  const isDisabled = items.length === 0;

  return (
    <Dropdown
      style={isDisabled ? styles.disabled : styles.dropdown}
      placeholder={placeholder}
      placeholderStyle={styles.placeholderStyle}
      data={items}
      disable={isDisabled}
      labelField={'nome'}
      valueField={'nome'}
      value={value}
      iconStyle={styles.dropdownIcon}
      onChange={onChange}
      renderRightIcon={() => (
        <MaterialDesignIcons
          name="menu-down"
          size={Size.FontSize.small}
          color={'black'}
        />
      )}
      renderItem={(item: Produto) => {
        return (
          <Suspense fallback={<DSCLoading label={''} />}>
            <View style={styles.dropdownContent}>
              <Text style={styles.textDarkGraphite}> {item.nome} </Text>
            </View>
          </Suspense>
        );
      }}
    />
  );
};

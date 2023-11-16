import React, {useState} from "react";
import { View, Text, SafeAreaView } from "react-native";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import AsyncStorage from "@react-native-async-storage/async-storage";

const _iconStyle = (borderColor: string) => ({  //Circles
  height: 30,
  width: 30,
  borderRadius: 25,
  borderColor: borderColor,
});

const styles = {
    container: { marginTop: 14 },
    verticalStyle: {justifyContent: 'flex-start', padding: 6},
    textStyle: { textDecorationLine: "none", fontFamily: 'AppleSDGothicNeo-Thin', fontWeight: '500' },
    iconImageStyle: { height: 20, width: 20 },
  };

const verticalStaticData: ICheckboxButton[] = [
  {
    id: 0,
    text: "Family",
    fillColor: "#ff7473",
    unfillColor: "#fbbfbb",
    iconStyle: _iconStyle("#fbbfbb"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 1,
    text: "Work",
    fillColor: "#5567e9",
    unfillColor: "#afb5f5",
    iconStyle: _iconStyle("#afb5f5"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 2,
    text: "Social",
    fillColor: "#a98ae7",
    unfillColor: "#cab6f4",
    iconStyle: _iconStyle("#cab6f4"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 3,
    text: "Romantic",
    fillColor: "#fcb779",
    unfillColor: "#ffd1a7",
    iconStyle: _iconStyle("#ffd1a7"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 4,
    text: "Self",
    fillColor: "#2be055",
    unfillColor: "#cbf2d5",
    iconStyle: _iconStyle("#cbf2d5"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
  {
    id: 5,
    text: "Institution",
    fillColor: "#ff33ff",
    unfillColor: "#ffccff",
    iconStyle: _iconStyle("#cbf2d5"),
    textStyle: styles.textStyle,
    style: styles.verticalStyle,
    iconImageStyle: styles.iconImageStyle,
  },
];

const CheckBox = () => {
  const [env, setEnv] = useState('')

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('Environment', env)
      console('Data successfully saved')
    } catch (e) {
      console('Failed to save the data to the storage')
    }
  }

  const verticalCheckboxGroupContainer = () => (
    <View style={{backgroundColor:'#FFFAFA', borderRadius: 40, shadowColor: 'rgba(0,0,0, .4)', shadowOffset: { height: 1, width: 1 }, shadowOpacity: 1, shadowRadius: 14}}>
        <View>
            <Text style={{ flex: 1, flexDirection: 'row', padding: 5, paddingHorizontal: 30, paddingTop: 15, fontWeight: '600', fontSize: 20, color: '#000000', fontFamily: 'AppleSDGothicNeo-Thin'}}>Environment</Text>
        </View>
      <View
        style={{
            marginLeft: 32,
            justifyContent: "space-evenly",
          }}
      >
        <BouncyCheckboxGroup
          data={verticalStaticData}
          style={{ flexDirection: "row", flexWrap: 'wrap' }}
          onChange={(selectedItem: ICheckboxButton) => {
            console.log(JSON.stringify(selectedItem.text));
            setEnv(JSON.stringify(selectedItem.text))
            saveData()
          }}
        />
      </View>
    </ View>
  );

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          {verticalCheckboxGroupContainer()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default CheckBox;
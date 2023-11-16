import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        animationType={"slide"}
        openDuration={600}
        height={500}
        closeOnPressMask={true}
        onClose={null}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container: {
            borderRadius: 40,
          },
          draggableIcon: {
            backgroundColor: "#000000"
          }
        }}
      >
        <Text> Hello</Text>
      </RBSheet>
    </View>
  );
}
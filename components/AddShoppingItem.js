import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useStore from "../Store";

export default AddShoppingItem = () => {
  const [itemName, setItemName] = useState("");
  const addItem = useStore((state) => state.add);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <TextInput
        mode="outlined"
        placeholder="Nome do item"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
        style={{ margin: 15, width: 200 }}
      />
      <Button
        mode="outlined"
        onPress={() => {
          addItem({ name: itemName, quantity: 0 });
          setItemName("");
        }}
        style={{ borderRadius: 5 }}
      >
        Adicionar
      </Button>
    </View>
  );
};

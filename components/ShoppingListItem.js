import { View } from "react-native";
import { IconButton, Button, Text } from "react-native-paper";
import useStore from "../Store";

export default ShoppingListItem = ({ item }) => {
  const remove = useStore((state) => state.remove);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const clear = useStore((state) => state.clear);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 16,
      }}
    >
      <View
        style={{
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 5,
          padding: 15,
        }}
      >
        <View>
          <Text variant="titleLarge">
            {item.name} = {item.quantity}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 16,
          }}
        >
          <IconButton
            mode="outlined"
            icon="plus"
            onPress={() => increment(item.name)}
            style={{ marginRight: 10, borderRadius: 5 }}
          />
          <Button
            mode="outlined"
            onPress={() => clear(item.name)}
            style={{ borderRadius: 5 }}
          >
            <Text variant="titleMedium">Limpar</Text>
          </Button>
          <IconButton
            mode="outlined"
            icon="minus"
            onPress={() => decrement(item.name)}
            style={{ marginLeft: 10, borderRadius: 5 }}
          />
        </View>
      </View>
      <IconButton
        mode="outlined"
        icon="close"
        type="material-community"
        onPress={() => remove(item.name)}
        style={{ borderRadius: 5 }}
      />
    </View>
  );
};

import { Platform, StatusBar, SafeAreaView, FlatList } from "react-native";
import ShoppingListItem from "./components/ShoppingListItem";
import AddShoppingItem from "./components/AddShoppingItem";
import useStore from "./Store";

export default App = () => {
  const shoppingList = useStore((state) => state.shoppingList);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <FlatList
        renderItem={({ item }) => <ShoppingListItem item={item} />}
        data={shoppingList}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<AddShoppingItem />}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
};

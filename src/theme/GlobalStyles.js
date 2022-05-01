import { StyleSheet } from "react-native";
import Theme from "./index";

const GlobalStyles = StyleSheet.create({
  container: {
    padding: Theme.sizes.padding3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GlobalStyles;

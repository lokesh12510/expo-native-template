import { StyleSheet } from "react-native";
import Theme from "./../../theme/index";

const { colors, sizes, fonts } = Theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  overlay: {
    width: sizes.width,
    height: "100%",
    justifyContent: "flex-end",
  },
  bgImage: {
    position: "relative",
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    zIndex: 2,
  },
  heroText: {
    ...fonts.body1,
    fontWeight: "bold",
    paddingBottom: 30,
    color: colors.white,
  },
  subText: {
    fontSize: sizes.body3,
    color: colors.white,
    textAlign: "center",
  },
  linkText: {
    fontSize: sizes.body3,
    color: colors.primary,
    textAlign: "center",
    padding: sizes.padding,
  },
});

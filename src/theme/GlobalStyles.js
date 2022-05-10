import { StyleSheet } from "react-native";
import Theme from "./index";

const { colors, fonts, sizes } = Theme;

const GlobalStyles = StyleSheet.create({
  container: {
    padding: sizes.padding3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: sizes.padding,
  },
  formInnerContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  formArea: {
    width: sizes.width - 20,
    padding: sizes.padding2,
  },
  pageLogo: {
    width: 150,
    height: 150,
    marginBottom: sizes.margin2,
  },

  flexRowCenter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: sizes.padding,
  },
  flexColumnCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexRowStart: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  flexColumnStart: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  heroText: {
    ...fonts.body1,
    fontWeight: "bold",
    paddingBottom: 30,
    color: colors.white,
  },
  pageTitle: {
    ...fonts.body2,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    padding: sizes.padding,
  },
  subTitle: {
    ...fonts.h4,
    textAlign: "center",
    marginBottom: sizes.margin3,
    fontWeight: "bold",
    color: colors.tertiary,
  },
  subText: {
    ...fonts.body4,
    color: colors.gray,
    textAlign: "center",
  },
  linkText: {
    ...fonts.body4,
    color: colors.primary,
    textAlign: "center",
    padding: sizes.padding,
  },
});

export default GlobalStyles;

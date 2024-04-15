import { StyleSheet } from "react-native"
import { theme } from "../../theme"

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.brand.purple_dark,
    color: "#fff",
    padding: 16
  }
})

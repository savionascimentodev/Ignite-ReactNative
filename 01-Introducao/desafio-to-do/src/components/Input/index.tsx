import { TextInput, View } from "react-native"
import { styles } from "./styles"

export function Input() {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  )
}

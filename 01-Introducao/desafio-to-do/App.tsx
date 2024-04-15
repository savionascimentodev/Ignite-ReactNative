import { StatusBar } from "expo-status-bar"
import { Home } from "./src/screens/Home"
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from "@expo-google-fonts/inter"
import { Loading } from "./src/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar style="auto" />
    </>
  )
}

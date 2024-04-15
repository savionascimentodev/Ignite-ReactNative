import { Alert, Text, View } from "react-native"
import { Input } from "../../components/Input"
import Task from "../../components/Task"
import { styles } from "./styles"
import { useState } from "react"
import { Header } from "../../components/Header"

export function Home() {
  const [task, setTask] = useState("")
  const [finishedTasks, setFinishedTasks] = useState()

  // function handleAddTask() {

  // }

  function handleRemoveTask(id: number) {
    if (id) {
      Alert.alert(
        "Remover Task",
        `Tem certeza que deseja remover esta task: ${id}?`,
        [
          {
            text: "Sim",
            onPress: () => Alert.alert("Task removida com Sucesso!")
          },
          { text: "Não", style: "cancel" }
        ]
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* <Input /> */}
      {/* <Task /> */}
    </View>
  )
}

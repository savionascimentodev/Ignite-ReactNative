import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantsAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Existente",
        "Já existe um participante cadastrado"
      )
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantsRemove(name: string) {
    Alert.alert(
      "Remover Participante",
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Removido com Sucesso!")
        },
        { text: "Não", style: "cancel" }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity onPress={handleParticipantsAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantsRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Lista vazia</Text>
        )}
      />
    </View>
  )
}

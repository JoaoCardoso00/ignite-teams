import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  const playersCount = players.length;
  const isListEmpty = playersCount === 0;

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{playersCount}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          isListEmpty && { flex: 1, justifyContent: "center" },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}

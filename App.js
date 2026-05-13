import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, FlatList, TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task === '' || task.trim() === '') {
      setTask('')
      return;
    }
    setTasks([...tasks, task])
    setTask('');
  } 
  const delTask = () => {
    // setTasks([...tasks, task])
    setTask('')
    setTasks([]);
  }
  return (
    <View style={styles.app}>

      <View style={styles.main}>
        <Text style={styles.titulo}> Welcome to my taskList </Text>
        <View>
          <TextInput style={styles.input}
            placeholder="Digite sua tarefa"
            onChangeText={setTask}
            value={task}
            onSubmitEditing={addTask}
          />

          <Pressable onPress={addTask}
            // style={styles.button}
            style={({ pressed }) => [styles.button, pressed
              && { opacity: 0.7 }]}
          >
            <Text>Adicionar</Text>
          </Pressable>
          <Pressable onPress={delTask}
            style={({ pressed }) =>
              [styles.button, styles.dellButton, pressed
                && { opacity: 0.7 }]}>
            <Text>Limpa Lista</Text>
          </Pressable>
        </View>

        <View style={styles.lista}>
          <FlatList
            data={tasks}
            renderItem={({ item }) =>
              <View>
                <Text style={styles.textLista}>{item}</Text>
              </View>
            }
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#71057aff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {
    fontFamily: 'cursive',
    fontSize: 24,
    margin: 30,
    color: '#fff',
   
  },

  main: {
    borderColor: '#ffffffff',
    borderRadius: 15,
    borderWidth: 3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderColor: '#ffffffff',
    borderRadius: 15,
    borderWidth: 3,
    padding: 10,
    fontFamily: 'cursive',
    color: '#ffffffff',
  },

  button: {
    fontFamily: 'cursive',
    backgroundColor: '#11e746ff',
    borderRadius: 15,
    width: 80,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  dellButton: {
    backgroundColor: '#e41111ff',
    marginTop: 10,
  },

  lista: {
    fontFamily: 'cursive',
    borderColor: '#ffffffff',
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 10,
  },

  textLista: {
    fontFamily: 'cursive',
    fontSize: 15,
    paddingTop: 7,
    paddingRight:15,
    // paddingBottom: 15,
    paddingLeft: 15,
    color: '#ffffffff',
    borderBottomColor: '#c20071ff',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  }

});

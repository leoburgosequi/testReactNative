import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './RenderItem';
import styles from './styles';

// const tasks = [
//   {
//     title: 'Despertar',
//     done: false,
//     date: new Date()
//   },
//   {
//     title: 'Hace desayuno',
//     done: true,
//     date: new Date()
//   },
//   {
//     title: 'Sacar la basura',
//     done: true,
//     date: new Date()
//   },
//   {
//     title: 'Pasear al perro',
//     done: false,
//     date: new Date()
//   },
// ]

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}



export default function App() {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new Date()
    }
    setText('');
    tmp.push(newTask);
    setTasks(tmp);
    storeData(tmp);
    // console.log("dsklhgbklds")

  }

  const markDone = (item: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(i => i.title === item.title);
    const todo = tmp[index];
    todo.done = !todo.done;
    setTasks(tmp);
    storeData(tmp);
  }

  const deleteFunction = (item: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(i => i.title === item.title);
    tmp.splice(index, 1);
    setTasks(tmp);
    storeData(tmp);
  }

  const storeData = async (value: Task[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('mytodo-tasks', jsonValue);
    } catch (e) {
      // saving error
    }
  };;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodo-tasks');
      if (value !== null) {
        const tasksLocal = JSON.parse(value);
        setTasks(tasksLocal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  })
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={(t: string) => setText(t)} placeholder="Nueva tarea" style={styles.textInput} value={text} />
        <TouchableOpacity style={styles.addButton}>
          <Text onPress={addTask} style={styles.whiteText}>
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone} />
          )}
          data={tasks}
        />
      </View>
    </View>
  )
}
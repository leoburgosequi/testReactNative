import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { Task } from './App'
import styles from "./styles";

interface ItemProps {
    item:Task;
    markDone: (task:Task) => void;
    deleteFunction: (item:Task) => void;
}


export default function RenderItem({item, markDone,deleteFunction}: ItemProps){
    return (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => markDone(item)}>
            <Text style={item.done ? styles.textDone : styles.text }>{item.title}</Text>
            <Text style={item.done ? styles.textDone : styles.text }>{ new Date(item.date).toLocaleDateString()}</Text>
          </TouchableOpacity>
         {item.done && (
          <TouchableOpacity style={styles.removeButton} onPress={() => deleteFunction(item)}>
            <Text style={styles.whiteText}>Eliminar</Text>
          </TouchableOpacity>
         ) 
         }
         {!item.done && (
          <TouchableOpacity style={styles.doneButton} onPress={() => markDone(item)}>
          <Text style={styles.whiteText}>Terminar</Text>
          </TouchableOpacity>
         )
  
         }
        </View>
      )
}
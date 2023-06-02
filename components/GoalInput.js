import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#1aa7ec' />
        </View>
        <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
        </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#00008b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d0efff',
    backgroundColor: '#d0efff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
  
});


// import { useState } from 'react'
// import { StyleSheet, View, TextInput, Button } from "react-native";

// function GoalInput(props) {

//     const [enteredGoalText, setEnteredGoalText] = useState('');
    
//     function goalInputHandler(enteredText) {
//         setEnteredGoalText(enteredText);
//     };

//     function addGoalHandler() {
//         props.onAddGoal(enteredGoalText);
//         setEnteredGoalText('');
//     }

//     return (
//         <View style={styles.inputContainer}>
//             <TextInput style={styles.textInput} placeholder='Your goal' onChangeText={goalInputHandler} value={enteredGoalText}/>
//             <Button title='Add Goal' onPress={props.onAddGoal} />
//         </View>

//     );
// }

// export default GoalInput;

// const styles = StyleSheet.create({
//     inputContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 24,
//         borderBottomWidth: 1,
//         borderBottomColor: '#cccccc'
//     },
//     textInput: {
//         borderWidth: 1,
//         borderColor: '#cccccc',
//         width: '70%',
//         marginRight: 8,
//         padding: 8,
//     },
// });
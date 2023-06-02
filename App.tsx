import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //const [courseGoals, setCourseGoals] = useState([]);
  const [courseGoals, setCourseGoals] = useState<Array<{ text: string; id: string }>>([]);
  
  const[modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    {/* <StatusBar style="auto"/> */}
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#1aa7ec' onPress={startAddGoalHandler}/>
      
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>

        {/* use instead of ScrollView. ScrollView renders all list elements, can be slow*/}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#00008b',
  },
  goalsContainer: {
    flex: 5,
  },
});








// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import { useState } from 'react';
// //import type { PropsWithChildren } from 'react';
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
//   FlatList,
// } from 'react-native';

// import GoalItem from './components/GoalItem';
// import GoalInput from './components/GoalInput';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';


// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const [courseGoals, setCourseGoals] = useState<Array<{ text: string; id: string }>>([]);

//   function addGoalHandler(enteredGoalText) 
//   { 
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals, 
//       {text: enteredGoalText, id: Math.random().toString() },
//     ]);
//   };

//   return (

//     <View style={styles.appContainer}>
//       <GoalInput onAddGoal={addGoalHandler} />
//       <View style={styles.goalsContainer}>

//         {/* use instead of ScrollView. ScrollView renders all list elements, can be slow*/}
//         <FlatList  
//           data={courseGoals} 
//           renderItem={(itemData) => {
//             return <GoalItem text={itemData.item.text} />;
//           }}
//           keyExtractor={(item, index) => {
//             return item.id;
//           }}
//           alwaysBounceVertical={false}
//         />
          
//       </View>
//     </View>

//   );
// }

// const styles = StyleSheet.create({
  
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
  
//   goalsContainer: {
//     flex: 5,
//   },
  
// });

// export default App;

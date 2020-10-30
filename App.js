import 'react-native-gesture-handler';
import React, { useState } from 'react';
import './Firebase';
import { NavigationContainer } from '@react-navigation/native';
import Login from './LoginAPIKEY' ;
import 'firebase/firestore';
import { createStackNavigator } from '@react-navigation/stack';
import ignoreWarnings from 'react-native-ignore-warnings';
import RestNav from './Navigation/RestaurantNavigator';
import {IdContext} from './context/idContext';

ignoreWarnings([
  'Setting a timer',
  'YellowBox has been replaced'
]);

const stack = createStackNavigator();

const App = () => {

  const [context, setContext] = useState(null);

  return (
    <IdContext.Provider value={[context, setContext]}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Login">
          <stack.Screen name="Login"component={Login} />
          <stack.Screen name="Nav"component={RestNav}/>
        </stack.Navigator>
      </NavigationContainer>
    </IdContext.Provider>
  );
}


// class App extends React.Component {

//   constructor( props ) {
//     super(props);
//     this.state = {
//       context: null
//     };
//   }

//   render() {
//     return (
      // <NavigationContainer>
      //   <stack.Navigator initialRouteName="Login">
      //     <stack.Screen name="Login"component={Login} />
      //     <stack.Screen name="Nav"component={RestNav}/>
      //   </stack.Navigator>
      // </NavigationContainer>
//     )
//   }
// }

export default App;

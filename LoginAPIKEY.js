import 'react-native-gesture-handler';
import React, {Component, useContext, useEffect, useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import * as Google from 'expo-google-sign-in';
import {styles} from './Styles/style'
import getIdByEmail from './firebase/getIdByEmail';
import {IdContext} from './context/idContext';

import MyContext from './MyContext';


async function pushClient(email) {
  //I WANT TO PASS SIZE+1 TO ALL PAGES
  const size = await getID('Clients');
  const newID = (size + 1).toString();
  const docRef = firebase.firestore().collection('Clients').doc(newID);
  await docRef.set({
    Email: email
  });
  return (size+1);
}

async function getID(){ 
  const snapshot = await firebase.firestore().collection('Clients').get();
  return snapshot.size;
}
<<<<<<< HEAD
=======
  export const LoginApp = () => {
    const [Email, setEmail] = useState();
    const [Pass, setPass] = useState();
    const [SignPress, setSignPress] = useState();
    const [CreatePress, setCreatePress] = useState();

    const signIn = props => {
        firebase.auth()
        .signInWithEmailAndPassword(Email, Pass)
        .then(() => {
            getIdByEmail(Email).then(id => {
              props.navigation.navigate('Nav', id); 
            })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }
>>>>>>> 5b46b6837d31106bbd14365061851b87e5258960


<<<<<<< HEAD
const LoginApp = (props) => {


  const [Email, setEmail] = useState(null);
  const [Pass, setPass] = useState(null);
  const [signPress, setSignPress] = useState(false);
  const [createPress, setCreatePress] = useState(false);

  const [id, setId] = useContext(IdContext);

  useEffect(() => {
    checkIfLoggedIn();
  }, []);
=======
            console.error(error);
        });
    }

    const createUser = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(Email, Pass)
        .then(() => {
            pushClient(this.state.Email).then(id => {
              props.navigation.navigate('Nav', id);
            }); 
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }
>>>>>>> 5b46b6837d31106bbd14365061851b87e5258960



  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        //this.props.navigation.navigate("Skip");
      }
    });
  }

  const signIn = () => {
    firebase.auth()
    .signInWithEmailAndPassword(Email, Pass)
    .then(() => {
        getIdByEmail(this.state.Email).then(id => {
          //this.props.navigation.navigate('Nav', id);
          setId(id); // this will set the id to our IdContext provider and and we will be able to use this id from any page.
          props.navigation.navigate('Nav');

        });
<<<<<<< HEAD
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }

        console.error(error);
    });
  }

  const createUser = () => {
    firebase.auth()
    .createUserWithEmailAndPassword(Email, Pass)
    .then(() => {
        //pushClient(this.state.Email).then(id => {
          //this.props.navigation.navigate('Nav');
        //}); 
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }

        console.error(error);
    });
  }
=======
    }

         return (
            <View style = {styles.container}>
                <Button
                  title="Google Sign-In"
                  onPress={() => onGoogleButtonPress()}/>
                <Button title="Create User" onPress={() => setCreatePress(!CreatePress)}/>
                  {CreatePress &&
                    <View >
                      <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        onChangeText={text => setEmail(text)}
                      />
                      <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => setPass(text)}
                      />
                      <TouchableOpacity
                          onPress={() => createUser()} style={styles.loginBtn}>
                          <Text style={styles.buttonText}>continue</Text>
                      </TouchableOpacity>
                    </View> 
                  }
                <Button title="Sign In with Email" onPress={() => setSignPress(!SignPress)}/>
                  {SignPress &&
                    <View >
                      <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        onChangeText={text => setEmail(text)}
                      />
                      <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#000000"
                        onChangeText={text => setPass(text)}
                      />
                      <TouchableOpacity
                          onPress={() => signIn()} style={styles.loginBtn}>
                          <Text style={styles.buttonText}>continue</Text>
                      </TouchableOpacity>
                    </View> 
                  }
                <Text> Welcome</Text>
            </View>
        )
    }
>>>>>>> 5b46b6837d31106bbd14365061851b87e5258960


    return (
      <View style = {styles.container}>
          {/* <Button
            title="Google Sign-In"
            onPress={() => this.onGoogleButtonPress()}/> */}
          <Button title="Create User" onPress={() => setCreatePress(!createPress)}/>
            {reatePress &&
              <View >
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#000000"
                  onChangeText={text => setEmail(text)}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor="#000000"
                  onChangeText={text => setPass(text)}
                />
                <TouchableOpacity
                    onPress={createUser} style={styles.loginBtn}>
                    <Text style={styles.buttonText}>continue</Text>
                </TouchableOpacity>
              </View> 
            }
          <Button title="Sign In with Email" onPress={() => setSignPress(!signPress)}/>
            {signPress &&
              <View >
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#000000"
                  onChangeText={text => setEmail(text)}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor="#000000"
                  onChangeText={text => setPass(text)}
                />
                <TouchableOpacity
                    onPress={signIn} style={styles.loginBtn}>
                    <Text style={styles.buttonText}>continue</Text>
                </TouchableOpacity>
              </View> 
            }
          <Text> Welcome</Text>
      </View>
  );
}

export default LoginApp;


  // export default class LoginApp extends Component {

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       Email: '',
  //       Pass: '',
  //       signPress: false,
  //       createPress: false    
  //     };
  //   }

  //   componentDidMount(){
  //     this.checkIfLoggedIn();
  //   }
  
  //   checkIfLoggedIn = () => {
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (user){
  //         //this.props.navigation.navigate("Skip");
  //       }
  //     });
  //   }

  //   signIn = () => {
  //       firebase.auth()
  //       .signInWithEmailAndPassword(this.state.Email, this.state.Pass)
  //       .then(() => {
  //           getIdByEmail(this.state.Email).then(id => {
  //             this.props.navigation.navigate('Nav', id); 
  //           });
  //       })
  //       .catch(error => {
  //           if (error.code === 'auth/email-already-in-use') {
  //           console.log('That email address is already in use!');
  //           }

  //           if (error.code === 'auth/invalid-email') {
  //           console.log('That email address is invalid!');
  //           }

  //           console.error(error);
  //       });
  //   }

  //   createUser = () => {
  //       firebase.auth()
  //       .createUserWithEmailAndPassword(this.state.Email, this.state.Pass)
  //       .then(() => {
  //           //pushClient(this.state.Email).then(id => {
  //             this.props.navigation.navigate('Nav');
  //           //}); 
  //       })
  //       .catch(error => {
  //           if (error.code === 'auth/email-already-in-use') {
  //           console.log('That email address is already in use!');
  //           }

  //           if (error.code === 'auth/invalid-email') {
  //           console.log('That email address is invalid!');
  //           }

  //           console.error(error);
  //       });
  //   }

  //   /*onGoogleButtonPress = async () => {
  //     const {idToken} = await GoogleSignIn.signIn();
  //     const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
  //     return firebase.auth.signInWithCredential(googleCredential);
  //   }*/

  //   render() {
  //       return (
  //           <View style = {styles.container}>
  //               <Button
  //                 title="Google Sign-In"
  //                 onPress={() => this.onGoogleButtonPress()}/>
  //               <Button title="Create User" onPress={() => this.setState({createPress: !this.state.createPress})}/>
  //                 {this.state.createPress &&
  //                   <View >
  //                     <TextInput
  //                       style={styles.inputText}
  //                       placeholder="Email"
  //                       placeholderTextColor="#000000"
  //                       onChangeText={text => this.setState({ Email: text })}
  //                     />
  //                     <TextInput
  //                       style={styles.inputText}
  //                       placeholder="Password"
  //                       placeholderTextColor="#000000"
  //                       onChangeText={text => this.setState({ Pass: text })}
  //                     />
  //                     <TouchableOpacity
  //                         onPress={() => this.createUser()} style={styles.loginBtn}>
  //                         <Text style={styles.buttonText}>continue</Text>
  //                     </TouchableOpacity>
  //                   </View> 
  //                 }
  //               <Button title="Sign In with Email" onPress={() => this.setState({signPress: !this.state.signPress})}/>
  //                 {this.state.signPress &&
  //                   <View >
  //                     <TextInput
  //                       style={styles.inputText}
  //                       placeholder="Email"
  //                       placeholderTextColor="#000000"
  //                       onChangeText={text => this.setState({ Email: text })}
  //                     />
  //                     <TextInput
  //                       style={styles.inputText}
  //                       placeholder="Password"
  //                       placeholderTextColor="#000000"
  //                       onChangeText={text => this.setState({ Pass: text })}
  //                     />
  //                     <TouchableOpacity
  //                         onPress={() => this.signIn()} style={styles.loginBtn}>
  //                         <Text style={styles.buttonText}>continue</Text>
  //                     </TouchableOpacity>
  //                   </View> 
  //                 }
  //               <Text> Welcome</Text>
  //           </View>
  //       )
  //   }
  // }


  
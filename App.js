/**
 * Scorets Mobile App
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
  Text,
  Dimensions,
  NetInfo,
  AsyncStorage
} from 'react-native';

import { WelcomeNextButton } from 'components/buttons';
import { WelcomeTitleText, WelcomeSubtitleText } from 'components/texts';
import Icon from 'react-native-vector-icons/EvilIcons';
import Swiper from 'core/containers/swipable';

import { ParseServer } from 'core/servers';

const { width, height } = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { createUser, UserGetAll, getUser, deleteUsers, updateUser, deleteUser } from 'core/localDB/user'
import { LogGetAll, LogDeleteAll } from 'core/localDB/log'
import { ServerParse } from './core/servers';
import { TrackerParse } from './core/trackers';
import { Brand } from './core/device';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      logs: []
    }
  }
  componentDidMount() {
    // NetInfo.getConnectionInfo().then((connectionInfo) => {
    //   // alert(JSON.stringify(connectionInfo))
    //   // alert('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    // });
    // function handleFirstConnectivityChange(connectionInfo) {
    //   alert('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    //   // NetInfo.removeEventListener(
    //   //   'connectionChange',
    //   //   handleFirstConnectivityChange
    //   // );
    // }
    // NetInfo.addEventListener(
    //   'connectionChange',
    //   handleFirstConnectivityChange
    // );
    // const trackerParse = new TrackerParse('test')
    // trackerParse.error()
    // createUser({firstName: 'Albert',
    // lastName: 'Parrón'})
    // deleteUsers()
    alert(Brand)
    const user = UserGetAll()[0]
    // deleteUser(user.id)
    // alert(JSON.stringify(user))
    // updateUser(user.id, {firstName: 'aa'})
    // deleteLogs()
    this.setState({logs: LogGetAll()});

//     var user = new Parse.User();
// user.set("username", "parrunset");
// user.set("password", "12345");
// user.set("email", "al.parron@gmail.com");

// user.signUp(null, {
//   success: function(user) {
//     alert('eeee')
//   },
//   error: function(user, error) {
//     // Show the error message somewhere and let the user try again.
//     alert("Error: " + error.code + " " + error.message);
//   }
// });


ServerParse.User.currentAsync().then(function(user) {
  // do stuff with your user
  alert(user)
  ServerParse.User.logOut();
});

    // Parse.User.logIn("parrunset", "12345", {
    //   success: function(user) {
    //     alert(JSON.stringify(user))
    //     Parse.User.logOut();
    //     // Do stuff after successful login.
    //   },
    //   error: function(user, error) {
    //     alert(error)
    //     // The login failed. Check error to see why.
    //   }
    // });
    // alert(JSON.stringify(getUser(user.id)))
  }
  render() {
    const logs = this.state.logs.map(log=><Text key={log.id} style={{color: 'white', marginBottom: 10}}>{log.name} {log.error}</Text>)

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content"/>
        {/* <View style={{height: '50%', alignItems: 'center', backgroundColor:'transparent', justifyContent: 'center', width: '100%'}}>
        <Image source={require('./src/assets/logo.png')} style={{height: '45%', width: '45%'}}/>
        {/* <Icon name="pencil" size={100} color="orange" />
        </View> */}
        {/* <Swiper style={styles.wrapper}  horizontal={true} loop={false}>
          <View style={styles.slide1}>
            <Image source={require('./src/assets/field1.jpg')} style={{ width: '70%',}} resizeMode="contain"/>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
        </Swiper> */}
        <View style={{flex: 1, padding: 30, width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{ width: '100%', paddingHorizontal: 20}}>
          {logs}
            {/* <WelcomeTitleText/> */}
            {/* <WelcomeSubtitleText/> */}
          </View>
          <WelcomeNextButton/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: '#1A1A1F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
    height: 400,

  },

  slide: {
    flex: 1,
    height: 400,
    justifyContent: 'flex-end',

  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height: 400,
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
});

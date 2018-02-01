import React,{ Component} from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';

import { WelcomeTitleText, WelcomeSubtitleText } from 'components/texts';
import { WelcomeNextButton } from 'components/buttons';

export default
class WelcomeScene extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={{height: '50%', alignItems: 'center', backgroundColor:'transparent', justifyContent: 'center', width: '100%'}}>
        <Image source={require('./src/assets/logo.png')} style={{height: '45%', width: '45%'}}/>
        {/* <Icon name="pencil" size={100} color="orange" /> */}
        </View>

        <View style={{flex: 1, padding: 30, width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{ width: '100%', paddingHorizontal: 20}}>
            <WelcomeTitleText/>
            <WelcomeSubtitleText/>
          </View>
          <WelcomeNextButton/>
        </View>
      </View>
    );
  }
}
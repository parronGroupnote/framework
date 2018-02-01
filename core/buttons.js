
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  LayoutAnimation,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  material,
  systemWeights
} from 'react-native-typography';

/**
 * Button types
 * @module buttons
 * 
 * @description
 * Core buttons that have default width and height
 */

/***************************************************************************************************/
/* GENERAL STYLES **********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A list of different styles that are generic for the buttons component.
 * Lets add specific UI properties with default and generic values
 * 
 */
const buttonCenter = {
  justifyContent: 'center',
  alignItems: 'center'
}

const buttonMargin = {
  margin: 8
}

const buttonDisabled = {
  opacity: .5
}

const buttonEnabled = {
  opacity: 1
}

const buttonHeight = 48
const buttonBackground1 = 'orange' // '#00e5ff';
const buttonBackground2 = 'purple' // '#2979ff';

const buttonShadow = {
  shadowColor: buttonBackground1,
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 1,
}
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON ******************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor Button
 * 
 * @description
 * If the [onPress] function is null, then the button will be disabled and
 * will not react to touch.
 * 
 * @param {string} [type='medium'] width  defaults to [buttonHeight]
 * @param {string} [text='default'] text  defaults to ['default']
 * @param {string} [icon=null] icon  defaults to [null]
 * @param {string} [backgroundColor='black'] backgroundColor  defaults to ['black']
 * @param {string} [color='white'] color  defaults to ['white']
 * @param {bool} [shadow=false] shadow  defaults to [false]
 * @param {bool} [rounded=false] rounded  defaults to [false]
 * @param {function} [onPress=null] onPress  defaults to null
 * 
 * @example
 * import { Button } from 'core/buttons'
 * 
 * <Button text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 * 
 */
export
  class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    }
  }

  _calculateWidth = () => {
    switch (this.props.type) {
      case 'large': return '100%';
      case 'medium': return '50%';
      case 'small': return '30%';
      case 'rounded': return buttonHeight;
      default: return '100%';
    }
  }

  _onPressButton = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ pressed: true });
    this.props.onPress();
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({ pressed: false })
    }, 1000);
  }

  _generateBackgroundColor = (bg1, bg2) => {
    return !bg1
      ? [buttonBackground1, buttonBackground2]
      : [bg1, bg2
        ? bg2 : bg1]
  }

  render() {
    const { text, icon, backgroundColor, backgroundColor2, color, shadow, rounded, onPress } = this.props;

    const _ButtonBackground = (props) => (
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: -0.1 }}
        locations={[0.0, 0.5,]}
        colors={this._generateBackgroundColor(backgroundColor, backgroundColor2)}
        style={[{
          width: this._calculateWidth(),
          height: buttonHeight,
          borderRadius: rounded ? buttonHeight / 2 : 2,
        },
          buttonCenter,
          buttonMargin,
        ]}>
        {props.children}
      </LinearGradient>
    );

    return (
      <TouchableOpacity style={[
        { backgroundColor, width: this._calculateWidth(), borderRadius: rounded ? buttonHeight / 2 : 2, height: buttonHeight },
        buttonCenter,
        buttonMargin,
        !onPress ? buttonDisabled : buttonEnabled,
        shadow ? buttonShadow : null]}
        disabled={!onPress || this.state.pressed}
        onPress={this._onPressButton}>
        <_ButtonBackground>
          {this.state.pressed
            ? <ActivityIndicator />
            : (
              <View>
                {icon ? <Text style={{ color }}>icon</Text> : null}
                {text ? <Text style={[material.buttonWhite, systemWeights.semibold]}>{text}</Text> : null}
              </View>
            )
          }
        </_ButtonBackground>
      </TouchableOpacity>
    );
  }
}
Button.defaultProps = {
  onPress: () => { },
  type: 'medium',
  color: 'white',
  shadow: false,
  rounded: false
}
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON LARGE ************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonLarge
 * @extends Button
 * @description
 * Extends Button with type="large"
 *
 * @example
 * import { ButtonLarge } from 'core/buttons'
 * 
 * <ButtonLarge text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonLarge = (props) => <Button {...props} type="large" />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON MEDIUM ***********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonMedium
 * @extends Button
 * @description
 * Extends Button with type="medium"
 *
 * @example
 * import { ButtonMedium } from 'core/buttons'
 * 
 * <ButtonMedium text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonMedium = (props) => <Button {...props} type="medium" />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON SMALL ************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonSmall
 * @extends Button
 * @description
 * Extends Button with type="small"
 *
 * @example
 * import { ButtonSmall } from 'core/buttons'
 * 
 * <ButtonSmall text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonSmall = (props) => <Button {...props} type="small" />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON ROUNDED **********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonRounded
 * @extends Button
 * @description
 * Extends Button with rounded=true
 *
 * @example
 * import { Button } from 'core/buttons'
 * 
 * <ButtonRounded text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonRounded = (props) => <Button {...props} rounded />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON ROUNDED LARGE ****************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonRoundedLarge
 * @extends Button
 * @description
 * Extends Button with  rounded=true
 *
 * @example
 * import { ButtonLarge } from 'core/buttons'
 * 
 * <ButtonRoundedLarge text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonRoundedLarge = (props) => <ButtonLarge {...props} rounded />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON ROUNDED MEDIUM ***************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonRoundedMedium
 * @extends Button
 * @description
 * Extends Button with rounded=true
 *
 * @example
 * import { ButtonMedium } from 'core/buttons'
 * 
 * <ButtonRoundedMedium text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonRoundedMedium = (props) => <ButtonMedium {...props} rounded />
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* BUTTON ROUNDED SMALL ****************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A button with customization.
 * 
 * @constructor ButtonRoundedSmall
 * @extends Button
 * @description
 * Extends Button with rounded=true
 *
 * @example
 * import { ButtonSmall } from 'core/buttons'
 * 
 * <ButtonRoundedSmall text='test button' backgroundColor='red' color='white' onPress={()=>alert('clicked')}/>
 *
 */
export
  const ButtonRoundedSmall = (props) => <ButtonSmall {...props} rounded />
/***************************************************************************************************/
/***************************************************************************************************/


import React, { Component } from 'react';
import { material, systemWeights } from 'react-native-typography';
import {
  Text as TextRN
} from 'react-native';

/**
 * Text types
 * @module texts
 * 
 * @description
 * Core texts that have default style
 */

/***************************************************************************************************/
/* TITLE *******************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A text to display titles.
 * 
 * @memberof module:texts
 * @constructor Title
 * @param {string} [text=Title] - The text of the Title.
 * @param {bool} [dark=false] - The theme of the Title.
 * 
 * @example
 * import { Title } from 'core/texts'
 * 
 * <Title text='test text' dark/>
 * 
 */
export
  const Title = ({ text = 'Title', dark = false }) => (
    <TextRN style={[
      dark ? material.headline : material.headlineWhite
    ]}>{text}</TextRN>
  );
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* TEXT ********************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A text with customization.
 * 
 * @memberof module:texts
 * @constructor Text
 * @param {string} text - The text of the Text.
 * @param {bool} dark - The theme of the Text.
 * 
 * @example
 * import { Title } from 'core/texts'
 * 
 * <Text text='test text' dark/>
 * 
 */
export
  const Text = ({ text = 'Text', dark = false }) => (
    <TextRN style={[
      dark ? material.title : material.titleWhite,
      systemWeights.light
    ]}>{text}</TextRN>
  );
/***************************************************************************************************/
/***************************************************************************************************/

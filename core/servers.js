
import {
  AsyncStorage
} from 'react-native';
import { Parse as ParseConf } from 'core/configurations';
/**
 * Server initializations
 * @module servers
 * 
 * @description
 * Some servers
 */

/***************************************************************************************************/
/* SERVER PARSE ************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A Parse server initialization
 * 
 * @constructor ServerParse
 *
 * @example
 * import { ServerParse } from 'core/servers'
 * 
 * ServerParse.User.currentAsync().then(function(user) {
 *  // do stuff with your user
 *  alert(user)
 *  ServerParse.User.logOut();
 * });
 *
 */
var Parse = require('parse/react-native');
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(ParseConf.appId, ParseConf.javascriptKey);
Parse.serverURL = ParseConf.url;

export
  const ServerParse = Parse;
/***************************************************************************************************/
/***************************************************************************************************/


import {
  AsyncStorage
} from 'react-native';

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


Parse.serverURL = 'https://parseapi.back4app.com/';

export
  const ServerParse = Parse;
/***************************************************************************************************/
/***************************************************************************************************/

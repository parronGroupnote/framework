
import Realm from './index';
import {
  ErrorHandler
} from 'core/errorHandlers';
import {
  LoggerRealm,
  LoggerConsole
} from 'core/loggers';


/***************************************************************************************************/
/* UUID GENERATOR **********************************************************************************/
/***************************************************************************************************/
/**
 *
 * A simple UUID generator. Returns a string.
 *
 * It avoids collision using date in its generator
 *
 * ## Sample code:
 * generateUUID()
 *
 */
function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* CREATE USER *************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Creates user and stores it to localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * 
 * @constructor UserCreate
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserCreate(params)
 *
 */
export
  const UserCreate = (params) => {
    const loggerTitle = 'localDB - UserCreate';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerConsole(loggerTitle);
    try {
      Realm.write(() => {
        const user = Object.assign({ id: generateUUID() }, params);
        let team = Realm.create('User', user);
      });
      loggerRealm.done();
      loggerConsole.done();
    } catch (e) {
      loggerRealm.error(e);
      loggerConsole.error(e);
      ErrorHandler(loggerRealm.name, e);
    }
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* GET USERS ***************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Gets all users from localDB.
 * Creates logs
 * 
 * @constructor UserGetAll
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserGetAll(params)
 *
 */
export
  const UserGetAll = () => {
    const loggerTitle = 'localDB - UserGetAll';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerConsole(loggerTitle);
    const users = Realm.objects('User');

    loggerRealm.done();
    loggerConsole.done();
    return Array.from(users);
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* GET USER ****************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Gets user and from localDB.
 * Creates logs
 * 
 * @param {string} id
 * 
 * @constructor UserGet
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserGet(params)
 *
 */
export
  const UserGet = (id) => {
    const loggerTitle = 'localDB - UserGet';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerConsole(loggerTitle);
    const user = Realm.objects('User').filtered(`id = "${id}"`)[0];

    loggerRealm.done();
    loggerConsole.done();
    return user;
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* UPDATE USER *************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Updates user and stores it to localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * Throws errors on invalid keys because the catcher on update with wrong params doesn't react
 * 
 * @param {string} id
 * @param {object} params See UserSchema
 * 
 * @constructor UserUpdate
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserUpdate(id, params)
 *
 */
export
  const UserUpdate = (id, params) => {
    const loggerTitle = 'localDB - UserUpdate';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerConsole(loggerTitle);
    loggerRealm.message(id);
    loggerConsole.message(id);
    try {
      Realm.write(() => {
        let user = Realm.objects('User').filtered(`id = "${id}"`)[0];
        Object.keys(params).forEach(key => {
          if (user[key] === undefined) throw `Key "${key}" not valid`
          else user[key] = params[key]
        })
      })
      loggerRealm.done();
      loggerConsole.done();
    } catch (e) {
      loggerRealm.error(e);
      loggerConsole.error(e);
      ErrorHandler(logRealm.name, e);
    }
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* DELETE USER *************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Deletes user from localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * 
 * @param {string} id
 * 
 * @constructor UserUpdate
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserDelete(id)
 *
 */
export
  const UserDelete = (id) => {
    const loggerTitle = 'localDB - UserDelete';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerRealm(loggerTitle);
    try {
      Realm.write(() => {
        const user = Realm.objects('User').filtered(`id = "${id}"`)[0];
        Realm.delete(user);
      })
      loggerRealm.done();
      loggerConsole.done();
    } catch (e) {
      loggerRealm.error(e);
      loggerConsole.error(e);
      ErrorHandler(loggerRealm.name, e);
    }
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* DELETE USERS ************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Deletes all users from localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * 
 * @constructor UserDeleteAll
 * @extends UserSchema
 * @memberof module:localDB
 *
 * @example
 * UserDeleteAll(id)
 *
 */
export
  const UserDeleteAll = () => {
    const loggerTitle = 'localDB - UserDeleteAll';
    const loggerRealm = new LoggerRealm(loggerTitle);
    const loggerConsole = new LoggerRealm(loggerTitle);
    try {
      Realm.write(() => {
        const allUsers = Realm.objects('User');
        Realm.delete(allUsers);
      });
      loggerRealm.done();
      loggerConsole.done();
    } catch (e) {
      loggerRealm.error(e);
      loggerConsole.error(e);
      ErrorHandler(loggerRealm.name, e);
    }
  }
/***************************************************************************************************/
/***************************************************************************************************/

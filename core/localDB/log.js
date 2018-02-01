
import Realm from './index';
import { 
  ErrorHandler
} from 'core/errorHandlers';


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
/* CREATE LOG **************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Creates user and stores it to localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * 
 * @constructor LogCreate
 * @extends LogSchema
 * @memberof module:localDB
 *
 * @param {string} name The log identifier
 * @param {object} error The log error
 * 
 * @example
 * LogCreate(name, error)
 *
 */
export
  const LogCreate = (name, error) => {
    Realm.write(() => {
      let log = Realm.create('Log', {
        id: generateUUID(),
        name,
        error,
        date: new Date()
      });
    });
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* GET LOGS **************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Gets all logs from localDB.
 * 
 * @constructor LogGetAll
 * @extends LogSchema
 * @memberof module:localDB
 * 
 * @example
 * LogGetAll()
 *
 */
export
  const LogGetAll = () => {
    return Realm.objects('Log').sorted('date', true);
  }
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* DELETE LOGS **************************************************************************************/
/***************************************************************************************************/
/** 
 * 
 * Deletes all logs from localDB.
 * Creates logs and catches errors to send to ErrorHandler
 * 
 * @constructor LogDeleteAll
 * @extends LogSchema
 * @memberof module:localDB
 * 
 * @example
 * LogDeleteAll()
 *
 */
export
  const LogDeleteAll = () => {
    try {
      Realm.write(() => {
        let allLogs = Realm.objects('Log');
        Realm.delete(allLogs);
      })
    } catch (e) {
      ErrorHandler("Error on deleteLogs", e);
    }
  }
/***************************************************************************************************/
/***************************************************************************************************/

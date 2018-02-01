
import { 
  LogCreate
} from 'core/localDB/log';

/**
 * Button types
 * @module loggers
 * 
 * @description
 * Some loggers
 */

/***************************************************************************************************/
/* LOGGER REALM ************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A class that initializes a log with a name and adds messages.
 * Once the process is finished is called error or done.
 * 
 * @constructor LoggerRealm
 * 
 * @description
 * <p>
 * .message()
 * - Adds message in order to save to Realm
 * </p>
 * <p>
 * .done()
 * - Converts all to string and saves it to localRealm with OK flag
 * </p>
 * <p>
 * .error()
 * - Ignores messages and adds error string. It is saved to localRealm with ERROR flag
 * </p>
 * 
 * @example
 * const loggerRealm = new LoggerRealm('NameOfLog')
 * loggerRealm.message('something')
 * loggerRealm.error(e)
 * loggerRealm.done()
 * 
 */
export
  class LoggerRealm {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  message(text) {
    this.messages.push(text);
  }

  error(e) {
    LogCreate(this.name, e + ', ERROR');
  }

  done() {
    let text = '';
    if (this.messages.length) {
      text += ', OK';
      this.messages.forEach(m => {
        text += `, ${m}`;
      })
    } else text = ', OK'
    LogCreate(this.name, text);
  }
}
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* LOGGER CONSOLE **********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A class that initializes a log with a name and adds messages.
 * Once the process is finished is called error or done.
 * 
 * @constructor LoggerConsole
 * 
 * @description
 * <p>
 * .message()
 * - Adds message in order to save to Console
 * </p>
 * <p>
 * .done()
 * - Converts all to string and saves it to Console with OK flag
 * </p>
 * <p>
 * .error()
 * - Ignores messages and adds error string. It is saved to Console with ERROR flag
 * </p>
 * 
 * @example
 * const log = new LoggerConsole('NameOfLog')
 * logConsole.message('something')
 * logConsole.error(e)
 * logConsole.done()
 * 
 */
export
  class LoggerConsole {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  message(text) {
    this.messages.push(text);
  }

  error(e) {
    console.log(this.name, e + ', ERROR');
  }

  done() {
    let text = '';
    if (this.messages.length) {
      text += ', OK';
      this.messages.forEach(m => {
        text += `, ${m}`;
      })
    } else text = ', OK'
    console.log(this.name, text);
  }
}
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* LOGGER ALERT ************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A class that initializes a log with a name and adds messages.
 * Once the process is finished is called error or done.
 * 
 * @constructor LoggerAlert
 * 
 * @description
 * <p>
 * .message()
 * - Adds message in order to save to Alert
 * </p>
 * <p>
 * .done()
 * - Converts all to string and saves it to Alert with OK flag
 * </p>
 * <p>
 * .error()
 * - Ignores messages and adds error string. It is saved to Alert with ERROR flag
 * </p>
 * 
 * @example
 * const log = new LoggerAlert('NameOfLog')
 * logAlert.message('something')
 * logAlert.error(e)
 * logAlert.done()
 * 
 */
export
  class LoggerAlert {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  message(text) {
    this.messages.push(text);
  }

  error(e) {
    alert(this.name + ' - ' + e + ', ERROR');
  }

  done() {
    let text = '';
    if (this.messages.length) {
      text += ', OK';
      this.messages.forEach(m => {
        text += `, ${m}`;
      })
    } else text = ', OK'
    alert(this.name + ' - ' + text);
  }
}
/***************************************************************************************************/
/***************************************************************************************************/

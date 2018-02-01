
import { 
  createLog
} from 'core/localDB/log';
import {
  ServerParse
} from 'core/servers';

/**
 * Tracker types
 * @module trackers
 * 
 * @description
 * Some trackers
 */

/***************************************************************************************************/
/* TRACKER PARSE ***********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A class that initializes a log with a name and adds messages.
 * Once the process is finished is called error or done.
 * 
 * @constructor TrackerParse
 * @todo Not working
 * @description
 * <p>
 * .other()
 * - Tracks other
 * </p>
 * <p>
 * .error()
 * - Tracks an error
 * </p>
 * 
 * @example
 * const trackerParse = new TrackerParse('NameOfTracking')
 * trackerParse.error(p)
 * trackerParse.other(p)
 * 
 */
export
  class TrackerParse {
  constructor(name) {
    this.name = name;
  }

  error(p) {
    var params = { date: new Date().toString() }
    ServerParse.Analytics.track('error', Object.assign({}, params, p));
  }

  other(p) {
    var params = { date: new Date().toString() }
    ServerParse.Analytics.track('other', Object.assign({}, params, p));
  }
}
/***************************************************************************************************/
/***************************************************************************************************/

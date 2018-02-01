
const Realm = require('realm');

import User from './schemas/user';
import Team from './schemas/team';
import Log from './schemas/log';

/**
 * LocalDB
 * @module localDB
 * @version 3
 * 
 * @description
 * Local DB uses Realm Database in order to store data inside the device.
 */

const realm = new Realm({
  schema: [User, Team, Log],
  schemaVersion: 3,
  migration: (oldRealm, newRealm) => {
    // only apply this change if upgrading to schemaVersion 1
    // if (oldRealm.schemaVersion < 1) {
    const oldObjects = oldRealm.objects('Log');
    const newObjects = newRealm.objects('Log');

    // loop through all objects and set the name property in the new schema
    for (let i = 0; i < oldObjects.length; i++) {
      newObjects[i].date = new Date();
    }
    // }
  }
})

export default realm;

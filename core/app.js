
import DeviceInfo from 'react-native-device-info';

/**
 * App info
 * @module app
 * 
 * @description
 * Information about the app
 */

/***************************************************************************************************/
/* APP BUNDLE ID ********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * @constructor BundleId
 *
 * @returns
 * e.g. "com.learnium.mobile"
 *
 * @example
 * import { BundleId } from 'core/device'
 *
 */
export
  const BundleId = DeviceInfo.getBundleId();
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* APP BUILD NUMBER ********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * @constructor BuildNumber
 *
 * @returns
 * e.g. "89"
 *
 * @example
 * import { BuildNumber } from 'core/device'
 *
 */
export
  const BuildNumber = DeviceInfo.getBuildNumber();
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* APP VERSION *************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * @constructor Version
 *
 * @returns
 * e.g. "1.1.0"
 *
 * @example
 * import { Version } from 'core/device'
 *
 */
export
  const Version = DeviceInfo.getVersion();
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* APP VERSION READABLE ****************************************************************************/
/***************************************************************************************************/
/**
 * 
 * @constructor VersionReadable
 *
 * @returns
 * e.g. "1.1.0.89"
 *
 * @example
 * import { VersionReadable } from 'core/device'
 *
 */
export
  const VersionReadable = DeviceInfo.getReadableVersion();
/***************************************************************************************************/
/***************************************************************************************************/


/***************************************************************************************************/
/* APP NAME ****************************************************************************************/
/***************************************************************************************************/
/**
 * 
 * @constructor Name
 *
 * @returns
 * e.g.Learnium Mobile
 *
 * @example
 * import { Name } from 'core/device'
 *
 */
export
  const Name = DeviceInfo.getApplicationName();
/***************************************************************************************************/
/***************************************************************************************************/

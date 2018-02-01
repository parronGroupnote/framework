
/**
 * Button types
 * @module errorHandlers
 * 
 * @description
 * Some error handlers
 */

/***************************************************************************************************/
/* ERROR HANDLER ***********************************************************************************/
/***************************************************************************************************/
/**
 * 
 * A function that registers errors and makes something
 * 
 * @constructor ErrorHandler
 * 
 * @todo Create some error handler
 * 
 * @param {string} m  defaults to ['default']
 * @param {string} e  defaults to [null]
 * 
 * @example
 * ErrorHandler('NameOfError', e)
 * 
 */
export default
  (m, e) => {
    const text = `${m}: ${e}`;
    alert(text)
  }
/***************************************************************************************************/
/***************************************************************************************************/

/* Get object type.
 */

_('upperFirst')

exports = function (obj) {
  if (obj.constructor && obj.constructor.name) return obj.constructor.name

  return upperFirst({}.toString.call(obj).replace(/(\[object )|]/g, ''))
}

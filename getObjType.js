/* Get object type.
 */

_('upperFirst')

function exports(obj) {
  if (obj.constructor && obj.constructor.name) return obj.constructor.name

  return upperFirst({}.toString.call(obj).replace(/(\[object )|]/g, ''))
}

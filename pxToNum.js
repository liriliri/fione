/* Turn string like '0px' to number.
 */

_('toNum')

exports = function (str) {
  return toNum(str.replace('px', ''))
}

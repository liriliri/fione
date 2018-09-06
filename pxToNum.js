/* Turn string like '0px' to number.
 */

_('toNum')

function exports(str) {
  return toNum(str.replace('px', ''))
}

/* Escape json string.
 */

_('escapeJsStr')

exports = function (str) {
  return escapeJsStr(str)
    .replace(/\\'/g, "'")
    .replace(/\t/g, '\\t')
}

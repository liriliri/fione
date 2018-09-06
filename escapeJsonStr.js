/* Escape json string.
 */

_('escapeJsStr')

function exports(str) {
  return escapeJsStr(str)
    .replace(/\\'/g, "'")
    .replace(/\t/g, '\\t')
}

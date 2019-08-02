/* Check if a url is cross origin.
 */

_('startWith')

let origin = window.location.origin

exports = function (url) {
  return !startWith(url, origin)
}

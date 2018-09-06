/* Check if a url is cross origin.
 */

_('startWith')

let origin = window.location.origin

function exports(url) {
  return !startWith(url, origin)
}

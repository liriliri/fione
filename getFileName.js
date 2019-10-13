/* Extract file name from url.
 */

_('last trim Url')

exports = function (url) {
  let ret = last(url.split('/'))

  if (ret.indexOf('?') > -1) ret = trim(ret.split('?')[0])

  if (ret === '') {
    url = new Url(url)
    ret = url.hostname
  }

  return ret
}

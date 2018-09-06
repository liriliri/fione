/* Safe localStorage and sessionStorage.
 */

_('isUndef memStorage')

function exports(type, memReplacement) {
  if (isUndef(memReplacement)) memReplacement = true

  let ret

  switch (type) {
    case 'local':
      ret = window.localStorage
      break
    case 'session':
      ret = window.sessionStorage
      break
  }

  try {
    // Safari private browsing
    let x = 'test-localStorage-' + Date.now()
    ret.setItem(x, x)
    let y = ret.getItem(x)
    ret.removeItem(x)
    if (y !== x) throw new Error()
  } catch (e) {
    if (memReplacement) return memStorage
    return
  }

  return ret
}

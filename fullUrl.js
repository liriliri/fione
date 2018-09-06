/* Add origin to url if needed.
 */

let link = document.createElement('a')

function exports(href) {
  link.href = href

  return (
    link.protocol + '//' + link.host + link.pathname + link.search + link.hash
  )
}

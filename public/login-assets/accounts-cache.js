
  (function main() {
  var hashedNames = [
  "runtime.4e4a317f51b4c3cab794.js",
  "vendor.907daca3fa4d8a987b2e.js",
  "main.0932654891c70b409c78.js",
  "wfui.565ed5515cf21c62e2ce.js",
  "main.a90e30c6210a89d42327.css",
  "wfui.2913ad79afda6dc3dafe.css"
]
  function miniGET(src) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', src)
  xhr.send()
}
  function getSelfScriptSrc() {
  var allScripts = document.getElementsByTagName('script')
  var scriptCount
  for (scriptCount = 0; scriptCount < allScripts.length; ++scriptCount) {
    if (
      allScripts[scriptCount].src &&
      allScripts[scriptCount].getAttribute('src').indexOf('accounts-cache') !== -1
    ) {
      return allScripts[scriptCount].getAttribute('src').replace('short/accounts-cache.js', '')
    }
  }
  return ''
}
  (function cacheAccountsAssetsInJs() {
  var commonPath = getSelfScriptSrc()
  hashedNames.forEach(function nameHandler(name) {
    if (name.indexOf('.js') !== -1) {
      miniGET(commonPath.concat('public/js/', name))
    }
    if (name.indexOf('.css') !== -1) {
      miniGET(commonPath.concat('public/stylesheets/', name))
    }
  })
}())
  }())
  
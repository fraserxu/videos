var bel = require('bel')

module.exports = function (opts) {
  opts = opts || {}
  var styles = opts.styles || ''

  var width = opts.width || null
  var height = opts.height || null
  var controls = opts.controls ? 'controls' : ''
  var autoplay = opts.autoplay ? 'autoplay' : ''
  var buffered = opts.buffered ? 'buffered' : ''
  var poster = opts.poster || ''
  var mp4Src = opts.mp4Src ? bel`<source src=${opts.mp4Src} type="video/mp4">` : ''
  var oggSrc = opts.oggSrc ? bel`<source src=${opts.oggSrc} type="video/ogg">` : ''
  var webmSrc = opts.webmSrc ? bel`<source src=${opts.webmSrc} type="video/webm">` : ''

  return bel`<div>
    <video width=${width} height=${height} style=${styles} ${controls} poster=${poster} >
      ${mp4Src}
      ${oggSrc}
      ${webmSrc}
      Your browser doesn't support HTML5 video tag.
    </video>
  </div>`
}

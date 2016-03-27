var Video = require('./video.js')
var yo = require('yo-yo')
var videos = require('./config.json')

function render () {
  return yo`<ul class='list'>
    ${videos.map(function (video) {
      return yo`<article>
        <header class='header'>
          <h2 class='title'>${video.title}</h2>
          <time class='date'>${video.date}</time>
        </header>
        <section>
          ${Video(video)}
        </section>
        <footer>
          <p>${video.description}</p>
        </footer>
      </article>`
    })}
  </ul>`
}

var app = render()

document.querySelector('main').appendChild(app)

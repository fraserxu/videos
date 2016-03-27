var Video = require('./video.js')
var yo = require('yo-yo')
var csjs = require('csjs')

var styles = module.exports.styles = csjs`
  .list {
    margin: 0;
    padding: 0;
  }

  .list li {
    list-style: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 4px 8px;
  }

  article p {
    padding: 8px 10px;
  }
`

function render () {
  var videos = [
    {
      width: '100%',
      title: '2016 Rip Curl Pro Bells Beach',
      controls: true,
      date: '27/03/2016',

      // poster: './sources/rides-poster.png',
      mp4Src: 'http://7xrtnk.com1.z0.glb.clouddn.com/bells-beach.mp4',
      description: 'The Rip Curl Pro is the longest running professional surfing contest in the world, and this year will be the 55th running of the event.'
    },
    {
      width: '100%',
      title: 'Frankston Ride',
      controls: true,
      date: '05/03/2016',
      // poster: './sources/rides-poster.png',
      mp4Src: 'http://7xrtnk.com1.z0.glb.clouddn.com/rides.mp4',
      description: 'Afternoon ride at Frankston beach.'
    }
  ]

  return yo`<ul class='${styles.list}'>
    ${videos.map(function (video) {
      return yo`<article>
        <header class='${styles.header}'>
          <h2 class='${styles.title}'>${video.title}</h2>
          <time class='${styles.date}'>${video.date}</time>
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

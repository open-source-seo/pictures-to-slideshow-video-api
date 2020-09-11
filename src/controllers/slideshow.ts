import * as e from 'express'
const editly = require('editly')

export async function slideshow(req: e.Request, res: e.Response) {
  // use a scheduler like "bull" here
  console.log(req.params)

  try {
    await editly({
      outPath: '/tmp/video.mp4',
      defaults: {
        transition: {
          name: 'fade'
        },
      },
      clips: [{
        duration: 3,
        layers: [{
          type: 'image-overlay',
          path: './src/public/1597750992594451.jpg',
          zoomDirection: null,
          position: 'center'
        }, {
          type: 'subtitle',
          text: 'Pendule d\'inspiration Louis XV en bois sculpté et laqué à patine verte et or - [...]'
        }]
      }, {
        duration: 3,
        layers: [{
          type: 'image-overlay',
          path: './src/public/1597755261645290.jpg',
          zoomDirection: null,
          position: 'center'
        }, {
          type: 'subtitle',
          text: 'École allemande, XIXe - Portrait du pianiste Carl Maria von Weber (1786-1826) - [...]'
        }]
      }, {
        duration: 3,
        layers: [{
          type: 'image-overlay',
          path: './src/public/1597751126706051.jpg',
          zoomDirection: null,
          position: 'center'
        }, {
          type: 'subtitle',
          text: 'Paire de petits vases à deux anses et leur couvercle de style Louis XVI en [...]'
        }]
      }, {
        duration: 3,
        layers: [{
          type: 'image-overlay',
          path: './src/public/1597750992594451.jpg',
          zoomDirection: null,
          position: 'center'
        }, {
          type: 'subtitle',
          text: 'Sellette tripode de style Napoléon III en bois sculpté noirci au pied décoré d\'un [...]'
        }]
      }]
    })

    res.send('Transcoding done!')
  } catch (error) {
    res.status(503).send('Transcoding failed')
  }
}
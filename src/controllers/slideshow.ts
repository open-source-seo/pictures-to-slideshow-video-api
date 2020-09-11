import * as e from 'express'
const editly = require('editly')

interface SlideshowModel {
  outPath: string,
  images: {
    source: string,
    position: string,
    subtitle: {
      fontSize: number,
      content: string
    }
  }[]
}

interface SlideshowReq < T > extends e.Request {
  body: T
}

interface Clip {
  duration: number,
  layers: Layer[]
}

interface Layer {
  type: string,
  path ? : string,
  zoomDirection ? : any,
  position ? : string,
  text ? : string
}

export async function slideshow(req: SlideshowReq < SlideshowModel > , res: e.Response) {
  // use a scheduler like "bull" here

  const data = {
    outPath: req.body.outPath || '/tmp/video.mp4',
    defaults: {
      transition: {
        name: 'fade'
      },
    },
    clips: [] as Clip[]
  }

  for (const img of req.body.images) {
    data.clips.push({
      duration: 3,
      layers: [{
        type: 'image-overlay',
        path: img.source,
        zoomDirection: null,
        position: img.position || 'center'
      }, {
        type: 'subtitle',
        text: img.subtitle.content
      }]
    })
  }

  try {
    await editly(data)
    res.send('Transcoding done!')
  } catch (error) {
    res.status(500).send('Transcoding failed')
  }
}

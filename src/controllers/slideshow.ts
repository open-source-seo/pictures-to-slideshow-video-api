import * as e from 'express'
import * as v from 'videoshow'

export function slideshow(req: e.Request, res: e.Response) {
	// use a scheduler like "bull" here
	console.log(req.path, v)
	res.send('Hello!')
}

import * as e from 'express'

export function hi(req: e.Request, res: e.Response) {
	console.log(req.path)
	res.send('Hello!')
}

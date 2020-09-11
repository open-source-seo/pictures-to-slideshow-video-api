export * from './lib/async';
export * from './lib/number';
import express from 'express'
import { hi } from './controllers/hello'
import { slideshow } from './controllers/slideshow'
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) 
app.get('/', hi)
app.post('/slideshow', slideshow)

app.listen(8888, () => {
	console.log('app running on port 8888')
})

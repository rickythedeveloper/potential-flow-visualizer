import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || '8000'

let title = 'home'
setInterval(() => {
	if (title === 'home') title = 'ay'
	else title = 'home'
}, 1000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req: any, res: any) => {
	res.render('index', {title: title})
})

app.listen(port, () => {
	console.log(`Listening to request on http://localhost:${port}`);
})
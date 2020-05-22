const express = require('express')
const axios = require('axios')
const app = express()
const port = 4000
const path = require('path')
const cors = require('cors')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/track-list', async (req, res) => {
    try {
        const response = await axios.get('https://itunes.apple.com/search?term=rock&amp;media=music')
        res.json(response.data)
    } catch(err) {
        throw err
    }
})

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})


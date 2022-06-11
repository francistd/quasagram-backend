const express = require('express')
const app = express()
const port = 3000

app.get('/posts', (req, res) => {
    let posts = [
        {
            caption:'Golden Gate Bridge',
            location: 'San Francisco'
        },
        {
            caption: 'London Eye',
            location : 'London'
        }
    ]
  res.send(posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
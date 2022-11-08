const express = require('express')
const app = express()
const port = 3000

 app.get('/', (req, res) => {
    res.send('GETUS')
  })
  
 app.post('/', (req, res) => {
    res.send('POSTUS')
  })

 app.put('/',(req, res)=>{
    res.send('PUTUS')
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
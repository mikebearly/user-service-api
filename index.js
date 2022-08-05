const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req,res) => res.json([
  {
    name: 'mathew',
    email: 'mathew@rock.com'
  },
  {
    name: 'peter',
    email: 'peter@rock.com'
  },
  {
    name: 'john',
    email: 'john@rock.com'
  }

]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
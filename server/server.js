const express = require('express')
const bodyParser = require('body-parser')



const { driver, getAllNodes, getAllUsers, getAllPrayers, createPrayer } = require('./db')

const indexHTML = require('./views/index.html.js')


//TODO: add auth and sessions
const mockSession = {
  currentUser: null,
}

const server = express();
server.use(bodyParser.json())
server.use('/public', express.static('./dist'))

server.get('/', (req, res) => {
  console.log(getAllNodes())
  const users = getAllUsers()
  res.status(200).send(indexHTML(users))
})



server.get('/users_all', (req, res) => {
  let users;
  const sessionPromise = getAllUsers()
  sessionPromise
    .then(results => {
      users = results.records.map(u => ({ fname: u.get('fname'), lname: u.get('lname'), email: u.get('email'), uuid: u.get('uuid') }))
      const status = users && users.length ? 200 : 204;
      mockSession.currentUser = users && users.length && users[0];
      res.status(status).send(users || [])
    })
    .catch(e => {
      console.log('\n***Error***\n', e)
      res.status(500).send({ error: e })
    })
})

server.get('/prayers_all', (req, res) => {
  let prayers;
  sessionPromise = getAllPrayers()
  sessionPromise
    .then(results => {
      prayers = results.records.map(p => ({ title: p.get('title'), description: p.get('description'), uuid: p.get('uuid') }))
      const status = prayers && prayers.length ? 200 : 204
      console.log(prayers)
      res.status(status).json(prayers || [])
    })
})

server.post('/create_prayer', (req, res) => {
  const newPrayer = req.body
  newPrayer.uuid = mockSession.currentUser.uuid || 'nobody@anonymous'
  console.log('CREATE', newPrayer)
  createPrayer(newPrayer)
    .then(results => {
      if (results.records && results.records.length) {
        res.status(202).send('ok')
        return
      }

      res.status(500).json({ error: 'record not created' })
      return
    })
    .catch(error => res.status(500).json({ error }))
})



server.listen(4000, () => console.log('Running Pray4J on 4000'))

process.on('exit', () => db.close())


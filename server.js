// require important modules
const express = require('express')

// require routes


// create our App
const app = express()
const port = process.env.PORT || 5000

// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// require the connection (DB)
const db = require('./DB/database')

// Home Page
app.get('/', (req,res) => {
  res.send('hello awesomes!')
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api/v1/
// app.use('/api/v1/', postsRouter)
// app.use('/api/v1/', categoriesRouter)
// app.use('/api/v1/', tagsRouter)
// app.use('/api/v1/', usersRouter) // /api/v1/users

// Testing the connection
db.authenticate()

// START THE SERVER
app.listen(6000, () => console.log(`server running on port ${port}`))
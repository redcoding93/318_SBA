const express = require('express')
const app = express()

app.set('view-engine', 'ejs')
//access form info access them inside our req variable within post method
app.use(express.urlencoded({extended: false}))

//home page route
//function with a request and response variable
app.get('/', (req, res) => {
    //render a file
    res.render('index.ejs', {name: 'Kyle'})

})

//login route
app.get('/login', (req, res) => {
    res.render('login.ejs')

})

app.post('/login', (req, res) => {

})

//register route
app.get('/register', (req, res) => {
    res.render('register.ejs')

})
//route post to server
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
    } catch {

    }
    //register name field
  req.body.name
})

app.listen(3000)
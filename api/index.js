const express = require('express')

const app = express()
app.use(express.json())

const courses = [
  { id:1, name: 'Course 1'},
  { id:2, name: 'Course 2'},
  { id:2, name: 'Course 3'},
  { id:3, name: 'Course 4'},
  { id:4, name: 'Course 5'},
]

app.get('/', (req, res) => {
    res.send('Hello! Its up and running')
})

app.get('/api/courses', (req, res) => {
  res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if(!course) res.status(404).send(`The course with the given id of ${req.params.id} not found`)
  res.send(course)
})

app.post('/api/course', (req, res) =>{
  const course = {
    id:courses.length+1,
    name: req.body.name
  }
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Running on port ${port} ...`))

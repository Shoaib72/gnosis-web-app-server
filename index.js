const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/courses.json');
const courseDetails = require('./Data/courseDetails.json');
const checkOut = require('./Data/checkout.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(c => c.course_id == id);
    res.send(selectedCourse);
});

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const premiumAccessCourse = checkOut.find(c => c.unique_id == id);
    res.send(premiumAccessCourse)
});

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
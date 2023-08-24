const express = require('express');
const morgan = require('morgan');

const app = express()
const port = 3000

// middleware___________________
app.use(morgan('dev'));

const isLoggedIn = (req, res, next) => {
    // console.log('isLoggedIn middleware');
    const login = true;
    if (!login) {
        next();
    }
    else {
        return res.status(401).json({ message: "Login first" })
    }
    // next();
}
// _______________________________________________________________

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server is running!',
    })
});

app.get('/user', isLoggedIn, (req, res) => {
    res.status(200).send({
        message: 'user profile is returned!',
    })
});

app.get('/abc', (req, res) => {
    res.send('Hello Server is running!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
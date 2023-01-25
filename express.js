const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/login', (req, res) => {
    res.render('login');
  });
 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // redirect
});
  
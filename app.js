const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generatePassword = require('./generate_password.js')

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

// setting body-parser
app.use(bodyParser.urlencoded({
  // 將資料以 qs 來解析，而非 queryString
  extended: true
}));

app.get('/', (req, res) => {
  res.render('index');
});

// Setting POST Request
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options);
  res.render('index', {
    password: password,
    options: options
  });
});

app.listen(port, () => {
  console.log(`The express is listening on localhost:${port}.`);
});
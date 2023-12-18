const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.get('/login',(req,res)=>{
  res.render('login');
});

// Rutas
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const res = require('express/lib/response');

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

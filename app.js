const express = require("express");
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express()



app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/users', usersRouter);


port =  process.env.PORT || 1000;
app.listen(port,()=>{
console.log("app listening on port "+ port)
})
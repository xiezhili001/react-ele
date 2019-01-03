var express = require('express');
var app = express();

// 引入路由模块
var FilmRouter = require('./routes/film.js');
var DetailRouter = require('./routes/detail.js');
var LoginRouter =  require('./routes/login.js')

var DetailCity =  require('./routes/detailCity.js')
var HomePageGood =  require('./routes/homePageGood.js')
var User =  require('./routes/user.js')

// 使用路由模块，中间件
app.use('/api/film/', FilmRouter);
app.use('/api/detail/', DetailRouter);
app.use('/api/login/', LoginRouter);

app.use('/api/detailCity/', DetailCity);
app.use('/api/homePageGood/', HomePageGood);
app.use('/api/user/', User);



app.listen(8080);
console.log('服务启动成功');

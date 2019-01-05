// 处理短信相关
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var codes = require('../codes/code.json');
var sms = require('../api/message');


router.post('/', (req, res, next) => {
  let phone = req.body.phone;

  if (phone) {
    let code = sms.randomCode(4);
    sms.sendCode(phone, code, function(success) {
      console.log('==================')
      console.log(success);
      console.log('==================')
      // 肯定发送成功
      codes[phone] = code;
      // console.log(codes);
      try {
        fs.writeFileSync(path.resolve(__dirname, '../codes/code.json'), JSON.stringify(codes));
        res.send({msg: '成功111', body:{codes:code,phonenum:phone}});
      } catch (error) {
        res.send("失败");
      }
    })
  }
})

// // 登录
// router.post('/', (req, res, next) => {
//   let phone = req.query.phone;
//   let code = req.query.code;
//   console.log(111111111111);
//   // if (phone)
// })



module.exports = router;

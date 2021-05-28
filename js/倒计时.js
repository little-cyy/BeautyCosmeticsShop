//倒计时
var time_stamp = new Date('2022-01-01 0:00:00') - new Date(); //用元旦那天的时间减去现在的时间，结果是时间戳，单位为毫秒
var d = parseInt((time_stamp / 1000 / 60 / 60 / 24));   //获得天数
d = d < 10 ? '0' + d : d;   //格式规范




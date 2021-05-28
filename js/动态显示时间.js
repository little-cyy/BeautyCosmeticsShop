//实现本地时间
function timer() {
	 var now = new Date();                      //new一个date对象
	var year = now.getFullYear()               //取年
	//由于now.getMonth()返回值范围是0~11，数组下标也是从0开始，创建数组对应下标取月份
	var month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']; 
	var mon = month[now.getMonth()];
	var date = now.getDate();                 //取日
	var date = date < 10 ? '0' + date : date; //格式规范
	//同now.getMonth()一样，now.getDay()也是返回0~6，不过0代表的是周日，同样创建数组
	var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']  
	var day = week[now.getDay()];
	var hour = now.getHours();                //取小时
	hour = hour < 10 ? '0' + hour : hour;     //格式规范
	var aa = hour < 12 ? '上午' : '下午';      //上下午
	var min = now.getMinutes();               //取分钟
	min = min < 10 ? '0' + min : min;         //格式规范
	var ss = now.getSeconds();                //取秒数
	ss = ss < 10 ? '0' + ss : ss;             //格式规范
	document.getElementById("nowtime").innerHTML = day + ', ' + date + ' ' + mon + ' ' + year + ', ' + aa + ' ' + hour +
		':' + min + ':' + ss + ', 本地时间 ';    //给标签填充内容

}
setInterval(timer, 1000);                      //计时器












var wrap = document.querySelector(".wrap");         //首先获取到 wrap（因为要设置其left才能控制轮播图）
var next = document.querySelector(".arrow_right");  //取右箭头（点击后播放下一张图）
var prev = document.querySelector(".arrow_left");   //取左箭头（点击后播放上一张图）
var index = 0;                                      //设置全局累加器（从0开始），判断播放到哪一张图片
var dots = document.getElementsByClassName("ll");   //取轮播图下方对应的标题集合
dots[0].className = "ll on";         //给第一张轮播图的标题类名初始为"ll on"；“on”代表当前标题对应的轮播图正在播放

next.onclick = function() {
	next_pic();

}
prev.onclick = function() {
	prev_pic();
}

function next_pic() {                              //点击右键
	var newLeft;
	//当我们点击下一张到-6200px（这是第一张图片）时，我们需要下次跳转到第二张，即-2480px；这样才能正常跳转；
	if (wrap.style.left === "-6200px") {           
		newLeft = -2480;
	} else {
		newLeft = parseInt(wrap.style.left) - 1240;  //下一张的图片偏移量
	}
	wrap.style.left = newLeft + "px";
	index++;              //图片索引值加1
	if (index > 3) {      //如果index>3（现在是第四张图片），我们需要下次跳转到第一张，此时index=0,
		index = 0;     
	}
	showCurrentDot();    //更新dots所有元素的类名
}


function showCurrentDot() {   //当调用该函数时，只有dots[index]的类名为"ll on"。“on”代表当前标题对应的轮播图正在播放
	for (var i = 0, len = dots.length; i < len; i++) {
		dots[i].className = "ll";           
	}
	dots[index].className = "ll on";
}

function prev_pic() {
	var newLeft;
	//同理，当我们点击上一张到0px（这是第四张图片时），我们希望下次跳转到第三张，即-3720px；
	if (wrap.style.left === "0px") {
		newLeft = -3720;
	} else {
		newLeft = parseInt(wrap.style.left) + 1240; //上一张的图片偏移量
	}
	wrap.style.left = newLeft + "px";     
	index--;                  //图片索引值-1      
	if (index < 0) {          //如果index<0（现在是第一张图片），我们需要下次跳转到第四张，此时index=3,
		index = 3;
	}
	showCurrentDot();         //更新dots所有元素的类名
}




var timer = null;

//定义计时自动播放函数（每3秒自动轮播）
function autoPlay() {
	timer = setInterval(function() {
		next_pic();
	}, 3000);
}
autoPlay();


var banner = document.querySelector(".banner");
//当鼠标悬停在轮播图上，停止自动轮播
banner.onmouseover = function() {
	clearInterval(timer);
}
//移开鼠标之后，轮播图自动播放。
banner.onmouseleave = function() {
	autoPlay();
}


//当点击到标题时，得到相应的i值，这个i值也就是span的index值，我们拿他和全局变量index作比较，
//然后重新设置wrap.style.left的值，然后把i值复制给全局变量index，最后显示当前的标题即可。

for (var i = 0, len = dots.length; i < len; i++) {        
	(function(i) {
		dots[i].onmouseover = function() {                //点击标题
			var dis = index - i;
			console.log(index,i)                          
			if (index == 3 && parseInt(wrap.style.left) !== -4960) {       //当前播放第四张图片时
				dis = dis - 4;
			}
			//和使用prev和next相同，在最开始的照片4和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
			if (index == 0 && parseInt(wrap.style.left) !== -1240) {         //当前播放第一张图片时
				dis = 4 + dis;
			}
			wrap.style.left = (parseInt(wrap.style.left) + dis * 1240) + "px";
			index = i;
			showCurrentDot();
		}
	})(i);
}











window.onload = function() {



	//引入header.html
	$(document).ready(function() {
		$('header').load('../header/header.html');
	});


	//今日分享
	var acc = document.getElementsByClassName("accordion");        //获得所有信息标题元素集合
	var i;
	for (i = 0; i < acc.length; i++) {                              //遍历
		acc[i].onclick = function() {                               //信息标题点击函数
			var panel = this.nextElementSibling;                    //获得信息提要
			if (panel.className == "panel active") {                //如果信息提要已显示（active代表显示)
				panel.classList.remove("active");                   //让信息标题隐藏
			} else {                                                //如果信息提要隐藏
				removeactive();                                     //先把所有信息标题的提要隐藏
				panel.classList.add("active");                      //再让本标题的信息提要显示
				panel.style.maxHeight = panel.scrollHeight + "px";  //提要的最大高度是内容高度
			}
		}
	}
 
	function removeactive() {                                        //把所有信息标题的提要隐藏
		for (i = 0; i < acc.length; i++) {                           //遍历每个信息标题
			acc[i].nextElementSibling.className = "panel";           //classname初始化为“panel"
			acc[i].nextElementSibling.style.maxHeight = null;        //提要的最大高度初始化为0
		}
	}

	//留言提交
	var text = document.querySelector('textarea');       //获取文本输入框
	var btn = document.querySelector('#sumbit');         //获取提交按钮
	var list = document.querySelector('#liuyan_list');   //获取留言板
	btn.onclick = function() {
		var li = document.createElement("li");           //创建li标签
		li.innerHTML = text.value;                       //将文本框内容更新到留言板
		list.appendChild(li);
		randomcolor(li);                          
	}

	//留言板
	function randomcolor(p) {
		var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
		var res = "";
		for (var i = 0; i < 6; i++) {
			var id = Math.ceil(Math.random() * 16);
			res += chars[id];
		}
		
		p.style.color = '#' + res;
	};
}

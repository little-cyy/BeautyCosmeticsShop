var text = document.querySelector('textarea'); //获取文本输入框
var btn = document.querySelector('#sumbit'); //获取提交按钮
var list = document.querySelector('#liuyan_list'); //获取留言板
btn.onclick = function() {
	var li = document.createElement("li"); //创建li标签
	li.innerHTML = text.value; //将文本框内容更新到留言板
	list.appendChild(li);
}

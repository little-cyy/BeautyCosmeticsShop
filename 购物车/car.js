//单个复选框
function i_check(id) {
	var check = document.getElementById(id);
	if (check.className == "i_check i_acity") {
		check.classList.remove("i_acity");
	} else {
		check.classList.add("i_acity");
	}
	getAmount();
}

//全选框
var index = false;
function checkAll() {
	var choose = document.getElementById("car").getElementsByTagName("i");
	console.log(choose);
	if (choose.length != 1) {
		for (i = 1; i < choose.length; i++) {
			if (!index) {
				choose[0].classList.add("i_acity2")
				choose[i].classList.add("i_acity");
			} else {
				choose[i].classList.remove("i_acity");
				choose[0].classList.remove("i_acity2")
			}
		}
		index = !index;
	}
	getAmount();
}


//数量减号框
var i_btn = document.getElementsByClassName("count_i");
for (var k = 0; k < i_btn.length; k++) {
	i_btn[k].onclick = function() {
		bt = this;
		//获取小计节点
		at = this.parentElement.parentElement.nextElementSibling;
		//获取单价节点
		pt = this.parentElement.parentElement.previousElementSibling;
		//获取数量值
		node = bt.parentNode.childNodes[1];
		console.log(node);
		num = node.innerText;
		num = parseInt(num);
		if (num < 5) { //限购5件
			num++;
		}
		node.innerText = num;
		//获取单价
		price = pt.innerText;
		price = price.substring(0, price.length - 1);
		//计算小计值
		at.innerText = price * num + "元";
		//计算总计值
		getAmount();
	}
}
//数量加号框
var d_btn = document.getElementsByClassName("count_d");
for (k = 0; k < i_btn.length; k++) {
	d_btn[k].onclick = function() {
		bt = this;
		//获取小计节点
		at = this.parentElement.parentElement.nextElementSibling;
		//获取单价节点
		pt = this.parentElement.parentElement.previousElementSibling;
		//获取c_num节点
		node = bt.parentNode.childNodes[1];
		num = node.innerText;
		num = parseInt(num);
		if (num > 1) {
			num--;
		}
		node.innerText = num;
		//获取单价
		price = pt.innerText;
		price = price.substring(0, price.length - 1);
		//计算小计值     
		at.innerText = price * num + "元";
		//计算总计值
		getAmount();
	}
}


//计算总值
function getAmount() {
	// console.log(ys);
	ns = document.getElementsByClassName("i_acity"); //选中框
	console.log(ns);
	sum = 0;
	document.getElementById("price_num").innerText = sum;
	for (y = 0; y < ns.length; y++) {
		//小计
		amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
		//console.log(ns[y].parentElement.parentElement.lastElementChild.previousElementSibling)
		num = parseFloat(amount_info.innerText);
		sum += num;
		document.getElementById("price_num").innerText = sum;
	}
}


//删除按钮
function del(id) {
	var delBtn = document.getElementById(id);
	var result = confirm("确定删除吗?");
	if (result) {
		//将该商品信息从localStorage移除
		localStorage.removeItem(id);         
		location.reload();
	}
}





//推荐商品
var aData = [{
		"url": "../商品详情/item007.html",
		"imgUrl": "../img/007.jpg",
		"proName": " 雅诗兰黛（Estee Lauder）特润修护肌活精华露100ml (全新第七代小棕瓶） ",
		"proPrice": "1199.98",
		"proComm": "5.4"
	},
	{
		"url": "../商品详情/item008.html",
		"imgUrl": "../img/008.jpg",
		"proName": " 纪梵希小羊皮口红306#3.4g 礼盒装(又名：高定香榭唇膏N306 斩男番茄红）新老包装随机发货 圣诞节礼物",
		"proPrice": "318.88",
		"proComm": "6.4"
	},
	{
		"url": "../商品详情/item009.html",
		"imgUrl": "../img/009.jpg",
		"proName": " 资生堂红腰子面部精华红妍肌活精华露75ml（面部精华 红腰子 护肤品 精华液） ",
		"proPrice": "948",
		"proComm": "3.7"
	},
	{
		"url": "../商品详情/item010.html",
		"imgUrl": "../img/010.jpg",
		"proName": " 欧莱雅(LOREAL)青春密码酵素精华肌底液75ml(女士面部精华 青春密码黑精华 修护补水保湿) ",
		"proPrice": "948",
		"proComm": "6"
	},
	{
		"url": "../商品详情/item011.html",
		"imgUrl": "../img/011.jpg",
		"proName": "欧莱雅（LOREAL）复颜玻尿酸水光充盈全脸淡纹眼霜30ml（紫熨斗全脸淡纹眼霜 玻色因淡细纹 赋弹力",
		"proPrice": "299.98",
		"proComm": "5.6"
	}
];
var oUl = document.getElementsByTagName("ul")[0];           
var data = aData[this.index];
for (var i = 0; i < aData.length; i++) {
	var oLi = document.createElement("li");
	var data = aData[i];

	oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
	oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
	oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
	oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '万人好评</p>';
	oLi.innerHTML += '<div class="add_btn">去看看</div>';
	oUl.appendChild(oLi);
}
var Btn = getClass(oBox, "add_btn"); //获取box下的去看看按钮
for (var i = 0; i < Btn.length; i++) {
	Btn[i].index = i;
	Btn[i].onclick = function() {
		var data = aData[this.index];
		self.location = data['url'];            //跳转到商品详情页

	}
}


function getClass(oBox, tagname) {
	var aTag = oBox.getElementsByTagName("*");
	var aBox = [];
	for (var i = 0; i < aTag.length; i++) {
		if (aTag[i].className == tagname) {
			aBox.push(aTag[i]);
		}
	}
	return aBox;
}

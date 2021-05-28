//鼠标指向特定图片时，才在其下面动态显示说明性文字；移除时则文字消失。
var span=document.getElementById("span");    //获得说明性文字对象
function mOver(){                         //鼠标移入
	span.classList.add("xianshi");        //给span添加“xiangshi"的类
}
function mOut(){                          //鼠标移出
	span.classList.remove("xianshi");        //将span的“xiangshi"类移除
}



//加入购物车操作
var add_btu = document.getElementById("add_btu") //获取加入购物车按钮
//console.log(add_btu)
add_btu.onclick = function() { //提取信息存储到localstorage
	var pname = $("#pname").html(); //商品名称
	var goods = $("#jiage").html(); //价格
	goods = goods.slice(1, goods.length + 1); //将价格前的￥符号去掉
	var url = $("img").attr('src'); //图片的src路径
	var num = inp.value; //商品加入购物车的数量                    
	var id = url.slice(8, 10) //从图片路径截出id值，作为存入localstorage的key

	var json = localStorage.getItem(id) //判断该商品是否已加入购物车
	if (json) { //如果该商品已经加入购物车，数量累加
		var jsonObj = JSON.parse(json);
		num = parseFloat(num) + parseFloat(jsonObj['0']['num']);
	}
	var product = [];
	product.push({
		url,
		pname,
		goods,
		num,
	});
	//将商品信息用json的方法转换为字符串
	var s = JSON.stringify(product);
	localStorage.setItem(id, s);
}


//留言

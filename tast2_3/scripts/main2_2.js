
 /**
  * getData方法
  * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
  * 返回一个数组，格式见函数中示例
   data = [
     ["北京", 90],
     ["北京", 90]
     ……
   ]
   return data;
   */
 

function getData(){
   var liData = document.getElementsByTagName("li");
   var data = [];
    
	for (var i = 0; i<liData.length;i++){
		 data.push(liData[i].innerText);
		 data[i] = data[i].split("：");	
		//console.log(data[i]);		
	}	
    return data;
} 

  



/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
	data.sort(function(a,b){
		return b[1]-a[1];
	})
	return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	var arr = ['一','二','三','四','五','六','七'];
	var Oul = document.getElementById("resort");
	for(var i = 0;i<data.length;i++){
		var li = document.createElement("li");
			li.innerHTML = '第' + arr[i] + '名：' + data[i][0]  + '：' + data[i][1];
			Oul.appendChild(li);
	}
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
  var btn = document.getElementById("sort-btn");
      btn.disabled = true;
}

//在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
function init() {
 var btn = document.getElementById("sort-btn");
 if(btn.addEventListener){
	btn.addEventListener('click',btnHandle,false); //dom2
 }else if (btn.attachEvent){
	btn.attachEvent('onclick',btnHandle);	 
 }else{
	btn.onclick;//dom0
 }
}

init();

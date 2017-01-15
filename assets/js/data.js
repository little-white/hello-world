(function(){
	var data = "hello world";
	function getData(){
		return data;
	}
	window.getData = getData;
})(window);
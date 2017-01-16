(function() {

    function getTextTmplDom(data) {
    	var dataArr = _.map(data.content, 'name');
    	var textTmpl = $('#textTmpl').html();
    	var helloWorldTmpl = $('#helloWorldTmpl').html();

        return Mustache.render(textTmpl, {dataArr: dataArr}, {helloWorldTmpl:helloWorldTmpl});
    }

    window.getTextTmplDom = getTextTmplDom;
})(window);

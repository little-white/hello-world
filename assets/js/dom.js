(function() {
    function generateDom(data) {
        var content = data.content;
        var dom = '';
        for (var i = 0, len = content.length; i < len; i++) {
            dom += '<span>' + content[i].name + '</span>';
        }

        return dom;
    }

    window.generateDom = generateDom;
})(window);

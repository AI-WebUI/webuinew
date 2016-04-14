/**
 * Created by Administrator on 2016/4/6.
 */
$(function () {
    var html=$('body').html();
    $("pre").text(html).addClass("prettyprint linenums");
//            $("#js").text($('script').text()).addClass("prettyprint linenums");
    prettyPrint();
})

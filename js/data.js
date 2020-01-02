$(function () {
    $.ajax({
        type: "GET",
        url: "https://haigle.gitee.io/static_resources/official-website/data",
        dataType: "jsonp",
        jsonpCallback: "callback",
        success: function (data) {
            console.info(data.bannerImg);
            $("#bgImg").css("background-image", 'url('+data.bannerImg+')');
            $("#title").text(data.title);
            $("#subtitle").text(data.subtitle);
        }
    })
});

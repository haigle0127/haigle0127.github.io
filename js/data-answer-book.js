$(function () {
    $.ajax({
        type: "GET",
        url: "https://haigle.gitee.io/static_resources/official-website/data-answer-book",
        dataType: "jsonp",
        jsonpCallback: "callback",
        success: function (data) {
            $("#title").text(data.title);
            $("#subtitle").text(data.subtitle);
            i = (parseInt(Math.random() * 10));
            console.log(i)
            $("#answerTitle").text(data.list[i]);
        }
    })
});

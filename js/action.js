//获取
const cookie = document.cookie;
if (cookie === "en"){
    changeLanguage();
}
// 回到顶部
$(document).ready(function () {
    $(".scrollTop").fadeOut();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200){
            $(".scrollTop").fadeIn();
        }else {
            $(".scrollTop").fadeOut();
        }
    });
});
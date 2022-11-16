// 检测是否有类名
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
}
// 语言切换
function changeLanguage(){
    const cl = document.getElementById("changeLanguage");
    const btn = document.getElementById("choice-language");
    const btn2 = document.getElementById("choice-language2");
    if (!hasClass(cl, "en")){
        //储存
        document.cookie = "en";
        cl.className = "main en";
        btn.className="choice-language choice-en";
        btn2.className="choice-language2 choice-en2";
    }
    else {
        document.cookie = "ch";
        cl.className = "main ch";
        btn.className="choice-language choice-ch";
        btn2.className="choice-language2 choice-ch2";
    }
}
// 回到顶部
function scrollToTop(){
    window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }
    )
}
// 修改头图大小
function changePictureWidth(){
    const pictureWidth = document.body.clientWidth;
    const hp = document.getElementById("headPicture");
    const hp2 = document.getElementById("headPicture2");
    if (pictureWidth >= 950){
        hp.width = pictureWidth;
    }
    if (pictureWidth <= 950){
        hp2.width = pictureWidth;
    }
}
setInterval(changePictureWidth, 1) //20毫秒绘制一次

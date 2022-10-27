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

// 检测是否有类名
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
}

function changeLanguage(){
    const co = document.getElementById("changeLanguage");
    const btn = document.getElementById("choice-language");
    if (!hasClass(co, "en")){
        //储存
        document.cookie = "en";
        co.className = "content en";
        btn.className="choice-language choice-en";
    }
    else {
        document.cookie = "ch";
        co.className = "content ch";
        btn.className="choice-language choice-ch";
    }
}
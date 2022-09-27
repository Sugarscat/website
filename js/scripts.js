// 检测是否有类名
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
}

function changeLanguage(){
    const co = document.getElementById("changeLanguage");
    if (!hasClass(co, "en")){
        //储存
        document.cookie = "en";
        co.className = "content en";
    }
    else {
        document.cookie = "ch";
        co.className = "content ch";
    }
}
// 鼠标跟随动画
const canvas = document.createElement("canvas");
// 设置画布样式和鼠标点击穿透
canvas.style.position = "fixed"
canvas.style.pointerEvents = "none"
canvas.style.top = "0"
canvas.style.left = "0"
canvas.style.zIndex = "99"
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.append(canvas)
const ctx = canvas.getContext("2d")
const particlesArray = []
// 粒子类
class Particle{
    // 输入参数为粒子的生成坐标
    constructor(x,y) {
        this.x = x
        this.y = y
        this.color = Math.random() * 255 | 0
        this.vx = 0.5 - Math.random()
        this.vy = 0.5 - Math.random()
        // 随机寿命
        this.age = Math.random() * 100 | 0
    }
    // 更新位置
    update() {
        this.x = this.vx
        this.y = this.vy
        this.vy += 0.01
        this.age--
        this.color++
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = "hsl(" + this.color % 255 + "deg,50%,50%)"
        ctx.arc(this.x, this.y, this.color%3, Math.PI*2, false)
        ctx.fill()
    }
}
//让粒子浮动
function  draw() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 循环生成粒子
    for(let i = 0; i < particlesArray.length; i++){
        let pix = particlesArray[i]
        pix.update()
        pix.draw()
        // 无寿命清除
        if (pix.age < 0){
            particlesArray.splice(i, 1)
        }
    }
}
setInterval(draw, 10) // 定时运行
// 绑定鼠标事件
window.addEventListener("mousemove", function (evt){
    for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle(evt.x, evt.y))
    }
})
window.addEventListener("click", function (evt){

})

// 检测是否有类名
function hasClass( elements,cName ){
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
}
// 语言切换
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

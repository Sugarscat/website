// 获取窗口宽度
let winWidth;
let winHeight;
if (window.innerWidth)
    winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
    winWidth = document.body.clientWidth;
// 获取窗口高度
if (window.innerHeight)
    winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
    winHeight = document.documentElement.clientHeight;
    winWidth = document.documentElement.clientWidth;
}
// 鼠标动画特效绘制
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const body = document.body;
body.style.overflow="hidden";
window.document.body.appendChild(canvas);
canvas.width = winWidth;
canvas.height= winHeight;
canvas.setAttribute('style','position:absolute;left:0;top:0;pointer-events:none;z-index:99')
const clicks = [];
const points = []; //定义粒子数组
const live = 50; //存活50个周期
const colors = [  //备选粒子颜色数组
    "236, 204, 104",
    "255, 71, 87",
    "112, 161, 255",
    "123, 237, 159"
];
window.addEventListener("mousemove", function (evt) { //监听鼠标移动事件
    for (let i = 0; i < 1; i++) { //添加2个粒子
        points.push({
            sx: evt.x, //鼠标当前坐标作为粒子坐标
            sy: evt.y,
            vx: 0.5 - Math.random(), //x轴及y轴的移动向量，取值范围为-0.5 ~ 0.5
            vy: 0.5 - Math.random(),
            life: live, //存活周期
            color: colors[parseInt(Math.random() * colors.length)], //随机选择颜色
            size: Math.random() * 5 //随机粒子尺寸，取值范围为0~5
        })
    }
})
window.addEventListener("click",function(evt){ //监听点击事件
    clicks.push({
        sx:evt.x,
        sy:evt.y,
        color:colors[parseInt(Math.random() * colors.length)],
        life:live
    })
    changeCheckbox();
})

// 收回导航栏
function changeCheckbox() {
    const bc = document.getElementById("toggle")
    const e = event || window.event;
    let x = e.clientX;
    let y = e.clientY;
    if (!(x >= winWidth - 240 && y <= 240))
        if (bc.checked)
            bc.checked = false;
}
//绘制粒子
function drawPoints() {
    canvas.width = window.innerWidth
    canvas.height=window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height) //清屏
    for (let i = 0; i < points.length; i++) { //遍历粒子
        let point = points[i] //定义单个粒子
        ctx.beginPath()
        ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false) //根据粒子属性画圆
        ctx.fillStyle = "rgba(" + point.color + "," + point.life / live + ")" //根据粒子属性设置填充颜色及透明度
        ctx.fill() //填充颜色
        point.life-- //生命值减1
        if (point.life <= 0) { //生命值为0则从粒子数组中删除
            points.splice(i, 1)
        }
        point.sx += point.vx * 3  //根据向量值改变粒子位置
        point.sy += point.vy * 3
    }
    for(let i=0; i<clicks.length; i++){ //绘制点击效果
        let click = clicks[i]
        ctx.beginPath()
        ctx.arc(click.sx, click.sy, live - click.life, Math.PI * 2, false)
        ctx.fillStyle="rgba(" + click.color + "," + click.life / live + ")"
        ctx.fill()
        click.life--
        if(click.life<=0){
            clicks.splice(i,1)
        }

    }
}
setInterval(drawPoints, 20) //20毫秒绘制一次

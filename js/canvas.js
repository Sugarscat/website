// 鼠标动画特效绘制
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const body = document.body;
const addWidth = $(window).scrollTop();
const clicks = [];
const points = []; //定义粒子数组
const live = 80; //存活50个周期
const colors = [  //备选粒子颜色数组
    "236, 204, 104",
    "255, 71, 87",
    "112, 161, 255",
    "123, 237, 159"
];
window.document.body.appendChild(canvas);
canvas.width = document.body.clientWidth - 1;
canvas.height= document.body.clientHeight - 1 + addWidth;
canvas.setAttribute('style','position:absolute;left:0;top:0;pointer-events:none;z-index:99')

/*
window.addEventListener("mousemove", function (evt) { //监听鼠标移动事件
    for (let i = 0; i < 3; i++) { //添加2个粒子
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
*/

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
    if (!(x >= document.body.clientWidth - 240  && y <= 240))
        if (bc.checked)
            bc.checked = false;
}

//绘制粒子
function drawPoints() {
    const addWidth = $(window).scrollTop();
    canvas.width = document.body.clientWidth - 1;
    canvas.height= document.body.clientHeight - 1 + addWidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height) //清屏
    for (let i = 0; i < points.length; i++) { //遍历粒子
        let point = points[i] //定义单个粒子
        ctx.beginPath()
        ctx.arc(point.sx, point.sy + addWidth, point.size, Math.PI * 2, 0) //根据粒子属性画圆
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
        let click = clicks[i];
        ctx.beginPath();
        ctx.arc(click.sx, click.sy + addWidth, live - click.life, Math.PI * 2, 0);
        ctx.strokeStyle = "rgba(255,112,5," + click.life / live + ")"
        ctx.stroke();
        click.life--;
        if(click.life<=0){
            clicks.splice(i,1);
        }
    }
}
setInterval(drawPoints, 1) //20毫秒绘制一次

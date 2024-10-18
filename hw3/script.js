// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 25, color = "lightblue";
let x2 = canvas.width, y2 = 0, dx2 = 5, dy2 = 5, r2 = 10, color2 = "green";

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
	
	x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
	if (x > canvas.width || x < 0)			dx = -dx;
	if (y > canvas.height || y < 0)			dy = -dy;
	
	if (x2 > canvas.width || x2 < 0)		dx2 = -dx2;
	if (y2 > canvas.height ||y2 < 0)		dy2 = -dy2;
	
	if ((x-x2)*(x-x2)+(y-y2)*(y-y2) <= (r-r2)*(r-r2))		
	{
		let R = r + r2;
		[dx,dx2] = [((r-r2)*dx + r2*dx2)/R, ((r2-r)*dx2 + r*dx)/R];
		[dy,dy2] = [((r-r2)*dy + r2*dy2)/R, ((r2-r)*dy2 + r*dy)/R];
    }
	
	drawBall(x, y, r, color);
	drawBall(x2, y2, r2, color2);
	
    requestAnimationFrame(draw);
}
draw();

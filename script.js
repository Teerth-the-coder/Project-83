newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (screen.width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = `hidden`;
}

color = "blue";
width_of_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
lastMX = 0;
lastMY = 0;
currentMX = 0;
currentMY = 0;
canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e) {
    console.log(e);
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

}
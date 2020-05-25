const memo = document.getElementById("memo");
const ctx = memo.getContext("2d");

const MAIN_COLOR = 'black';

memo.width = 300;
memo.height = 500;
ctx.fillStyle = '#be9c91';
ctx.fillRect(0, 0, 300, 500);
ctx.strokeStyle = MAIN_COLOR;
ctx.lineWidth = 1.5;

let write = true;

memo.addEventListener('mousemove', mouseMove);
memo.addEventListener('mousedown', mouseDown);
memo.addEventListener('mouseup', mouseUp);

function mouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(write){
        ctx.beginPath(); //보이지않는 경로가 만들어짐
        ctx.moveTo(x, y); //선택한 시작점
    }else{
        ctx.lineTo(x, y); //선택한 끝점
        ctx.stroke(); //시작점에서 끝점으로 선을그림
    }
};

function mouseDown(event){
    write = false;
}

function mouseUp(event){
    write = true;
}
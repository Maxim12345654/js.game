const circle ={
    x:500,
    y:500
}
const canvas = document.getElementById('mycanvas');
let direction = 'right';

let context;
function init(){



    if (canvas.getContext) {
        context = canvas.getContext('2d');

        drawCircle(context);

        context.fillStyle = 'red';
        context.fillRect(100, 100, 300, 300);

         canvas.addEventListener('click', function(event){
          //  console.log(event);
            drawCircle(context)

        });

        window.addEventListener('keydown', function(event){

            switch (event.key) {
                case 'ArrowLeft':
                    direction = 'left';
                    break;
                case"ArrowUp":
                circle.y = circle.y - 1
                    drawCircle(context);
            ///////////
                    break;  
            
                case 'ArrowRight':
                    direction = 'right';
            ///////////        
                    break;
                case 'ArrowDown':
                    circle.y = circle.y + 1
                    drawCircle(context);
                    break;
            }
        });


    } else {
       // console.log('canvas is not supported');
    }
}

function drawCircle(context){
    if(direction === 'right'){
        circle.x = circle.x + 2;
    } else if(direction ==='left'){
        circle.x = circle.x - 1;
    }
  context.clearRect(0,0, canvas.width, canvas.height);


  context.strokeStyle = 'red';
  context.lineWidth=4;
  context.beginPath();
  context.arc(circle.x, circle.y, 50, 0, 2 * Math.PI);
  context.stroke();
}
function animate(){
    drawCircle(context);
    window.requestAnimationFrame(animate);
}
init();
animate();
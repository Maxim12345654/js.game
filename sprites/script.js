const canvas =  document.getElementById('mycanvas');
mycanvas.y = 100
let ctx;

const sWidth = 575;
const sHeight = 523;
let sX = 0;
let sY = 0;
let dX = 0;
let dY = 0;
const dWidth = 300;
const dHeight = 300;  

window.addEventListener('keydown', function(event){

    switch (event.key) {
        case 'ArrowUp':
               sY = 523;
               
            break;
            case 'ArrowDown':
               sY = 523 * 2;
            break;
            case 'ArrowRight':
                sY = 523 * 7;
                
                 
             break;
             case 'ArrowLeft':
               sY = 523 * 3;
           
            
               break;
        }
});

const image = new Image();
image.src = './images/shadow_dog.png';


if(canvas.getContext){
    ctx = canvas.getContext('2d');

    

}else {
    //console.log('canvas is not supported');
}
let position = 0;
const factor = 5;
let frame = 0;

function animate(){  
    
position = Math.floor(frame / factor) % 7;

 //console.log(position); 

     if(position === 6){
        position = 0;
    }

    sX = position * sWidth;

    ctx.clearRect(0,0,dWidth,dHeight);
    ctx.drawImage(image, sX, sY, sWidth, sHeight,dX, dY, dWidth, dHeight);
    frame = frame + 0.8;

   window.requestAnimationFrame(animate);
}


animate(); 

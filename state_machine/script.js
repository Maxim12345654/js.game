import { Game } from "./game.js";


window.addEventListener('load', function () {

    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('mycanvas');


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    let ctx;   //undefined
    let game;

    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        game = new Game(canvas, ctx)


    } else {
        // console.log('canvas is not supported');
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw();
        if (!game.gameOver) {
            window.requestAnimationFrame(animate);
        }
    }


    animate();

});
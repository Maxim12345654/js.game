export const Keys = {
   KD_LEFT: 0,
   KD_RIGHT: 1,
   KD_UP: 2,
   KD_DOWN: 3,
   KU_LEFT: 4,
   KU_RIGHT: 5,
   KU_UP: 6,
   KU_DOWN: 7,
}

export class InputHandler {
   constructor(game) {
    this.game = game;
       this.lastKey = '';
       window.addEventListener('keydown',  (event) => {
           switch (event.key) {
               case "ArrowLeft":
                   this.lastKey = Keys.KD_LEFT;
                   break;
               case "ArrowRight":
                   this.lastKey = Keys.KD_RIGHT;
                   break;
               case "ArrowDown":
                   this.lastKey = Keys.KD_DOWN;
                   break;
               case "ArrowUp":
                   this.lastKey = Keys.KD_UP;
                   break;
               case "d":
                this.game.debug = !this.game.debug;
           }
       });

       window.addEventListener('keyup',  (event) => {
           switch (event.key) {
               case "ArrowLeft":
                   this.lastKey = Keys.KU_LEFT;
                   break;
               case "ArrowRight":
                   this.lastKey = Keys.KU_RIGHT;
                   break;
               case "ArrowDown":
                   this.lastKey = Keys.KU_DOWN;
                   break;
               case "ArrowUp":
                   this.lastKey = Keys.KU_UP;
                   break;
           }
       });

   }

}
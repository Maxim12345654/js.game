import { Player } from './player.js'
import { InputHandler } from './inputHandler.js';
import { BackgroundLayer } from './background-layer.js';
import { EnemyFly } from './enemies/enemy_fly.js';
import { UI } from './ui.js';
import { EnemySpiderBig } from './enemies/enemy_spider_big.js';


export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameSpeed = 10;
        this.gameWidth = this.canvas.width;
        this.gameHeight = this.canvas.height;

        this.debug = false;

        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);


        this.layer1 = new BackgroundLayer(this, document.getElementById('layer-1'), 0.6);
        this.layer2 = new BackgroundLayer(this, document.getElementById('layer-2'), 0.8);
        this.layer3 = new BackgroundLayer(this, document.getElementById('layer-3'), 1);
        this.layer4 = new BackgroundLayer(this, document.getElementById('layer-4'), 1.4);
        this.layer5 = new BackgroundLayer(this, document.getElementById('layer-5'), 1.8);

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.enemyIndex = 15;

        this.score = 0

        this.ui = new UI(this);
       //1
       


    }

    update() {
        this.player.update(this.inputHandler.lastKey);
        this.layer1.update();
        this.layer2.update();
        this.layer3.update();
        this.layer4.update();
        this.layer5.update();

        this.enemyTimer = this.enemyTimer + this.enemyIndex;
        if (this.enemyTimer > this.enemyInterval) {
            this.enemyTimer = 0;
            this.addEnemy();
        }
        this.enemies.forEach((enemy) => {
            enemy.update();
            if (enemy.markForDeletion === true) {
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        });
        console.log(this.enemies)


    }
    draw() {
        this.layer1.draw();
        this.layer2.draw();
        this.layer3.draw();
        this.layer4.draw();
        this.layer5.draw();
        this.enemies.forEach((enemy) => { enemy.draw(); });
        this.ui.draw();
        this.player.draw();
    }
    addEnemy() {
        this.enemies.push(new EnemyFly(this));
        if(Math.random() > 0.5 ) {
        this.enemies.push(new EnemySpiderBig(this));
        } 
    }
} 
import { Player } from './player.js'
import { InputHandler } from './inputHandler.js';
import { BackgroundLayer } from './background-layer.js';
import { EnemyFly } from './enemies/enemy_fly.js';
import { UI } from './ui.js';
import { EnemySpiderBig } from './enemies/enemy_spider_big.js';
import { EnemyPlant } from './enemies/enemy_plant.js';
import {Dust} from'./particles/dust.js';
import {Fire} from'./particles/fire.js';
import {Splash} from'./particles/splash.js';
import {CollisionAnimation} from'./collisionAnimation.js';

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameSpeed = 3;
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

        this.collisions = [];
        this.particles = [];
        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;
        this.enemyIndex = 15;

        this.time = 0;
        this.maxTime = 300;
        this.gameOver = false;
        this.score = 0;
        this.counter = 0;
        this.ui = new UI(this);
       //1
       


    }

    update() {
        this.counter += 1;
        if (this.counter % 60 === 0)[
            this.time += 1
        ];
        if (this.time === this.maxTime){
            this.gameOver = true;
        }
        this.player.update(this.inputHandler);
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
        this.particles.forEach((particle) => {
             particle.update();
            if (particle.markForDeletion === true) {
                this.particles.splice(this.particles.indexOf(particle), 1);
            }
            
        });

        if (this.particles.length > 50){ 
            this.particles.slice(0, 50);
        }
        //(this.particles)
        this.collisions.forEach((collision) => {
            collision.update();
           if (collision.markForDeletion === true) {
            let toDelete = this.collisions.indexOf(collision);
               this.collisions.splice(toDelete, 1);
           }
       });


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
        this.particles.forEach((particle) => { particle.draw(); });
        this.collisions.forEach((collision) => { collision.draw(); });
    }
    addEnemy() {
        this.enemies.push(new EnemyFly(this));
        if (this.gameSpeed > 0){
            if(Math.random() > 0.5 ) {
            this.enemies.push(new EnemySpiderBig(this));
            } 
            if(Math.random() < 0.5 ) {
                this.enemies.push(new EnemyPlant(this));
            } 
        }
    }
    addDustParticle(){
        this.particles.unshift(new Dust(this));  //to remove only old particles
    }
    addFireParticle(){
        this.particles.unshift(new Fire(this));
    }
    addSplashParticle(){
        this.particles.unshift(new Splash(this));
    }
} 
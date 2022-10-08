# Infectnation

## Description

Infectnation is a game where the mission is to defend the evacuation zone. shoot the zombies and ask for napalm to kill them... It saves the score of the best users based on kills and you have the "hell mode" to go for the top!

## MVP (DOM - CANVAS)

- Soldier class, moves on Y-exis
- zombie class, moves on X-exis
- zombies appear on random x-exis
- bullets kill zombies
- the zombies respawn increase per seconds
- kills counter and special attack.

## Backlog

- add scoreboard
- Button for inferno mode

## Data Structure

 # main.js

- introGame () {}
- startGame (lvl) {} 
- endGame (background, text, color, fontfamily) {}
- infernoMode () {}
- detectFPS () {}
- framesRecursion () {}
- AddlocalStorage () {}
- extractLocalStorage () {}

# game.js

- Game () {}
- starLoop () {}
- timeLeftCount () {}
- drawFondo () {}
- drawWall () {}
- addBullet () {}
- addZombie (respawnMode) {}
- addIntervalJet () {}
- addNapalm () {}
- zombieAttack () {}
- zombieHitbox () {}
- drawNapalmRemains () {}
- drawnPilotMessage () {}
- zombieWin () {}
- soldierWin () {}
- infernoMode () {}
- winGameTimeout () {}
- winGame () {}
- gameOverTimeout () {}
- GameOver () {}

# soldier.js 

- Soldier () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.frames
    this.speed
}
- drawSoldier () {}
- movementSoldier () {}

# zombie.js 

- Zombie () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.walkSpeed
}
- drawZombie () {}
- moveZombie () {}
- fpsRenderSpeed () {}

# bullet.js 

- Bullet () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.speed
}
- drawBullet () {}
- shotSpeed () {}

# napalm.js 

- Napalm () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.speed
}
- drawNapalm () {}
- napalmExpand () {}

# jetPilot.js 

- jetpilot () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.jetPilotImg
}
- drawJetpilot () {}

# jet.js 

- Jet (yPos) {
    this.x;
    this.y;
    this.direction;
    this.size
    this.speed
    this.shadow
}
- drawJet () {}
- drawShadowJet () {}

# fire.js 

- Fire () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.speed
    this.frames
    this.imgFps
}
- drawFire () {}
- multiImage () {}

# Math.js 
Reutilizable Math functions:
- randomInt () {}
- fpsRenderice() {}

# Animations.js 
Retuilizable Functions for animations (setitemsTimeouts, interval, sprites...)
- changeColor() {}
- disappearButton() {}
- blinkingEnterButton() {}
- soldierShooting() {}
- soldierStop() {}
- soldierMove() {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- startScreen
- introScreen
- gameScreen
- loserScreen

## Task

- main - buildDom
- main - buildStartScreen
- main - buildIntroScreen
- main - buildGameScreen
- main - buildLoserScreen
- main - addEventListener
- main - addLocalStorage
- main - ExtractLocalStorage
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- game - addTentacle
- game - addZombie
- game - addFire
- game - addWall
- game - addJet
- game - addPilotMessage
- game - addPilotJet
- game - addNapalm
- soldier - draw
- soldier - move
- soldier - shoot
- soldier - checkCollision
- zombie - draw
- zombie - move
- zombie - checkCollision
- bullet - draw
- bullet - speed
- bullet - checkCollision
- game - checkCollision
- game - GameOver
- game - winGame

## Links

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/yebrai/Infectnation)
[Link Deploy](https://yebrai.github.io/Infectnation)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/11Y1Caqpzyk48BuuEiUYdhFXp5YDpCfBP_pi02C7vkVo/edit?usp=sharing)
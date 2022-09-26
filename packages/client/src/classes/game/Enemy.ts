import { CELL_SIDE } from "./constants"
import { FIELD_TEMPLATE } from "./constants"

enum DIRECTION {
    UP,
    RIGHT,
    DOWN,
    LEFT

}
const GHOST_SPRITE_SPACE = 50
class Enemy {
    x: number
    y: number
    directionX: number
    directionY: number
    nextDirectionX: number
    nextDirectionY: number
    currentDirection: DIRECTION | null
    nextDirection: DIRECTION | null
    velocity: number
    image: HTMLImageElement
    animationStartTime: number
    stepAnimationSprite: number
    startStepAnimationSprite: number
    nextDirectionTimestamp: number
    changeDirectionTime: number
    constructor(positionX: number, positionY: number) {
        this.x = positionX * CELL_SIDE
        this.y = positionY * CELL_SIDE
        this.directionX = 0
        this.directionY = 0
        this.nextDirectionX = 0
        this.nextDirectionY = 0
        this.velocity = 1
        this.currentDirection = null
        this.nextDirection = null
        this.setMoveDirection()
        this.image = new Image()
        this.image.src = './src/assets/images/ghost_1_sprite.png'
        this.animationStartTime = Date.now()
        this.stepAnimationSprite = 0
        this.startStepAnimationSprite = 0
        this.nextDirectionTimestamp = 0
        this.changeDirectionTime = Date.now()+5000
    }
    private isEqualDirections(){
        return this.directionX === this.nextDirectionX
            && this.directionY === this.nextDirectionY
    }
    private setMoveDirection() {
        const randomDirection = Math.floor(Math.random() * 4)
        switch (randomDirection) {
            case DIRECTION.UP: 
                this.nextDirection = DIRECTION.UP
            //    this.setDirection(0, -1); 
                this.setNextDirection(0, -1)
                break;
            case DIRECTION.RIGHT: 
                this.nextDirection = DIRECTION.RIGHT
            //    this.setDirection(1, 0);
                this.setNextDirection(1, 0)
                break;
            case DIRECTION.DOWN:
                this.nextDirection = DIRECTION.DOWN 
            //    this.setDirection(0, 1);
                this.setNextDirection(0, 1)
                break;
            case DIRECTION.LEFT:
                this.nextDirection = DIRECTION.LEFT
            //    this.setDirection(-1, 0); 
                this.setNextDirection(-1, 0)
                break;
        }
        if (this.didCollideWithWall()) this.setMoveDirection()
    }
    setDirection(x: number, y: number) {
        this.directionX = x
        this.directionY = y
    }
    setNextDirection(x: number, y: number){
        this.nextDirectionX = x
        this.nextDirectionY = y
    }
    private didCollideWithWall() {
        const positionX = this.x / CELL_SIDE
        const positionY = this.y / CELL_SIDE
            const nextCell = FIELD_TEMPLATE[positionY + this.nextDirectionY][positionX + this.nextDirectionX]
            return nextCell === 2
    }
    private changeDirection(){
        const currentTime = Date.now()
        if(currentTime > this.changeDirectionTime){
            this.setMoveDirection()
        }
    }
    public stop() {
        this.setDirection(0, 0)
        this.currentDirection = null
        this.nextDirection = null
    }
    public update() {
        
        if (Number.isInteger(this.x / CELL_SIDE) && Number.isInteger(this.y / CELL_SIDE)) {
            this.changeDirection()
 //           console.log(this.nextDirectionX, this.nextDirectionY)
            if(!this.isEqualDirections() && !this.didCollideWithWall()){
                this.setDirection(this.nextDirectionX, this.nextDirectionY)
                this.changeDirectionTime = Date.now() + Math.floor(Math.random()* 5000)
            }
            if (this.didCollideWithWall()) {
                this.setDirection(0, 0)
                this.setMoveDirection()
            }else{
                
            }
        }
        this.x = this.x + this.directionX * this.velocity
        this.y = this.y + this.directionY * this.velocity
    }
    private animation(ctx: CanvasRenderingContext2D) {
        if (this.directionY === 1) this.startStepAnimationSprite = 2
        if (this.directionY === -1) this.startStepAnimationSprite = 6
        if (this.directionX === 1) this.startStepAnimationSprite = 0
        if (this.directionX === -1) this.startStepAnimationSprite = 4
        if (Date.now() - this.animationStartTime > 100) {
            this.animationStartTime = Date.now()
            this.stepAnimationSprite++
        }
        if (this.stepAnimationSprite > 1) this.stepAnimationSprite = 0
        ctx.drawImage(
            this.image,
            0,
            GHOST_SPRITE_SPACE * (this.stepAnimationSprite + this.startStepAnimationSprite),
            38, 38, this.x, this.y, CELL_SIDE, CELL_SIDE)
    }
    public render(ctx: CanvasRenderingContext2D) {
        this.animation(ctx)
    }
}

export default Enemy

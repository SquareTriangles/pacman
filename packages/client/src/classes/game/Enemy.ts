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
    currentDirection: DIRECTION | null
    nextDirection: DIRECTION | null
    velocity: number
    image: HTMLImageElement
    animationStartTime: number
    stepAnimationSprite: number
    startStepAnimationSprite: number
    constructor(positionX: number, positionY: number) {
        this.x = positionX * CELL_SIDE
        this.y = positionY * CELL_SIDE
        this.directionX = 0
        this.directionY = 0
        this.velocity = 1
        this.currentDirection = null
        this.nextDirection = null
        this.setMoveDirection()
        this.image = new Image()
        this.image.src = './src/assets/images/ghost_1_sprite.png'
        this.animationStartTime = Date.now()
        this.stepAnimationSprite = 0
        this.startStepAnimationSprite = 0
    }
    private setMoveDirection() {
        const randomDirection = Math.floor(Math.random() * 4)
        switch (randomDirection) {
            case DIRECTION.UP: this.setDirection(0, -1); break;
            case DIRECTION.RIGHT: this.setDirection(1, 0); break;
            case DIRECTION.DOWN: this.setDirection(0, 1); break;
            case DIRECTION.LEFT: this.setDirection(-1, 0); break;
        }
        if (this.didCollideWithWall()) this.setMoveDirection()
    }
    setDirection(x: number, y: number) {
        this.directionX = x
        this.directionY = y
    }
    private didCollideWithWall() {
        const positionX = this.x / CELL_SIDE
        const positionY = this.y / CELL_SIDE
        if (Number.isInteger(positionX) && Number.isInteger(positionY)) {
            const nextCell = FIELD_TEMPLATE[positionY + this.directionY][positionX + this.directionX]
            return nextCell === 2
        }
    }
    public stop() {
        this.setDirection(0, 0)
        this.currentDirection = null
        this.nextDirection = null
    }
    public update() {
        if (Number.isInteger(this.x / CELL_SIDE) && Number.isInteger(this.y / CELL_SIDE)) {
            if (this.didCollideWithWall()) {
                this.setDirection(0, 0)
                this.setMoveDirection()
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

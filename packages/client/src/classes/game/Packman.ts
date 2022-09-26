import { CELL_SIDE } from "./constants"
const PACKMAN_SPRITE_SPACE = 50
class Packman {
    x: number
    y: number
    directionX: number
    directionY: number
    nextDirectionX: number
    nextDirectionY: number
    velocity: number
    direction: string
    nextDirection: string
    fieldMap: Array<number[]> | null
    image: HTMLImageElement
    animationStartTime: number
    stepAnimationSprite: number
    startStepAnimationSprite: number

    constructor(positionColumn: number, positionRow: number) {
        this.image = new Image()
        this.image.src = './src/assets/images/packman_sprite.png'
        this.x = positionColumn * CELL_SIDE
        this.y = positionRow * CELL_SIDE
        this.directionX = 0
        this.directionY = 0
        this.nextDirectionX = 0
        this.nextDirectionY = 0
        this.velocity = 1
        this.direction = ''
        this.nextDirection = ''
        this.fieldMap = null
        this.animationStartTime = Date.now()
        this.stepAnimationSprite = 0
        this.startStepAnimationSprite = 0
    }
    public render(ctx: CanvasRenderingContext2D) {
        this.animation(ctx)
    }
    public setDirection(directionX: number = this.directionX, directionY: number) {
        this.directionX = directionX
        this.directionY = directionY
    }
    private animation(ctx: CanvasRenderingContext2D) {
        if (this.directionY === 1) this.startStepAnimationSprite = 4
        if (this.directionY === -1) this.startStepAnimationSprite = 9
        if (this.directionX === 1) this.startStepAnimationSprite = 0
        if (this.directionX === -1) this.startStepAnimationSprite = 7
        if (Date.now() - this.animationStartTime > 100) {
            this.animationStartTime = Date.now()
            this.stepAnimationSprite++
        }
        if (this.stepAnimationSprite > 2) this.stepAnimationSprite = 0
        ctx.drawImage(
            this.image,
            0,
            PACKMAN_SPRITE_SPACE * (this.stepAnimationSprite + this.startStepAnimationSprite),
            38, 38, this.x, this.y, CELL_SIDE, CELL_SIDE
        )
    }
    public update() {
        if (Number.isInteger(this.x / CELL_SIDE) && Number.isInteger(this.y / CELL_SIDE)) {
            if (!(this.directionX == this.nextDirectionX && this.directionY == this.nextDirectionY)) {
                this.setDirection(this.nextDirectionX, this.nextDirectionY)
            }
            if (this.fieldMap !== null) {
                const nextCell = this.fieldMap[this.y / CELL_SIDE + this.directionY][this.x / CELL_SIDE + this.directionX]
                if (nextCell === 2) {
                    this.setDirection(0, 0)
                }
            }

        }

        this.x = this.x + this.directionX * this.velocity
        this.y = this.y + this.directionY * this.velocity
    }
    /*   public step(directionX: number, directionY: number, fieldMap: Array<number[]>) {
           if (Number.isInteger(this.x / CELL_SIDE) && Number.isInteger(this.y / CELL_SIDE)) {
               const nextCell = fieldMap[this.y / CELL_SIDE + directionY][this.x / CELL_SIDE + directionX]
               if (nextCell !== 2) {
                   this.step(directionX, directionY, fieldMap)
               } else {
                   this.setDirection(0, 0)
               }
           }
       }*/
    public move(directionX: number, directionY: number, fieldMap: Array<number[]>) {
        this.nextDirectionX = directionX
        this.nextDirectionY = directionY
        this.fieldMap = fieldMap
    }
}

export default Packman

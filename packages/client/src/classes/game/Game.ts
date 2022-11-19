import Field from "./Field"
import { CELL, CELL_SIDE, FIELD_TEMPLATE } from "./constants"
import Packman from "./Packman"
import Enemy from "./Enemy"

//const EatCoin = new Audio()
//EatCoin.src = './src/assets/audio/eat_coin_sound.mp3'

class Game{
    field: Field
    packman: Packman
    score: number
    coins: number
    enemies: Enemy[]
    enemyScared: boolean
    constructor(){
        this.field = new Field(FIELD_TEMPLATE)
        this.score = 0
        this.packman = new Packman(1, 10)
        this.enemies = []
        this.setEnemy()
        this.coins = this.field.maxCoin
        this.enemyScared = false
        addEventListener('keydown', this.handleKeyDown)        
    }
    private setEnemy(){
        this.enemies.push(new Enemy(13, 2))
        this.enemies.push(new Enemy(8, 8))
    }
    public handleKeyDown = (e: KeyboardEvent) => {
        const { key } = e
        if(key === 'w'){
            this.packman.move(0, -1, this.field.fieldMap)
        }
        if(key === 's'){
            this.packman.move(0, 1, this.field.fieldMap)
        }
        if(key === 'a'){
            this.packman.move(-1, 0, this.field.fieldMap)
        }
        if(key === 'd'){
            this.packman.move(1, 0, this.field.fieldMap)
        }
    }

    public update(){
        this.enemies.forEach(enemy => {
            enemy.update()
        })
        this.packman.update()
    }
    public getScore(){
        return this.score
    }
    public isCollideWithCoin(){
        const positionX = this.packman.x/CELL_SIDE
        const positionY = this.packman.y/CELL_SIDE
        if(Number.isInteger(positionX) && Number.isInteger(positionY)){

            if(this.field.fieldMap[positionY][positionX] === 1){
//                EatCoin.play()
                this.field.fieldMap[this.packman.y / CELL_SIDE][this.packman.x / CELL_SIDE] = 0
                this.score += 10
                return this.score
            }
        }
    }
    public isCollideWithPowerball(){
        const positionX = this.packman.x/CELL_SIDE
        const positionY = this.packman.y/CELL_SIDE
        if(Number.isInteger(positionX) && Number.isInteger(positionY)){

            if(this.field.fieldMap[positionY][positionX] === CELL.POWERBALL){
                this.field.fieldMap[this.packman.y / CELL_SIDE][this.packman.x / CELL_SIDE] = 0              
                return true
            }
        }  
    }
    public isCollideWithGhost(){
        let isCollide = false
        this.enemies.forEach(enemy => {
            const centerX = enemy.x + CELL_SIDE / 2
            const centerY = enemy.y + CELL_SIDE / 2

            if(centerX > this.packman.x
                && centerX < this.packman.x + CELL_SIDE
                && centerY > this.packman.y
                && centerY < this.packman.y + CELL_SIDE
            ){
                isCollide = true
            }
        })
        return isCollide
    }
    public end(){
        removeEventListener('keydown', this.handleKeyDown)
        this.enemies.forEach(enemy => {
            enemy.stop()
        })
    }
}

export default Game

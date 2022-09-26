import Block from "./Block"
import Point from "./Point"
import { CELL, CELL_SIDE } from "./constants"

class Field {
    fieldMap: Array<number[]>
    blocks: Block[]
    points: Point[]
    maxCoin: number
    constructor(template: Array<number[]>){
        this.fieldMap = this.copyTemplate(template)
        this.points = []
        this.blocks = []
        this.maxCoin = this.getMaxCountCoins(template)
    }
    private copyTemplate(template: Array<number[]>){
        const copy = template.map(row => {
            return row.slice()
        })
        return copy
    }

    private getMaxCountCoins(template: Array<number[]>){
        let count = 0
        template.forEach(row => {
            row.forEach(cell => {
                if(cell === CELL.COIN) count ++
            })
        })
        return count
    }

    public render(ctx: CanvasRenderingContext2D){
        let x = 0
        let y = 0
        this.fieldMap.forEach((element: number[]) => {
            
            x = 0
            element.forEach((num: number) => {
                if(num === CELL.EMPTY){
                    ctx.fillStyle = '#151638'
                    ctx.fillRect(x, y, CELL_SIDE, CELL_SIDE)
                }
                if(num === CELL.COIN){
                    ctx.fillStyle = '#151638'
                    ctx.fillRect(x, y, CELL_SIDE, CELL_SIDE)                    
                    ctx.fillStyle = 'yellow'
                    const centerX = x + CELL_SIDE / 2
                    const centerY = y + CELL_SIDE / 2
                    ctx.beginPath()
                    ctx.arc(centerX, centerY, CELL_SIDE/5, 0, 2*Math.PI, false)
                    ctx.stroke()
                    ctx.fill()
                }
                if(num === CELL.WALL){
                    ctx.fillStyle = '#06a2d1'
                    ctx.fillRect(x, y, CELL_SIDE, CELL_SIDE)
                }
                x = x + CELL_SIDE           
            })
            y = y + CELL_SIDE
        }); 
    }
    
}

export default Field

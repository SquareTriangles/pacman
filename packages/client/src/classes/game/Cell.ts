type TCellProps = {
    type: number
}
type TPosition = {
    column: number
    row: number
}
type TCoords = {
    x: number
    y: number
}
const CELL_SIDE = 20
class Cell{
    coords: TCoords
    position: TPosition    
    constructor(row: number, column: number){
        this.position = {
            column: column,
            row: row
        }        
        this.coords = this.getCoords()
        console.log(this.coords)

    }
    private getCoords(){
        console.log(this.position)
        return {
            x: this.position.column * CELL_SIDE,
            y: this.position.row * CELL_SIDE
        }
    }
}

export default Cell

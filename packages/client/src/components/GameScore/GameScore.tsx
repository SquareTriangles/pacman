import type React from "react"
import { Typography } from "@mui/material";

interface IGameScoreProps {
    score: number
}

const GameScore: React.FC<IGameScoreProps> = (props) => {
    return (
        <Typography sx={{
            fontFamily: 'PressStart2P'
        }} variant='h6'>Scores: {props.score}</Typography>  
    )
}

export default GameScore

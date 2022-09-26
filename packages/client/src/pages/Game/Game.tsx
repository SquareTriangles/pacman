import { Typography, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import GameApp from "../../components/GameApp/GameApp";
import GameScore from "../../components/GameScore/GameScore";
import Packman from "../../classes/game/Packman";
import { CELL_SIDE } from "../../classes/game/constants";
import EndGameModal from "../../components/EndGameModal";
import { useNavigate } from "react-router-dom";

const Game: React.FC = () => {
const [score, setScore] = useState(0)
const handleChangeScore = (newScore: number) => {
    setScore(score => score + newScore)
}
    return (
        <>
            <GameScore score = {score}></GameScore>
            <GameApp onChangeScore={handleChangeScore}></GameApp>
           
        </>
    )
}

export default Game

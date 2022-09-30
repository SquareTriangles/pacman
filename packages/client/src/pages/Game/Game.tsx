import { Typography, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Game from "../../classes/game/Game";
import Packman from "../../classes/game/Packman";
import { CELL_SIDE } from "../../classes/game/constants";
import EndGameModal from "../../components/EndGameModal";
import { useNavigate } from "react-router-dom";
import * as routeList from '../../utils/Routes'

const GameApp: React.FC = () => {
    const [game, setGame] = useState(new Game)
    const canvasRef = useRef(null)
    const [score, setScore] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const startGame = () => {
        setGame(new Game)
        setScore(0)
        setIsModalOpen(false)
    }
    const update = () => {
        game.update()
        const isCollideWithCoin = game.isCollideWithCoin()
        if (isCollideWithCoin) {
            game.coins--
            if (game.coins === 0) end()
            //     setScore(isCollideWithCoin)
        }
        if (game.isCollideWithGhost()) {
            end()
        }
    }

    const render = () => {
        if (canvasRef && canvasRef.current) {
            const canvasEl = canvasRef.current as HTMLCanvasElement
            const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D
            ctx.clearRect(0, 0, 300, 300)
            game.field.render(ctx)
            game.packman.render(ctx)
            game.enemies.forEach(enemy => {
                enemy.render(ctx)
            })
        }
    }
    const end = () => {
        game.end()
        setIsModalOpen(true)
    }
    const closeGame = () => {
        navigate(routeList.MAIN_ROUTE)
    }
    const animate = () => {
        update()
        render()
        requestAnimationFrame(animate)
    }
    useEffect(() => {
        if (canvasRef && canvasRef.current) {
            const canvasEl = canvasRef.current as HTMLCanvasElement
            const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D
            animate()
        }

    })

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h3'>Packman</Typography>

                <canvas ref={canvasRef} width={300} height={300}></canvas>
                <EndGameModal
                    isOpen={isModalOpen}
                    newGameAction={startGame}
                    endGameAction={closeGame}
                ></EndGameModal>
            </Box>

        </>

    )
}

export default GameApp

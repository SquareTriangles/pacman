import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import GameScore from "../../components/GameScore/GameScore";
import EndGameModal from "../../components/EndGameModal";
import { useNavigate } from "react-router-dom";
import Game from "../../classes/game/Game";

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
            setScore(score => score + 10)
            game.coins--
            if (game.coins === 0) end()
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
        navigate('/')
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

    }, [game])

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <GameScore score={score}></GameScore>
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

import { Typography, Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Game from "../../classes/game/Game";
import Packman from "../../classes/game/Packman";
import { CELL_SIDE } from "../../classes/game/constants";
import EndGameModal from "../../components/EndGameModal";
import { useNavigate } from "react-router-dom";
import * as routeList from '../../utils/Routes'
import { useFullscreenStatus, useAppDispatch, useAppSelector } from '../../hooks';
import FullScreenButton from './components/FullScreenButton'
import { setScore } from '../../redux/leaderboard/leaderboard.actions'
import { selectProfile } from "../../redux/user/user.slice";

const GameApp: React.FC = () => {
    const fullScreenRef:React.RefObject<HTMLElement> = useRef(null)
    const [isFullscreen, changeFullScreenMode] = useFullscreenStatus(fullScreenRef);
    const [game, setGame] = useState(new Game)
    const canvasRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const profile = useAppSelector(selectProfile);
    const dispatch = useAppDispatch();
    
    const setUserScore = (score: number) => {
        const { id, login } = profile;
        dispatch(setScore({
            id: String(id), login, score
        }))
    }
    const startGame = () => {
        setGame(new Game)
        setIsModalOpen(false)
    }
    const update = () => {
        game.update()
        const isCollideWithCoin = game.isCollideWithCoin()
        if (isCollideWithCoin) {
            game.coins--
            if (game.coins === 0) {
                end()
                setUserScore(game.getScore())
            } 
        }
        if (game.isCollideWithGhost()) {
            end()
            setUserScore(game.getScore())
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
}, [])

    return (
        <>
            <Box 
                ref={fullScreenRef}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
            }}>
                <Typography variant='h3'>Packman</Typography>

                <canvas ref={canvasRef} width={300} height={300}></canvas>
                {
                    isFullscreen !== null
                        ? <FullScreenButton onClick={changeFullScreenMode} isActive={isFullscreen} />
                        : <></>
                }
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

import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import GameScore from "../../components/GameScore/GameScore";
import EndGameModal from "../../components/EndGameModal";
import { useNavigate } from "react-router-dom";
import Game from "../../classes/game/Game";
//@ts-ignore
import eatCoinSound from "../../assets/audio/eat_coin_sound.mp3"
import type Enemy from "../../classes/game/Enemy"
import StartLoader from '../../components/StartLoader/StartLoader'
import { useFullscreenStatus } from "../../hooks";
import FullScreenButton from "./components/FullScreenButton";

const GameApp: React.FC = () => {
    const fullScreenRef:React.RefObject<HTMLElement> = useRef(null)
    const [game, setGame] = useState<Game | null>(null)
    const canvasRef = useRef(null)
    const [score, setScore] = useState(0)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFullscreen, changeFullScreenMode] = useFullscreenStatus(fullScreenRef);
    const [isShowLoader, setIsShowLoader] = useState(true);
    const navigate = useNavigate()
    const startGame = () => {
        setAudio(new Audio(eatCoinSound))
        setGame(new Game)
        setScore(0)
        setIsModalOpen(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsShowLoader(false)
            setGame(new Game)
        }, 2000)
    }, [])
    const update = () => {
        if(game !== null){
            (game as Game).update()
            const isCollideWithCoin = (game as Game).isCollideWithCoin();
            if (isCollideWithCoin) {
                if(audio) audio.play();
                setScore(score => score + 10);
                (game as Game).coins--;
                if ((game as Game).coins === 0) end()
            }
            if ((game as Game).isCollideWithGhost()) {
                end()
            }
        }

    }

    const render = () => {
        
        if (canvasRef && canvasRef.current && game !== null) {
            const canvasEl = canvasRef.current as HTMLCanvasElement
            const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D
            ctx.clearRect(0, 0, 300, 300);
            (game as Game).field.render(ctx);
            (game as Game).packman.render(ctx);
            (game as Game).enemies.forEach((enemy: Enemy) => {
                enemy.render(ctx)
            })
        }
    }
    const end = () => {
    //    if(game === null) return
        (game as Game).end()
        setIsModalOpen(true)
    }
    const closeGame = () => {
        navigate('/')
        end()
    }
    const animate = () => {
        update()
        render()
        requestAnimationFrame(animate)
    }
    useEffect(() => {
        
        if (canvasRef && canvasRef.current) {
        //    startGame()
            animate()
        }

    }, [game])

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
                <GameScore score={score}></GameScore>
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
                {
                    isShowLoader
                        ? <StartLoader />
                        : <> </>
                }
            </Box>

        </>

    )
}

export default GameApp

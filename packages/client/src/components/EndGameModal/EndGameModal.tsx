import type React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import './styles.modul.css'
import { useNavigate } from "react-router-dom";

interface IEndGameModalProps{
    isOpen: boolean
    newGameAction: () => void
    endGameAction: () => void
}

const EndGameModal: React.FC<IEndGameModalProps> = (props) => {

    const handleNewGame = () => {
        props.newGameAction()
    }
    const handleEndGame = () => {
        props.endGameAction()
    }
    return (
        <>
            <Modal
                open={props.isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='endgame__modal'>
                    <Typography mb={2} variant="h4">
                        Игра окончена
                    </Typography>
                    <Button sx={{
                        bgcolor: '#fff59d',
                        border: '1px solid black',
                        color: 'black'
                    }}
                        onClick={handleEndGame}
                        >
                            Таблица лидеров
                        </Button>
                    <Stack direction='row' mt={3} spacing={1}>
                        <Button sx={{
                            bgcolor: '#ff9800',
                            border: '2px solid black',
                            color: 'black'
                        }}
                            onClick={handleNewGame}>Сыграть снова</Button>
                        <Button sx={{
                            bgcolor: '#ffe0b2',
                            border: '1px solid black',
                            color: 'black'
                        }} onClick={handleEndGame}>Главное меню</Button>
                    </Stack>


                </Box>
            </Modal>
        </>


    )
}

export default EndGameModal

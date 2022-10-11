import React from 'react'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Button from '@mui/material/Button';

type TFullScreenButtonProps = {
  onClick: () => void,
  isActive: boolean,
}

const FullScreenButton:React.FC<TFullScreenButtonProps> = ({ isActive, onClick }) => {
  return (
    <Button 
      variant="outlined" 
      onClick={() => {onClick()}}>
        {isActive ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
    </Button>
  )
}

export default FullScreenButton;

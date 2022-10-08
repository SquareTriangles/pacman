import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'
import yandexIcon from '../../../assets/images/yandex.svg'


const OAuthPanel:React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px'
      }}
    >
      <Link 
        href="#" 
        underline="hover"
        sx={{
          backgroundImage: `url(${yandexIcon})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%',
          height: '30px',
        }}
      >
      </Link>
    </Box>
  );
}

export default OAuthPanel;

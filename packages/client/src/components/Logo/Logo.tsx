import type React from 'react'
import Typography from '@mui/material/Typography'

const LOGO_TEXT = 'PACMAN'

type TcolorProps = {
  color?: string,
}

const Logo: React.FC<TcolorProps> = ({ color = '#000' }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="span"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'pacman, sans-serif',
        fontWeight: 700,
        letterSpacing: '.1rem',
        color: color,
        textDecoration: 'none',
        border: `2px solid ${color}`,
        borderRadius: '5px',
        padding: '3px'
      }}>
      {LOGO_TEXT}
    </Typography>
)
}

export default Logo;
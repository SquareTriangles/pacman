import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';  
import Leaderboard from '../Leaderboard'
import Button from '@mui/material/Button';
import { ForumLargeButton } from '../Forum/components/Button/Button';
import styles from './styles.module.css';

const MAIN_BUTTON_TEXT = 'PLAY';

const Home: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sx={{
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid coral',
        }}>
          <ForumLargeButton text={MAIN_BUTTON_TEXT} className={styles.button}/>
        </Grid>
        <Grid item xs={6}>
          <Leaderboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home

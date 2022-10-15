import { useEffect, FC } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Leaderboard from '../Leaderboard'
import { ForumLargeButton } from '../Forum/components/Button/Button';
import { getTeamLeaderboard } from '../../redux/leaderboard/leaderboard.actions'
import { useAppDispatch } from '../../hooks'
import { useAppSelector } from '../../hooks'
import { selectLeaderboardUserList } from '../../redux/leaderboard/leaderboard.slice'
import styles from './styles.module.css';

const MAIN_BUTTON_TEXT = 'PLAY';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const leaderboardList = useAppSelector(selectLeaderboardUserList) || [];

  useEffect(() => {
    dispatch(getTeamLeaderboard({cursor: 0, limit: 10 }));
  }, [leaderboardList])
  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sx={{
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
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

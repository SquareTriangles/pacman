import { useEffect, FC } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Leaderboard from '../Leaderboard'
import { ForumLargeButton } from '../Forum/components/Button/Button';
import { getTeamLeaderboard } from '../../redux/leaderboard/leaderboard.actions'
import { useAppDispatch } from '../../hooks'
//@ts-ignore
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { GAME_ROUTE } from '../../utils/Routes';

const MAIN_BUTTON_TEXT = 'PLAY';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  // const leaderboardList = useAppSelector(selectLeaderboardUserList) || [];

  useEffect(() => {
    dispatch(getTeamLeaderboard({cursor: 0, limit: 10 }));
  }, [])

  const onPlayClick = () => {
    navigate(GAME_ROUTE)
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={6} sx={{
          alignSelf: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ForumLargeButton text={MAIN_BUTTON_TEXT} className={styles.button} onClick={onPlayClick} />
        </Grid>
        <Grid item xs={6}>
          <Leaderboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home

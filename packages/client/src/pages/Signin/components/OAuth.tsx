import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'
//@ts-ignore
import yandexIcon from '../../../assets/images/yandex.svg'
import { getOAuthYandexServiceId, signinWithOAuthYandex, getProfile } from '../../../redux/user/user.actions'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { selectServiceId } from '../../../redux/user/user.slice'
import { useLocation  } from "react-router-dom";

const REDIRECT_URI = 'https://secure-brook-86392.herokuapp.com/signin';

const renderOAuthLink = (service_id:string, redirect_uri:string):string => {
  if (typeof service_id !== 'string') {
    return '#'
  }
  return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirect_uri}`
}


const OAuthPanel:React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch()
  const service_id = useAppSelector(selectServiceId)
  const { isAuth } = useAppSelector(state => state.user)

  const getAuthCode = () => {
    const code = location.search;
    let res = null;
    if (code) {
      res = code.replace('?code=', '')
    }
    return res
  }

  const handleOAuth = async (code: string, redirect_uri: string) => {
    const statusAction = await dispatch(signinWithOAuthYandex({code, redirect_uri}));
    if (statusAction.payload) {
      dispatch(getProfile());
    } else {
      console.log(statusAction.payload)
    }
  }

  React.useEffect(() => {
    const oauthCode = getAuthCode();
    if (!isAuth && oauthCode) {
      handleOAuth(oauthCode, REDIRECT_URI);
    }
    dispatch(getOAuthYandexServiceId(REDIRECT_URI))
  }, [])

  const OAuthYandexLink = renderOAuthLink(service_id, REDIRECT_URI)

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
        href={OAuthYandexLink}
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

import React from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'
import yandexIcon from '../../../assets/images/yandex.svg'
import { getOAuthYandexServiceId } from '../../../redux/user/user.actions'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { selectServiceId } from '../../../redux/user/user.slice'

const REDIRECT_URI = 'https://secure-brook-86392.herokuapp.com/signin';

const renderOAuthLink = (service_id:string, redirect_uri:string):string => {
  if (typeof service_id !== 'string') {
    return '#'
  }
  return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirect_uri}`
}

const OAuthPanel:React.FC = () => {
  const dispatch = useAppDispatch()
  const service_id = useAppSelector(selectServiceId)
  React.useEffect(() => {
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

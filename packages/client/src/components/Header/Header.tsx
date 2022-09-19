import * as React from 'react'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import Logo from '../Logo'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { logout } from '../../redux/user/user.actions'
import * as routeList from '../../utils/Routes';
import { withAuth } from '../../HOCs'

const pages = [
  { link: routeList.FORUM_ROUTE, title: 'Форум' },
  { link: routeList.SIGNIN_ROUTE, title: 'Вход' },
  { link: routeList.SIGNUP_ROUTE, title: 'Регистрация' },
  { link: routeList.ABOUT_ROUTE, title: 'О нас' },
]

const LINK_COLOR = '#000'
const HEADER_COLOR = '#fccf00'

type TmainLinkProps = {
  key: string,
  to: string,
  title: string,
};

type TheaderProfileProps = {
  anchorElUser: null | HTMLElement,
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
  handleCloseUserMenu: () => void,
  handleLogout: () => void,
}

type TlinkHeaderBoxProps = {
  pages: Array<{link: string, title: string}>
}


type TheaderMenuItemProps = {
  link: string,
  title: string,
  onClick: () => void,
};

type TsmallDisplayLinkHeaderBoxProps = TlinkHeaderBoxProps & {
  anchorElNav: null | HTMLElement,
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void,
}

const MainLink: React.FC<TmainLinkProps> = ({ key, to, title }) => {
  const location = useLocation();
  return (<Link
    component={RouterLink}
    key={key}
    to={to}
    color={LINK_COLOR}
    style={{
      marginLeft: '15px',
      fontWeight: 500,
      fontFamily: 'PressStart2P',
      fontSize: '0.8rem',
      textDecoration: (location.pathname === to) ? 'underline': 'none'
    }}>
    {title}
  </Link>)
}

const LinkHeaderBox:React.FC<TlinkHeaderBoxProps> = ({ pages }) => {
  const { isAuth } = useAppSelector(state => state.user)
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {
      pages.map(page => {
        if (page.link === routeList.FORUM_ROUTE) {
          return (
            <AuthMainLink 
              key={page.link}
              to={page.link}
              title={page.title}
            />
          )
        }
        if (isAuth && (page.link === routeList.SIGNIN_ROUTE 
          || page.link === routeList.SIGNUP_ROUTE)
        ) {
          return <React.Fragment> </React.Fragment>
        }
        return (
          <MainLink 
            key={page.link}
            to={page.link}
            title={page.title}
          />
        )
      })}
    </Box>
  )
}

const SmallDisplayLinkHeaderBox:React.FC<TsmallDisplayLinkHeaderBoxProps> = (
  { anchorElNav, pages, handleOpenNavMenu, handleCloseNavMenu }) => {
  const { isAuth } = useAppSelector(state => state.user)
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}>
        {pages.map(page => {
        if (page.link === routeList.FORUM_ROUTE) {
          return (
            <AuthHeaderMenuItem 
              link={page.link}
              title={page.title}
              onClick={handleCloseNavMenu}
            />
          )
        }
        if (isAuth && (page.link === routeList.SIGNIN_ROUTE 
          || page.link === routeList.SIGNUP_ROUTE)
        ) {
          return <React.Fragment> </React.Fragment>
        }
        return (
          <HeaderMenuItem 
            link={page.link}
            title={page.title}
            onClick={handleCloseNavMenu}
          />
        )
      })}
      </Menu>
    </Box>
  );
}

const HeaderMenuItem: React.FC<TheaderMenuItemProps> = ({ title, link, onClick}) => {
  const location = useLocation();
  return (
    <MenuItem key={link} onClick={onClick}>
      <Link
        component={RouterLink}
        to={link}
        color={LINK_COLOR}
        style={{
          textDecoration: (location.pathname === link) ? 'underline': 'none'
        }}>
        <Typography textAlign="center">{title}</Typography>
      </Link>
    </MenuItem>
  );
}

const HeaderProfile: React.FC<TheaderProfileProps> = ({ anchorElUser, handleOpenUserMenu, handleCloseUserMenu, handleLogout }) => {
  const { avatar } = useAppSelector(state => state.user.profile)
  return (<Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={avatar} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>

            <MenuItem onClick={handleCloseUserMenu}>
              <Link
                component={RouterLink}
                to={routeList.PROFILE_ROUTE}
                color="#000"
                style={{ textDecoration: 'none' }}>
                <Typography textAlign="center">Профиль</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Button onClick={handleLogout}>
                Выйти
              </Button>
            </MenuItem>
          </Menu>
        </Box>
  );
}

const AuthMainLink: React.FC<TmainLinkProps> = withAuth(MainLink)
const AuthHeaderMenuItem: React.FC<TheaderMenuItemProps> = withAuth(HeaderMenuItem)
const AuthHeaderProfile: React.FC<TheaderProfileProps> = withAuth(HeaderProfile)

const Header: React.FC = () => {
  const dispatch = useAppDispatch()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    handleCloseUserMenu()
  }

  return (
    <AppBar position="static" sx={{background: HEADER_COLOR, color: LINK_COLOR }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Link
            component={RouterLink}
            to={routeList.MAIN_ROUTE}
            color={LINK_COLOR}
            style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          <SmallDisplayLinkHeaderBox
            anchorElNav={anchorElNav}
            pages={pages}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          
          <LinkHeaderBox pages={pages} />
          
          <AuthHeaderProfile
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
            handleLogout={handleLogout}
          />

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header

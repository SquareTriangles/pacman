import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getProfile } from '../../redux/user/user.actions'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'
import ProfilePassword from './components/ProfilePassword/ProfilePassword'
import TabPanel from './components/TabPanel/TabPanel'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { selectAvatar } from '../../redux/user/user.slice'

const Profile: React.FC = () => {
  const dispatch = useAppDispatch()

  const { profile, loading } = useAppSelector(state => state.user)

  const avatarPath = useAppSelector(selectAvatar)

  const [currentTab, setCurrentTab] = React.useState(0)

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Tabs
        variant="scrollable"
        value={currentTab}
        onChange={handleChangeTab}
        aria-label="disabled tabs example">
        <Tab label="Информация" />
        <Tab label="Настройки" />
        <Tab label="Смена пароля" />
      </Tabs>

      <Box sx={{ mt: 12 }}>
        <TabPanel index={0} value={currentTab}>
          <ProfileInfo profile={{ ...profile, avatar: avatarPath }} />
        </TabPanel>
        <TabPanel index={1} value={currentTab}>
          <ProfileSettings
            profile={{ ...profile, avatar: avatarPath }}
            loading={loading}
          />
        </TabPanel>
        <TabPanel index={2} value={currentTab}>
          <ProfilePassword loading={loading} />
        </TabPanel>
      </Box>
    </Container>
  )
}

export default Profile

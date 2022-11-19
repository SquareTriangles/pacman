import type React from 'react'
import type { IUserModel } from '../../../../models/user.model'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import TagIcon from '@mui/icons-material/Tag'

export interface IProfileIntoProps {
  profile: IUserModel
}

const ProfileInfo: React.FC<IProfileIntoProps> = ({ profile }) => {
  const fullName = `${profile.first_name} ${profile.second_name}`

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        p: 5,
        pt: 10,
      }}>
      <Paper
        elevation={10}
        sx={{
          position: 'absolute',
          top: '-80px',
          borderRadius: '50%'
        }}>
        <Avatar
          alt="avatar"
          src={profile.avatar}
          sx={{
            width: 160,
            height: 160,
          }}
        />
      </Paper>
      <Typography sx={{ mt: 3 }} variant="h6" align="center">
        {fullName}
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <TagIcon />
          </ListItemIcon>
          <ListItemText primary={profile.display_name} secondary="Отображаемое имя" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={profile.phone} secondary="Телефон" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText primary={profile.email} secondary="Почта" />
        </ListItem>
      </List>
    </Paper>
  )
}

export default ProfileInfo

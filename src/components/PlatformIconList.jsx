/* eslint-disable react/prop-types */
import { Grid, IconButton } from '@mui/material'
import { createElement } from 'react'
import { BsGlobe } from 'react-icons/bs'
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }
  return (
    <Grid container spacing={1}>
      {platforms.map((platform) => (
        <Grid item key={platform.id}>
          <IconButton
            size='small'
            edge='start'
            color='success'
            aria-label='open drawer'
          >
            {createElement(iconMap[platform.slug])}
          </IconButton>
        </Grid>
      ))}
    </Grid>
  )
}

export default PlatformIconList

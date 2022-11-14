import { useEffect } from 'react'

import { Avatar, Box, Divider, Drawer, List, Typography } from '@material-ui/core'
import {
  BarChart as BarChartIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon
} from 'react-feather'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const user = {
  avatar: '/static/images/avatars/hello.png',
  jobTitle: 'My Dashboard',
  name: 'Bob Lu'
}

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/converters',
    icon: UserIcon,
    title: 'Converters'
  },
  {
    href: '/app/evmTools',
    icon: ShoppingBagIcon,
    title: 'EVM Tools'
  },
  {
    href: '/app/pomodoro',
    icon: ClockIcon,
    title: 'Pomodoro'
  },
  {
    href: '/app/countdown',
    icon: ClockIcon,
    title: 'Countdown'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers - demo'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products - demo'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account - demo'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings - demo'
  },
  {
    href: '/app/portfolio',
    icon: DollarSignIcon,
    title: 'DeFi Portfolio'
  }
]

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation()

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [location.pathname, openMobile, onMobileClose])

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}>
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2
        }}></Box>
    </Box>
  )

  return (
    <>
      <Box display={{ lg: 'none' }}>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}>
          {content}
        </Drawer>
      </Box>
      <Box display={{ xs: 'none', lg: 'block' }}>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}>
          {content}
        </Drawer>
      </Box>
    </>
  )
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
}

export default DashboardSidebar

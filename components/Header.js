import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import auth from "../auth_/auth/auth-helper";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import Link from "next/link"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const { asPath } = useRouter();
  const router = useRouter()
  const [color, setColor] = useState('white')
  const [path, setPath] = useState("/")
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSetPath = (path) => {
    () => setPath(path)
    if (asPath == path) {
      () => setColor('green')
    } else {
      () => setColor('orange')
    }

  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

if(auth.isAuthenticated()){
  return(
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/" aria-label="Home"
            onClick={handleSetPath('/')}
            className={color}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >Starr

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/users" onClick={handleSetPath('/users')} className={color} textAlign="center">Users</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/signup" onClick={() => setPath("/signup")} className={color} textAlign="center">Sign Up</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/signin" onClick={handleSetPath('/signin')} className={color} textAlign="center">Sign In</Typography>
              </MenuItem>


            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Starr
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              href="/users" onClick={() => { handleSetPath('/users'); handleCloseNavMenu }}
              sx={{ my: 2, color: { color }, display: 'block' }}
            >
              Users
            </Button>
            <Button href={"/users/" + auth.isAuthenticated().user._id} onClick={() => { handleSetPath('/'); handleCloseNavMenu }}
      sx={{ my: 2, color: { color }, display: 'block' }}
    >
      My Profile
    </Button>
    <Button color="inherit" onClick={() => {
      auth.clearJWT(() => router('/'))
    }}>Sign out</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/" aria-label="Home"
            onClick={handleSetPath('/')}
            className={color}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >Starr

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/users" onClick={handleSetPath('/users')} className={color} textAlign="center">Users</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/signup" onClick={() => setPath("/signup")} className={color} textAlign="center">Sign Up</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography component="a" href="/signin" onClick={handleSetPath('/signin')} className={color} textAlign="center">Sign In</Typography>
              </MenuItem>


            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Starr
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              href="/users" onClick={() => { handleSetPath('/users'); handleCloseNavMenu }}
              sx={{ my: 2, color: { color }, display: 'block' }}
            >
              Users
            </Button>
             <Button
                  href="/signup" onClick={() => { handleSetPath('/signup'); handleCloseNavMenu }}
                  sx={{ my: 2, color: { color }, display: 'block' }}
                >
                  Sign Up
                </Button>
                <Button
                  href="/signin" onClick={() => { handleSetPath('/signin'); handleCloseNavMenu }}
                  sx={{ my: 2, color: { color }, display: 'block' }}
                >
                  Sign In
                </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default Header;
